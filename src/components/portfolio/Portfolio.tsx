import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

const filters = ["All", "UI/UX", "Website Design", "App Design", "Graphic Design"] as const;
type Filter = typeof filters[number];

const projects: { img: string; title: string; tag: Exclude<Filter, "All">; year: string }[] = [
  { img: p1, title: "Finova Dashboard", tag: "UI/UX", year: "2025" },
  { img: p2, title: "Dorkal Studio Site", tag: "Website Design", year: "2025" },
  { img: p3, title: "Pulse Fitness App", tag: "App Design", year: "2024" },
  { img: p4, title: "Lunar Branding", tag: "Graphic Design", year: "2024" },
  { img: p5, title: "Nest Commerce", tag: "Website Design", year: "2025" },
  { img: p6, title: "Feedbess Delivery", tag: "App Design", year: "2024" },
];

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.tag === filter);

  return (
    <section id="portfolio" className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-sm text-primary font-semibold tracking-widest uppercase">Portfolio</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">Selected works</h2>
        </div>
        <div className="flex flex-wrap gap-2 p-1.5 bg-secondary rounded-full border border-border">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === f
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((p) => (
          <article key={p.title} className="group rounded-3xl overflow-hidden bg-card border border-border shadow-[var(--shadow-card)] hover:-translate-y-1 transition-transform">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img src={p.img} alt={p.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-5 flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">{p.tag} · {p.year}</p>
                <h3 className="font-display text-lg font-bold mt-0.5">{p.title}</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-secondary grid place-items-center group-hover:bg-[image:var(--gradient-primary)] group-hover:text-primary-foreground transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
