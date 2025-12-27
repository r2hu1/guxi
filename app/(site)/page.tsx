"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Twitter } from "lucide-react";

export default function Home() {
  return (
    <main className="">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <header className="px-6 max-w-4xl py-3 mx-6 sm:mx-auto mt-4 bg-secondary/60 flex items-center justify-between rounded-xl">
        <div className="flex items-center gap-1">
          <h1 className="text-base font-bold">GUXI</h1>
          {/*<Badge className="gap-1">
            <Twitter className="size-3" />
            <span className="text-sm font-normal">+</span>
            <Github className="size-3" />
          </Badge>*/}
        </div>
        <div className="flex items-center gap-2">
          <Button size="icon" className="h-8 w-8" variant="outline">
            <Github className="size-4" />
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </header>
      <section className="py-24 px-6 md:px-0 mx-auto space-y-8 w-full max-w-3xl text-center">
        <h1 className="text-3xl md:text-5xl !leading-tight lg:text-6xl font-medium">
          Tweet your GitHub launches automatically using AI.
        </h1>
        <div className="flex items-center gap-3 justify-center">
          <Button size="lg" variant="secondary">
            Self-Host <Github className="size-4!" />
          </Button>
          <Button size="lg">
            View Demo <ExternalLink className="size-4!" />
          </Button>
        </div>
      </section>
    </main>
  );
}
