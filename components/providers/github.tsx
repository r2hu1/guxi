"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Skeleton } from "../ui/skeleton";

export function GitHubProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const check = async () => {
      const res = await fetch("/api/github/install/status");
      const data = await res.json();

      if (!data.connected) {
        if (!pathname.includes("/install-app")) {
          router.replace("/~/install-app");
          return;
        }
        return;
      }

      setLoading(false);
    };

    check();
  }, [router]);

  if (loading) return <Skeleton className="h-40 w-full" />;

  return children;
}
