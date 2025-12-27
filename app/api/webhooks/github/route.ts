import { db } from "@/db/client";
import { githubInstallations } from "@/db/schema";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  const event = req.headers.get("x-github-event");
  const body = await req.json();

  const installationId = body.installation?.id;

  if (!installationId) {
    return NextResponse.json({ ignored: true });
  }

  const [installation] = await db
    .select()
    .from(githubInstallations)
    .where(eq(githubInstallations.installationId, installationId))
    .limit(1);

  if (!installation) {
    return NextResponse.json({ ignored: true });
  }

  if (event === "installation" && body.action === "deleted") {
    await db
      .delete(githubInstallations)
      .where(eq(githubInstallations.installationId, installationId));
  }

  if (event === "repository" && body.action === "created") {
    console.log(body.repository.full_name);
  }

  if (event === "push") {
    console.log(body.repository.full_name);
  }

  return NextResponse.json({ ok: true });
}
