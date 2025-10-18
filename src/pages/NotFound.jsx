import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 text-center">
      <span className="rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm uppercase tracking-[0.3em] text-accent-200/80">
        404
      </span>
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Page not found
      </h1>
      <p className="max-w-2xl text-sm text-slate-300">
        The page you&apos;re looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-400"
      >
        Return home
      </Link>
    </div>
  );
};

export default NotFound;
