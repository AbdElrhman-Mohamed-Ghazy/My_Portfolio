import AnimatedSection from "./AnimatedSection";

const skillGroups = [
  {
    title: "Languages",
    items: ["C#", "C++", "SQL"],
  },
  {
    title: "Backend & Tech",
    items: [
      "ASP.NET Core Web API",
      ".NET Framework",
      "ASP.NET Core Identity",
      "JWT",
      "LINQ",
      "Caching (Redis)",
      "Asynchronous Programming",
      "EF Core",
      "Windows Forms",
      "ADO.NET",
      "Unit Testing",
    ],
  },
  {
    title: "Database",
    items: ["SQL Server", "T-SQL", "MySQL"],
  },
  {
    title: "Architecture & Patterns",
    items: [
      "Clean Architecture",
      "N-Tier Architecture",
      "Specification Pattern",
      "CQRS",
      "Repository & Unit of Work",
      "API Design",
      "OOP",
      "SOLID Principles",
    ],
  },
  {
    title: "Tools",
    items: ["Visual Studio", "Git", "GitHub", "Postman", "Swagger"],
  },
];

export default function Skills() {
  return (
    <AnimatedSection
      id="skills"
      className="w-full border-y border-zinc-800/60 px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Skills
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            Core technologies powering enterprise-grade solutions.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-zinc-800/50 bg-zinc-900/70 p-6 shadow-[0_0_28px_rgba(99,102,241,0.08)]"
            >
              <h3 className="text-lg font-semibold text-zinc-100">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
