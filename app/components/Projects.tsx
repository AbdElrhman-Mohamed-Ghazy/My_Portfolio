import { ExternalLink, GitBranch } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "E-Commerce API",
    description:
      "High-performance backend platform engineered for secure commerce workflows and clean extensibility.",
    highlights: [
      "Clean Architecture",
      "CQRS with MediatR",
      "Redis Caching",
      "JWT with Refresh Tokens",
      "RBAC",
      "Rate Limiting",
      "Audit Logging",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/AbdElrhman-Mohamed-Ghazy/ECommerce_Project",
        icon: GitBranch,
      },
    ],
  },
  {
    title: "DVLD Project - Driver Licensing Management Desktop App",
    description:
      "Robust desktop management system designed to streamline licensing operations with reliable data handling.",
    highlights: [
      "C#",
      "Windows Forms",
      "SQL Server",
      "3-Tier Architecture",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/AbdElrhman-Mohamed-Ghazy/DVLD_Project",
        icon: GitBranch,
      },
      {
        label: "Live Demo",
        href: "https://www.linkedin.com/posts/abdelrhman-aboelmagd-1b6b1a345_im-excited-to-share-my-latest-project-dvld-activity-7400269436848562176-RkC0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFZ8KZoBA7tUS_RHwbHzTie8o_HWcB6jF00",
        icon: ExternalLink,
      },
    ],
  },
];

export default function Projects() {
  return (
    <AnimatedSection
      id="projects"
      className="w-full px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Featured Projects
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            Selected builds focused on performance and security.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex h-full flex-col justify-between rounded-2xl border border-zinc-800/50 bg-zinc-900/70 p-6 shadow-[0_0_28px_rgba(99,102,241,0.08)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_38px_rgba(99,102,241,0.2)]"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-zinc-100">
                  {project.title}
                </h3>
                <p className="text-sm leading-6 text-zinc-400">
                  {project.description}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                  Highlights
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-700"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                {project.links.map((link) => {
                  const Icon = link.icon;
                  const isLiveDemo = link.label === "Live Demo";
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                        isLiveDemo
                          ? "bg-indigo-600 text-white shadow-[0_2px_8px_rgba(79,70,229,0.3)] hover:scale-105 hover:bg-indigo-500"
                          : "border border-zinc-700 bg-zinc-900/80 text-zinc-100 hover:bg-zinc-100 hover:text-zinc-950"
                      }`}
                    >
                      <Icon size={14} />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
