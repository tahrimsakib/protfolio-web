import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.js";

const Works = () => {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
      <section className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-accent-200/80">
          Portfolio
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Selected case studies.
        </h1>
        <p className="max-w-3xl text-base text-slate-300">
          I design and build experiences that feel alive and intentional. Here
          are a few highlights spanning enterprise dashboards, mobile platforms,
          and marketing sites. Each project pairs qualitative storytelling with
          measurable impact.
        </p>
      </section>

      <section className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>

      <section className="space-y-8 rounded-3xl border border-white/5 bg-gradient-to-br from-white/10 via-white/0 to-white/0 p-10 backdrop-blur">
        <h2 className="section-title">Process snapshots</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[...Array(3)].map((_, index) => (
            <article
              key={index}
              className="rounded-2xl border border-white/5 bg-white/5 p-6 text-sm text-slate-300"
            >
              {index === 0 && (
                <>
                  <h3 className="mb-3 text-base font-semibold text-white">
                    Discover
                  </h3>
                  <p>
                    We start by aligning on outcomes through collaborative
                    workshops, user interviews, and rapid prototyping to surface
                    opportunities early.
                  </p>
                </>
              )}
              {index === 1 && (
                <>
                  <h3 className="mb-3 text-base font-semibold text-white">
                    Design
                  </h3>
                  <p>
                    I craft modular systems, motion specs, and responsive
                    layouts that ensure the design vision stays intact during
                    implementation.
                  </p>
                </>
              )}
              {index === 2 && (
                <>
                  <h3 className="mb-3 text-base font-semibold text-white">
                    Build
                  </h3>
                  <p>
                    We bring the experience to life with resilient, performant
                    code, pairing with teams to ship and iterate quickly.
                  </p>
                </>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Works;
