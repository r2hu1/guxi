import { Github, Sailboat } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="px-6 max-w-5xl py-4 mx-auto flex items-center justify-between rounded-xl">
      <Link
        href="/"
        className="flex items-center gap-1 bg-secondary/70 p-1 px-3 rounded-md"
      >
        <Sailboat className="size-4" />
        <h1 className="text-base font-medium">GUXI</h1>
      </Link>
      <div className="flex items-center gap-2">
        <Button size="icon" className="h-8 w-8" asChild variant="secondary">
          <Link href="https://github.com/r2hu1/guxi">
            <Github className="size-4" />
          </Link>
        </Button>
        <Button size="sm" asChild>
          <Link href="/~/auth">Get Started</Link>
        </Button>
      </div>
    </header>
  );
}
