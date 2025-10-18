const ProjectCard = ({ project }) => {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 backdrop-blur-lg">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="space-y-4 px-6 pb-6 pt-5">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-accent-200/80">
          <span className="inline-flex items-center rounded-full bg-accent-500/20 px-3 py-1 text-[11px] font-semibold text-accent-100">
            {project.type}
          </span>
          <span>{project.year}</span>
        </div>
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="text-sm text-slate-300">{project.description}</p>
        <ul className="flex flex-wrap gap-2 text-[11px] font-medium text-accent-100">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-white/5 px-3 py-1 text-accent-100/90"
            >
              {tag}
            </li>
          ))}
        </ul>
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent-200 transition hover:text-white"
        >
          View project
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
        </a>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 via-transparent to-transparent" />
      </div>
    </article>
  );
};

export default ProjectCard;
