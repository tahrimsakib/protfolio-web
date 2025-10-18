const experience = [
  {
    role: "Senior Product Designer & Frontend Engineer",
    company: "Orbit Labs",
    period: "2023 — Present",
    description:
      "Leading the end-to-end product design and frontend implementation for a suite of data visualization tools used by global research teams.",
  },
  {
    role: "UI Engineer",
    company: "Pixelwave Studio",
    period: "2021 — 2023",
    description:
      "Built delightful marketing experiences and conversion funnels for high-growth startups in fintech and web3, increasing conversions by 35%.",
  },
  {
    role: "Design Technologist",
    company: "Freelance",
    period: "2018 — 2021",
    description:
      "Collaborated with founders to transform ideas into polished prototypes, ensuring design intent survived engineering handoff.",
  },
];

const toolset = [
  "React & React Native",
  "TypeScript",
  "Tailwind CSS",
  "Three.js & Framer Motion",
  "Figma & FigJam",
  "Accessibility Auditing",
  "Design Systems",
  "Product Strategy",
];

const About = () => {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-20 px-6">
      <section className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-accent-200/80">
          About
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Building with curiosity and intention.
        </h1>
        <p className="text-base text-slate-300">
          I believe great products emerge when design and engineering work in
          harmony. My background spans both disciplines, allowing me to navigate
          the full lifecycle—from facilitating discovery workshops to shipping
          performant interfaces.
        </p>
        <p className="text-base text-slate-300">
          Outside of work you&apos;ll find me capturing cityscapes, mentoring
          early-career designers, and experimenting with generative art.
        </p>
      </section>

      <section className="space-y-10">
        <h2 className="section-title">Experience</h2>
        <div className="space-y-6">
          {experience.map((item) => (
            <article
              key={item.company}
              className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.role}
                  </h3>
                  <p className="text-sm text-accent-200">{item.company}</p>
                </div>
                <span className="text-sm text-slate-400">{item.period}</span>
              </div>
              <p className="mt-4 text-sm text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="section-title">Toolbox</h2>
        <p className="text-sm text-slate-300">
          A curated set of tools and frameworks I return to when shipping
          thoughtful products.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {toolset.map((tool) => (
            <div
              key={tool}
              className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-6 py-4 backdrop-blur"
            >
              <span className="text-sm font-medium text-white">{tool}</span>
              <span className="text-xs uppercase tracking-[0.3em] text-accent-200/80">
                core
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
