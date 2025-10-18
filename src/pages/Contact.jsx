import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus(
      "Thanks for reaching out — I will get back within two business days."
    );
    event.target.reset();
  };

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-14 px-6">
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-accent-200/80">
          Contact
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Tell me about your project.
        </h1>
        <p className="max-w-2xl text-base text-slate-300">
          Share a few details about what you&apos;re building and I&apos;ll
          follow up with next steps and availability.
        </p>
      </section>

      <form
        onSubmit={handleSubmit}
        className="space-y-8 rounded-3xl border border-white/5 bg-white/5 p-10 backdrop-blur"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="space-y-2 text-sm font-medium text-slate-200">
            Name
            <input
              required
              type="text"
              name="name"
              className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-500/40"
              placeholder="Jane Cooper"
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-200">
            Email
            <input
              required
              type="email"
              name="email"
              className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-500/40"
              placeholder="you@example.com"
            />
          </label>
        </div>
        <label className="space-y-2 text-sm font-medium text-slate-200">
          Company / Team
          <input
            type="text"
            name="company"
            className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-500/40"
            placeholder="Orbit Labs"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-200">
          Project goals
          <textarea
            required
            name="details"
            rows="5"
            className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-500/40"
            placeholder="Share the problem you are solving, the stage you are in, and any timelines."
          />
        </label>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs uppercase tracking-[0.3em] text-accent-200/80">
            Response time 48h
          </p>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-accent-400"
          >
            Send message
          </button>
        </div>
        {status && <p className="text-sm text-accent-100">{status}</p>}
      </form>
    </div>
  );
};

export default Contact;
