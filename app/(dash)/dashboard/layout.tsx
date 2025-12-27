import { GitHubProvider } from "@/components/providers/github";
import Middleware from "@/components/providers/middleware";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Middleware>
      <GitHubProvider>
        <main>{children}</main>
      </GitHubProvider>
    </Middleware>
  );
}
