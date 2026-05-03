import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-secondary/40 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-card rounded-[2.5rem] p-10 md:p-14 border border-border shadow-[var(--shadow-soft)] text-center relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-lilac/40 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-sky/40 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-5xl font-bold">Let's create something beautiful.</h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">Have a project in mind? I'd love to hear about it. Reach out and let's chat.</p>
            <Button size="lg" className="mt-8 rounded-full bg-[image:var(--gradient-primary)] px-8 shadow-[var(--shadow-soft)]">
              Start a project <ArrowRight className="ml-1 w-4 h-4" />
            </Button>
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-10">© 2026 Lann. Crafted with care.</p>
      </div>
    </footer>
  );
}
