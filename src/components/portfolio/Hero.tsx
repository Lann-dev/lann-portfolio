import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Instagram, Dribbble, Linkedin, Sparkles, Play } from "lucide-react";
import heroImg from "@/assets/designer-hero.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      {/* geometric decorations */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-3xl bg-lilac/40 blur-2xl -z-10" />
      <div className="absolute bottom-20 right-1/3 w-32 h-32 rounded-full bg-sky/50 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 py-20 md:py-28 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border text-sm shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-primary" /> Available for freelance work
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[1.05]">
            Developer<br />
            <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">Turning Ideas into Digital Reality</span>
            <span className="inline-block ml-2">✦</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-md">
            Hi, I'm Lann — an Informatics student who loves building clean, functional, and beautiful web experiences. Currently open for freelance projects and collaborations.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" className="rounded-full bg-[image:var(--gradient-primary)] hover:opacity-90 shadow-[var(--shadow-soft)] px-7">
              Contact Us <ArrowRight className="ml-1 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full bg-card px-7">
              <Play className="w-4 h-4 mr-1" /> Portfolio
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[0,1,2,3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background" style={{background: `linear-gradient(135deg, oklch(0.85 0.08 ${200 + i*30}), oklch(0.78 0.12 ${260 + i*20}))`}} />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_,i)=><Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Trusted by 0 clients</p>
            </div>
          </div>
        </div>

        {/* right image */}
        <div className="relative">
          <div className="relative aspect-square max-w-[520px] mx-auto">
            <div className="absolute inset-0 rounded-[3rem] bg-[image:var(--gradient-primary)] rotate-6" />
            <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-[var(--shadow-soft)] border border-border bg-card">
              <img src={heroImg} alt="Arjun, UI/UX designer" className="w-full h-full object-cover" width={1024} height={1280} />
            </div>

            {/* floating review */}
            <div className="absolute -left-4 md:-left-10 bottom-16 bg-card rounded-2xl p-4 shadow-[var(--shadow-card)] border border-border w-56">
              <div className="flex items-center gap-1 text-amber-500 mb-1">
                {[...Array(5)].map((_,i)=><Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                <span className="ml-1 text-xs font-semibold text-foreground">5.0</span>
              </div>
              <p className="text-xs text-muted-foreground">"Delivered beyond expectations. A true craftsman."</p>
              <p className="text-[11px] mt-2 font-semibold">— Sarah, Linear</p>
            </div>

            {/* social icons */}
<div className="absolute -right-4 top-10 flex flex-col gap-3">
  <a href="https://instagram.com/m_adlann26" target="_blank" rel="noopener noreferrer"
    className="w-11 h-11 rounded-2xl bg-card shadow-[var(--shadow-card)] border border-border grid place-items-center hover:bg-accent transition-colors">
    <Instagram className="w-4 h-4" />
  </a>
  <a href="https://wa.me/6285783336509" target="_blank" rel="noopener noreferrer"
    className="w-11 h-11 rounded-2xl bg-card shadow-[var(--shadow-card)] border border-border grid place-items-center hover:bg-accent transition-colors">
    <Dribbble className="w-4 h-4" />
  </a>
</div>

            {/* stat badge */}
            <div className="absolute -top-4 left-8 bg-card rounded-2xl px-4 py-3 shadow-[var(--shadow-card)] border border-border">
              <p className="text-2xl font-display font-bold">2</p>
              <p className="text-[11px] text-muted-foreground -mt-1">Years exp.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
