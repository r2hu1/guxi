import { db } from "@/db/client";
import { githubInstallations } from "@/db/schema";
import { auth } from "@/lib/auth/init";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/~/auth`);
  }

  const { searchParams } = new URL(req.url);
  const installationId = searchParams.get("installation_id");

  if (!installationId) {
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_APP_URL}/install-app?error=no_installation`,
    );
  }

  await db
    .insert(githubInstallations)
    .values({
      id: crypto.randomUUID(),
      userId: session.user.id,
      installationId: installationId,
    })
    .onConflictDoUpdate({
      target: githubInstallations.installationId,
      set: { userId: session.user.id },
    });

  return NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?github=connected`,
  );
}
