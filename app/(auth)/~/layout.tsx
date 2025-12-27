import Middleware from "@/components/providers/middleware";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Middleware>
      <main>{children}</main>
    </Middleware>
  );
}
