"use client";

import { useSession } from "@/lib/auth/client";
import { redirect, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Middleware({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isPending, data, error } = useSession();
  const pathname = usePathname();

  useEffect(() => {
    if (!isPending && !data && !error) {
      redirect("/~/auth");
    }
    if (!isPending && data && !error) {
      if (pathname.includes("/auth")) {
        redirect("/dashboard");
      }
      if (pathname.includes("/dashboard")) {
        return;
      }
    }
  }, [isPending, data, error]);
  return children;
}
