import { Database, LayoutDashboard, ServerCog, ShieldCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const services = [
  {
    icon: ServerCog,
    title: "APIs that scale to revenue",
    description:
      "Versioned ASP.NET Core REST APIs with Clean Architecture, CQRS + MediatR, rate limiting, and audit trails — built for growth, not rewrites.",
    accent: "text-violet-200 border-violet-300/30 bg-violet-400/10",
  },
  {
    icon: LayoutDashboard,
    title: "Angular UI that converts",
    description:
      "Pixel-clean responsive SPAs with standalone components, routing + guards, RxJS state, interceptors, and Bootstrap polish.",
    accent: "text-rose-200 border-rose-300/30 bg-rose-400/10",
  },
  {
    icon: Database,
    title: "Data tuned for speed",
    description:
      "SQL Server + EF Core with specifications and indexing strategy, Redis caching for catalog reads that feel instant.",
    accent: "text-emerald-200 border-emerald-300/30 bg-emerald-400/10",
  },
  {
    icon: ShieldCheck,
    title: "Security clients trust",
    description:
      "Identity + JWT with refresh rotation, RBAC, and hardened frontend auth flows. OWASP-aware by default.",
    accent: "text-amber-200 border-amber-300/30 bg-amber-400/10",
  },
];

export default function About() {
  return (
    <AnimatedSection id="about" className="w-full px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Services & About me"
          title="A one-man product team for your idea"
          description="You bring the vision. I ship the full stack — strategy, API, database, and a frontend people love to use."
        />

        <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="glass-card group p-6 sm:p-7">
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border backdrop-blur-md transition-transform group-hover:scale-110 group-hover:-rotate-3 ${s.accent}`}
                >
                  <Icon size={22} />
                </div>
                <h3 className="font-display mb-2.5 text-xl font-bold text-white">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300/90">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          <div className="glass-card p-6 sm:p-8 lg:col-span-7">
            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-indigo-200">
              Why me
            </p>
            <h3 className="font-display mt-3 text-2xl font-bold leading-snug text-white">
              Backend depth, frontend taste —{" "}
              <span className="text-shine">no handoffs needed.</span>
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-300/90 sm:text-[15px]">
              I&apos;m Abdelrhman — a full-stack developer obsessed with
              outcomes. Clean Architecture and CQRS keep backends maintainable,
              TypeScript + RxJS keep frontends predictable, and every project
              ships with performance budgets, secure auth, and a UI that feels
              premium on mobile first.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {["Fast delivery", "Clean contracts", "SEO-ready", "Mobile-first"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-emerald-300/25 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-bold text-emerald-200"
                >
                  ✓ {t}
                </span>
              ))}
            </div>
          </div>
          <div className="glass-card p-6 sm:p-8 lg:col-span-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-slate-400">
              Education
            </p>
            <h3 className="font-display mt-4 text-xl font-bold text-white">
              Bachelor of Computer Science
            </h3>
            <p className="mt-1.5 text-sm text-slate-300">
              Tanta University, Egypt
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
