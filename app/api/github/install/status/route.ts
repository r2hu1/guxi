import { db } from "@/db/client";
import { githubInstallations } from "@/db/schema";
import { auth } from "@/lib/auth/init";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export async function GET() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return NextResponse.json({ connected: false });
  }

  const [installation] = await db
    .select()
    .from(githubInstallations)
    .where(eq(githubInstallations.userId, session.user.id))
    .limit(1);

  return NextResponse.json({
    connected: !!installation,
  });
}
