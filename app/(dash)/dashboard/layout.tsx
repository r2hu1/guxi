import { Integrations } from "@/components/providers/integrations";
import Middleware from "@/components/providers/middleware";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Middleware>
      <Integrations>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <main>{children}</main>
      </Integrations>
    </Middleware>
  );
}
