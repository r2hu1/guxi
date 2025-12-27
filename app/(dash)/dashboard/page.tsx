"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth/client";
import { Loader2, LogOut } from "lucide-react";
import { useState } from "react";

export default function DashboardPage() {
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const handleLogout = async () => {
    setLoading(true);
    await authClient.signOut();
    window.location.href = "/";
  };
  const handleUnlink = async () => {
    setLoading2(true);
    await authClient.unlinkAccount({
      providerId: "twitter",
    });
    window.location.reload();
    setLoading2(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-between">
      <div className="mx-auto max-w-sm space-y-2 bg-secondary/60 rounded-md border-border/60 border-2 p-4">
        <h1 className="text-lg font-medium">All Set!</h1>
        <p className="text-muted-foreground text-sm">
          Try creating a public GitHub repository and we'll tweet it for you!
        </p>
        <div className="flex items-center gap-2 !mt-4">
          <Button
            disabled={loading2}
            variant="secondary"
            onClick={handleUnlink}
          >
            Unlink X
          </Button>
          <Button onClick={handleLogout}>
            Logout{" "}
            {loading ? (
              <Loader2 className="animate-spin size-4" />
            ) : (
              <LogOut className="size-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
