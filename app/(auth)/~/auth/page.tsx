"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth/client";

export default function AuthPage() {
  const signIn = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
      scopes: ["read:user", "user:email", "repo"],
      callbackURL: "/install-app",
    });
  };
  return (
    <div>
      <h1>Auth Page</h1>
      <Button onClick={signIn}>Continue With Github</Button>
    </div>
  );
}
