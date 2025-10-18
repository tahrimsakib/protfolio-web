import { Link } from "react-router-dom";

const collaborations = [
  {
    title: "Product Sprint",
    description:
      "Two-week focused engagement to explore, validate, and prototype a product idea with your team.",
    deliverables: [
      "Discovery workshop",
      "Interactive prototype",
      "Implementation plan",
    ],
  },
  {
    title: "Design Systems",
    description:
      "Codify your visual language into reusable components and documentation that scale across teams.",
    deliverables: ["Component audit", "Token architecture", "Storybook setup"],
  },
  {
    title: "End-to-end Product",
    description:
      "Partner from concept to launch—user research, UX/UI design, frontend development, and QA support.",
    deliverables: [
      "Stakeholder alignment",
      "UX/UI design",
      "Frontend build",
      "Launch analytics",
    ],
  },
];

const Connect = () => {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-16 px-6">
      <section className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-accent-200/80">
          Collaborate
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Different ways we can work together.
        </h1>
        <p className="max-w-3xl text-base text-slate-300">
          Every partnership starts with understanding your goals. From quick
          sprints to long-term engagements, we can tailor a collaboration that
          meets your pace and ambition.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        {collaborations.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur"
          >
            <h2 className="text-xl font-semibold text-white">{item.title}</h2>
            <p className="mt-4 text-sm text-slate-300">{item.description}</p>
            <ul className="mt-6 space-y-2 text-sm text-accent-100">
              {item.deliverables.map((deliverable) => (
                <li
                  key={deliverable}
                  className="flex items-center gap-3 text-accent-100/90"
                >
                  <span className="inline-flex h-2 w-2 rounded-full bg-accent-400" />
                  {deliverable}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="space-y-6 rounded-3xl border border-white/5 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-10 backdrop-blur">
        <h2 className="text-2xl font-semibold text-white">
          Prefer chatting live?
        </h2>
        <p className="max-w-2xl text-sm text-slate-300">
          Book a strategy session where we map your challenges, uncover quick
          wins, and outline a path to launch.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
        >
          Schedule a call
        </Link>
      </section>
    </div>
  );
};

export default Connect;
