import {
  AppWindow,
  ArrowLeftRight,
  Box,
  Braces,
  Building2,
  Database,
  FlaskConical,
  Globe,
  History,
  KeyRound,
  Layers,
  ListFilter,
  RadioTower,
  ShieldCheck,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const logo = (slug: string) => `${DEVICON}/${slug}.svg`;

type Skill = {
  name: string;
  /** devicon / remote svg url — official brand logo */
  logo?: string;
  /** fallback / concept icon */
  Icon?: LucideIcon;
  /** tile background for Icon fallback */
  bg?: string;
  /** icon color inside white tile (for Si* brand glyphs) */
  color?: string;
  hot?: boolean;
};

function BrandMark({ skill }: { skill: Skill }) {
  if (skill.logo) {
    return (
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white p-1.5 shadow-[0_6px_18px_-8px_rgba(0,0,0,0.8)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={skill.logo}
          alt={`${skill.name} logo`}
          title={skill.name}
          loading="lazy"
          width={24}
          height={24}
          className="h-full w-full object-contain"
        />
      </span>
    );
  }
  const Glyph = skill.Icon;
  return (
    <span
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white shadow-[0_6px_18px_-8px_rgba(0,0,0,0.8)]"
      style={{ background: skill.bg ?? "linear-gradient(135deg,#6366f1,#8b5cf6)" }}
      aria-hidden
    >
      {Glyph ? <Glyph size={17} strokeWidth={2.2} color={skill.color ?? "#fff"} /> : null}
    </span>
  );
}

const frontend: Skill[] = [
  { name: "HTML5", logo: logo("html5/html5-original"), hot: true },
  { name: "CSS3", logo: logo("css3/css3-original"), hot: true },
  { name: "SCSS / Sass", logo: logo("sass/sass-original") },
  { name: "JavaScript", logo: logo("javascript/javascript-original"), hot: true },
  { name: "TypeScript", logo: logo("typescript/typescript-original"), hot: true },
  { name: "Bootstrap", logo: logo("bootstrap/bootstrap-original") },
  { name: "Angular", logo: logo("angular/angular-original"), hot: true },
];

const backend: Skill[] = [
  { name: "C#", logo: logo("csharp/csharp-original"), hot: true },
  { name: "ASP.NET Core Web API", logo: logo("dotnetcore/dotnetcore-original"), hot: true },
  { name: ".NET Framework", logo: logo("dotnetcore/dotnetcore-original") },
  { name: "Entity Framework Core", logo: logo("dotnetcore/dotnetcore-original") },
  {
    name: "ASP.NET Core Identity",
    Icon: ShieldCheck,
    bg: "linear-gradient(135deg,#fbbf24,#b45309)",
  },
  {
    name: "JWT",
    Icon: KeyRound,
    bg: "linear-gradient(135deg,#ec4899,#9d174d)",
  },
  { name: "LINQ", Icon: Braces, bg: "linear-gradient(135deg,#22d3ee,#0e7490)" },
  { name: "ADO.NET", Icon: AppWindow, bg: "linear-gradient(135deg,#a3a3a3,#525252)" },
  { name: "Windows Forms", Icon: AppWindow, bg: "linear-gradient(135deg,#818cf8,#4f46e5)" },
];

const dataJobs: Skill[] = [
  { name: "SQL Server", logo: logo("microsoftsqlserver/microsoftsqlserver-plain"), hot: true },
  { name: "T-SQL", logo: logo("microsoftsqlserver/microsoftsqlserver-plain") },
  { name: "MySQL", logo: logo("mysql/mysql-original") },
  { name: "Redis Caching", logo: logo("redis/redis-original") },
  { name: "SignalR", Icon: RadioTower, bg: "linear-gradient(135deg,#38bdf8,#1d4ed8)" },
  { name: "Hangfire Jobs", Icon: History, bg: "linear-gradient(135deg,#f97316,#9a3412)" },
  { name: "Async Programming", Icon: Zap, bg: "linear-gradient(135deg,#eab308,#a16207)" },
  { name: "Unit Testing", Icon: FlaskConical, bg: "linear-gradient(135deg,#34d399,#047857)" },
];

const tools: Skill[] = [
  { name: "Visual Studio", logo: logo("visualstudio/visualstudio-plain") },
  { name: "VS Code", logo: logo("vscode/vscode-original") },
  { name: "Git", logo: logo("git/git-original") },
  { name: "GitHub", logo: logo("github/github-original") },
  { name: "Postman", logo: logo("postman/postman-original") },
  { name: "Swagger", logo: logo("swagger/swagger-original") },
  { name: "SSMS", logo: logo("microsoftsqlserver/microsoftsqlserver-plain") },
];

const arch: Skill[] = [
  { name: "Clean Architecture", Icon: Layers, bg: "linear-gradient(135deg,#8b5cf6,#6d28d9)" },
  { name: "N-Tier Architecture", Icon: Building2, bg: "linear-gradient(135deg,#6366f1,#4338ca)" },
  { name: "Specification Pattern", Icon: ListFilter, bg: "linear-gradient(135deg,#38bdf8,#1d4ed8)" },
  { name: "Dependency Injection", Icon: Workflow, bg: "linear-gradient(135deg,#34d399,#047857)" },
  { name: "CQRS", Icon: ArrowLeftRight, bg: "linear-gradient(135deg,#f472b6,#be185d)" },
  { name: "Repository & Unit of Work", Icon: Database, bg: "linear-gradient(135deg,#fbbf24,#b45309)" },
  { name: "API Design", Icon: Globe, bg: "linear-gradient(135deg,#22d3ee,#0e7490)" },
  { name: "OOP Principles", Icon: Box, bg: "linear-gradient(135deg,#a78bfa,#5b21b6)" },
  { name: "SOLID Principles", Icon: ShieldCheck, bg: "linear-gradient(135deg,#4ade80,#15803d)" },
];

function SkillCard({
  eyebrow,
  title,
  desc,
  items,
  front,
  note,
  wide,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  items: Skill[];
  front?: boolean;
  note?: string;
  wide?: boolean;
}) {
  return (
    <div className="dark-card p-6 sm:p-8">
      <p
        className={`text-xs font-bold uppercase tracking-[0.3em] ${
          front ? "text-rose-300" : "text-violet-300"
        }`}
      >
        {eyebrow}
      </p>
      <h3 className="font-display mt-3 text-2xl font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm text-zinc-400">{desc}</p>
      <div
        className={`mt-6 grid grid-cols-1 gap-3 ${
          wide ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"
        }`}
      >
        {items.map((s) => (
          <div
            key={s.name}
            className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0a0e1a]/70 px-3 py-2.5 transition-all hover:-translate-y-0.5 hover:border-indigo-300/40 hover:shadow-[0_12px_30px_-12px_rgba(99,102,241,0.6)]"
          >
            <BrandMark skill={s} />
            <span className="text-sm font-semibold text-slate-100 group-hover:text-white">
              {s.name}
            </span>
            {s.hot ? (
              <span className="ml-auto rounded-full border border-amber-300/30 bg-amber-400/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-200">
                Core
              </span>
            ) : null}
          </div>
        ))}
      </div>
      {note ? <p className="mt-4 text-xs leading-5 text-zinc-500">{note}</p> : null}
    </div>
  );
}

export default function Skills() {
  return (
    <AnimatedSection
      id="skills"
      className="w-full border-y border-white/8 bg-white/[0.02] px-4 py-16 sm:px-6 md:py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Skills & Stack"
          title="Full-stack technologies powering end-to-end products"
          description="Angular + TypeScript on the frontend, ASP.NET Core + SQL Server on the backend — connected with clean, secure APIs."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <SkillCard
            eyebrow="Frontend"
            title="Angular & Modern Web"
            desc="Responsive SPAs with strong typing and reactive patterns."
            items={frontend}
            front
            note="Standalone components • Routing & Guards • Interceptors • Reactive Forms • Pipes & Directives • RxJS"
          />
          <SkillCard
            eyebrow="Backend"
            title=".NET & APIs"
            desc="Enterprise-grade APIs engineered for scale and security."
            items={backend}
          />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <SkillCard
            eyebrow="Data & Realtime"
            title="Databases & Background Jobs"
            desc="Relational modeling, caching and real-time communication."
            items={dataJobs}
          />
          <SkillCard
            eyebrow="Tools"
            title="Dev Tools & Workflow"
            desc="Daily toolkit for building, testing and documenting APIs."
            items={tools}
          />
        </div>

        <div className="mt-6">
          <SkillCard
            eyebrow="Principles"
            title="Architecture & Patterns"
            desc="Design foundations behind maintainable, testable systems."
            items={arch}
            wide
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
