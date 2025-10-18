const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Tahrim Sakib. Crafted with care.
        </p>
        <nav className="flex items-center gap-6 text-sm text-slate-300">
          <a
            href="https://github.com/tahrimsakib"
            className="transition hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com"
            className="transition hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            className="transition hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
