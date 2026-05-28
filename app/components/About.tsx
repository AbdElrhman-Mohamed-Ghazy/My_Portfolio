import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <AnimatedSection
      id="about"
      className="w-full px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
            About
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            Crafting secure, clean, and performant backend solutions.
          </h2>
          <p className="text-base leading-7 text-zinc-400 sm:text-lg">
            Backend Developer (.NET) specializing in building scalable APIs with
            ASP.NET Core, applying Clean Architecture and CQRS for maintainable
            systems. Experienced in performance optimization using Redis caching
            and implementing secure authentication with Identity &amp; JWT.
            Strong in problem-solving following SOLID principles to write clean,
            testable code.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-800/50 bg-zinc-900/70 p-6 shadow-[0_0_28px_rgba(99,102,241,0.08)]">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            Education
          </p>
          <h3 className="mt-4 text-xl font-semibold text-zinc-100">
            Bachelor of Computer Science
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            Tanta University, Egypt
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
