import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.js";

const highlights = [
  {
    title: "Product-thinking frontend engineer",
    description:
      "Translating complex product requirements into interactive, inclusive interfaces that feel effortless to use.",
  },
  {
    title: "Systems obsessed designer",
    description:
      "Design systems that scale seamlessly across platforms while maintaining craft, clarity, and brand expression.",
  },
  {
    title: "Collaborative partner",
    description:
      "Working closely with founders and product teams to validate ideas quickly and ship meaningful updates.",
  },
];

const Home = () => {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-24 px-6">
      <section className="grid items-center gap-12 lg:grid-cols-[minmax(0,_3fr)_2fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-200/80">
            Available for new projects
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Tahrim Sakib — crafting soulful digital experiences for ambitious
            teams.
          </h1>
          <p className="max-w-xl text-base text-slate-300 sm:text-lg">
            I design and build web and mobile products that balance aesthetics
            with performance. From early-stage prototypes to polished releases,
            I help teams ship work that feels intentional and memorable.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/works"
              className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-accent-400"
            >
              View recent work
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:text-white"
            >
              Start a project
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-accent-500/40 via-transparent to-transparent blur-3xl" />
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
              alt="Tahrim Sakib"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-3">
        {highlights.map((item) => (
          <article
            key={item.title}
            className="group rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur"
          >
            <h3 className="mb-4 text-lg font-semibold text-white">
              {item.title}
            </h3>
            <p className="text-sm text-slate-300">{item.description}</p>
            <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-accent-500/0 via-accent-400/50 to-accent-500/0 opacity-0 transition group-hover:opacity-100" />
          </article>
        ))}
      </section>

      <section className="space-y-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-accent-200/80">
              Featured
            </p>
            <h2 className="section-title">Selected Projects</h2>
          </div>
          <Link
            to="/works"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-200 transition hover:text-white"
          >
            Browse the full archive
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/5 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-10 backdrop-blur">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl font-semibold text-white">
              Let&apos;s shape something remarkable.
            </h2>
            <p className="text-sm text-slate-300">
              From SaaS dashboards to immersive marketing sites, I blend design
              and engineering to launch products that grow with your team.
            </p>
          </div>
          <Link
            to="/connect"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            Explore collaboration styles
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
