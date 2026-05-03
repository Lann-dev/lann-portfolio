import { Figma, Globe, Smartphone, PenTool, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Figma, title: "UI/UX Design", desc: "End-to-end product design from wireframes to polished interfaces.", tint: "var(--lilac)" },
  { icon: Globe, title: "Web Design", desc: "Marketing sites and web apps that convert and tell your story.", tint: "var(--sky)" },
  { icon: Smartphone, title: "App Design", desc: "Native iOS & Android experiences people love opening daily.", tint: "var(--mint)" },
  { icon: PenTool, title: "Graphic Design", desc: "Brand identity, illustrations and visual systems that scale.", tint: "var(--peach)" },
];

export function Services() {
  return (
    <section id="services" className="bg-secondary/40 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm text-primary font-semibold tracking-widest uppercase">Services</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">What I can do for you</h2>
          <p className="mt-4 text-muted-foreground">Full-stack design services tailored to your product stage and ambition.</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc, tint }) => (
            <div key={title} className="group bg-card rounded-3xl p-7 border border-border shadow-[var(--shadow-card)] hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 rounded-2xl grid place-items-center mb-5" style={{ background: `oklch(from ${tint} l c h / 0.5)` }}>
                <Icon className="w-6 h-6 text-foreground" strokeWidth={1.6} />
              </div>
              <h3 className="font-display text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              <a href="#" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                Learn more <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
