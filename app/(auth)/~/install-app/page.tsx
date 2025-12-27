"use client";
import { Button } from "@/components/ui/button";

export default function InstallAppPage() {
  const installApp = async () => {
    const redirectUrl = process.env.NEXT_PUBLIC_APP_URL + "/api/github/install";
    window.location.href = `https://github.com/apps/guxi-app/installations/new?redirect_url=${encodeURIComponent(redirectUrl)}`;
  };
  return (
    <div>
      <h1>Install App To Continue</h1>
      <Button onClick={installApp}>Install Guxi</Button>
    </div>
  );
}
