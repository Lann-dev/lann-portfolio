import { Button } from "@/components/ui/button";

const links = ["Home", "About", "Services", "Portfolio", "Contact"];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 font-display text-xl font-bold">
          <span className="w-8 h-8 rounded-xl bg-[image:var(--gradient-primary)] grid place-items-center text-primary-foreground text-sm">A</span>
          Lann.
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-foreground transition-colors">{l}</a></li>
          ))}
        </ul>
        <a href="https://wa.me/6285783336509?text=Hi%20Lann,%20I%20want%20to%20discuss%20a%20project" target="_blank" rel="noopener noreferrer">
  <Button className="rounded-full bg-[image:var(--gradient-primary)] hover:opacity-90 shadow-[var(--shadow-soft)]">
    Let's Talk
  </Button>
        </a>
      </nav>
    </header>
  );
}
