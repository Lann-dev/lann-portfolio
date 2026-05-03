const skills = [
  { name: "UX Research", value: 80 },
  { name: "Web development", value: 75 },
  { name: "Problem Solving", value: 90 },
  { name: "Vibe Coding", value: 85 },
];

const stats = [
  { k: "10", v: "Projects" },
  { k: "5+", v: "Clients" },
  { k: "2+", v: "Years" },
  { k: "3", v: "Certifications" },
];

export function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div>
          <span className="text-sm text-primary font-semibold tracking-widest uppercase">About Me</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight">
            Learning every day, <br /> Building the future.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            I'm an Informatics student who's passionate about building things for the web — from clean interfaces to functional backends. I enjoy exploring new technologies and turning ideas into real digital products.
          </p>

          <div className="mt-8 grid grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.v}>
                <p className="font-display text-2xl font-bold">{s.k}</p>
                <p className="text-xs text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-3xl p-8 shadow-[var(--shadow-card)] border border-border space-y-6">
          {skills.map((s) => (
            <div key={s.name}>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">{s.name}</span>
                <span className="text-muted-foreground">{s.value}%</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-[image:var(--gradient-primary)] transition-all"
                  style={{ width: `${s.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
