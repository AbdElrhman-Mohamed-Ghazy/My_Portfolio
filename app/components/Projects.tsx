import Image from "next/image";
import { ArrowUpRight, ExternalLink, GitBranch } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

/**
 * Project images live in /public/projects/:
 * ecommerce.webp, manasa.webp, chat.webp, dvld.webp
 */
type Project = {
  title: string;
  category: string;
  description: string;
  image?: string;
  tech: string[];
  results: string[];
  front: boolean;
  status?: "Live" | "In Progress";
  links: { label: string; href: string; icon: typeof GitBranch }[];
};

const projects: Project[] = [
  {
    title: "E-Commerce Store — Full Stack",
    category: "Full Stack • Flagship",
    description:
      "Production e-commerce platform: secure ASP.NET Core API with Clean Architecture + CQRS, JWT + RBAC, wired to a responsive Angular storefront.",
    image: "/projects/ecommerce.webp",
    tech: ["ASP.NET Core", "Angular", "SQL Server", "JWT", "Clean Architecture"],
    results: ["Live in production", "RBAC + refresh tokens"],
    front: true,
    status: "Live",
    links: [
      {
        label: "Live Demo",
        href: "https://magdio.runasp.net/",
        icon: ExternalLink,
      },
      {
        label: "GitHub",
        href: "https://github.com/AbdElrhman-Mohamed-Ghazy/ECommerce_Project",
        icon: GitBranch,
      },
    ],
  },
  {
    title: "Menasa — Educational Platform",
    category: "Full Stack • Flagship",
    description:
      "Modern learning platform (Angular frontend live now, ASP.NET Core API in progress). Courses, tracks, and a clean student experience — backend with Identity + JWT coming next.",
    image: "/projects/manasa.webp",
    tech: ["Angular", "TypeScript", "Bootstrap", "RxJS", "ASP.NET Core (soon)"],
    results: ["Frontend live now", ".NET API under construction", "Mobile-first UI"],
    front: true,
    status: "In Progress",
    links: [
      {
        label: "Live Demo",
        href: "https://abdelrhman-mohamed-ghazy.github.io/menasa/",
        icon: ExternalLink,
      },
    ],
  },
  {
    title: "Real-Time Chat Application",
    category: "Backend • SignalR",
    description:
      "Real-time chat API using ASP.NET Core and SignalR, supporting multi-user messaging with automatic reconnection and live online user tracking.",
    image: "/projects/chat.webp",
    tech: ["ASP.NET Core", "SignalR", "C#", "ConcurrentDictionary", "JWT"],
    results: ["Multi-user messaging", "Auto-reconnect", "Thread-safe online tracking"],
    front: false,
    status: "Live",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/AbdElrhman-Mohamed-Ghazy/Chat_Room",
        icon: GitBranch,
      },
    ],
  },
  {
    title: "DVLD — Licensing Desktop Suite",
    category: "Desktop • SQL Server",
    description:
      "End-to-end driving-license operations suite with reliable 3-tier data handling, test scheduling, and issuance workflows.",
    image: "/projects/dvld.webp",
    tech: ["C#", "Windows Forms", "SQL Server", "3-Tier", "ADO.NET"],
    results: ["Full CRUD flows", "Real office workflow", "Demo video live"],
    front: false,
    status: "Live",
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

function Cover({ p }: { p: Project }) {
  if (p.image) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden bg-[#0c1122]">
        <Image
          src={p.image}
          alt={`${p.title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
          className="object-contain"
          loading="lazy"
        />
      </div>
    );
  }
  return (
    <div
      className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden ${
        p.front
          ? "bg-[radial-gradient(600px_200px_at_20%_0%,rgba(244,63,94,0.35),transparent),linear-gradient(135deg,#2a0f1a,#0a0e1a)]"
          : "bg-[radial-gradient(600px_200px_at_20%_0%,rgba(99,102,241,0.4),transparent),linear-gradient(135deg,#1e1b4b,#0a0e1a)]"
      }`}
    >
      <span className="font-display text-[92px] font-extrabold leading-none text-white/10">
        {p.title.charAt(0)}
      </span>
      <span className="absolute bottom-3 left-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] font-semibold text-zinc-200 backdrop-blur-md">
        Add image → /public/projects/
      </span>
      <div className="absolute inset-0 bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.06)_100%)] bg-[size:100%_24px]" />
    </div>
  );
}

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="w-full px-4 py-20 sm:px-6 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Works & Projects"
          title="Work that sells itself"
          description="Real systems with measurable outcomes — secure, fast, and built to convert visitors into clients."
        />

        <div className="grid gap-7 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="glass-card group flex h-full flex-col overflow-hidden !rounded-3xl"
            >
              <div className="relative">
                <Cover p={p} />
                <div className="absolute left-4 top-4 flex max-w-[calc(100%-2rem)] flex-wrap gap-2">
                  <span className="rounded-full border border-white/15 bg-black/55 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                    {p.category}
                  </span>
                  {p.status ? (
                    <span
                      className={`rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wider backdrop-blur-md ${
                        p.status === "Live"
                          ? "border-emerald-300/30 bg-emerald-400/15 text-emerald-200"
                          : "border-amber-300/30 bg-amber-400/15 text-amber-200"
                      }`}
                    >
                      {p.status === "Live" ? "● Live" : "◐ In Progress"}
                    </span>
                  ) : null}
                </div>
              </div>

              <div className="flex grow flex-col p-6">
                <h3 className="font-display flex items-start justify-between gap-2 text-xl font-bold tracking-tight text-white">
                  {p.title}
                  <ArrowUpRight
                    size={18}
                    className="mt-1 shrink-0 text-zinc-500 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                  />
                </h3>
                <p className="mb-4 mt-2.5 text-sm leading-relaxed text-slate-300/90">
                  {p.description}
                </p>

                <ul className="mb-4 space-y-1.5">
                  {p.results.map((r) => (
                    <li
                      key={r}
                      className="flex items-center gap-2 text-[13px] font-medium text-emerald-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {r}
                    </li>
                  ))}
                </ul>

                <div className="mb-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className={p.front ? "tech-pill-front" : "tech-pill"}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-2.5 border-t border-white/10 pt-5">
                  {p.links.map((link) => {
                    const Icon = link.icon;
                    const live = link.label === "Live Demo";
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className={
                          live
                            ? "btn-light !px-5 !py-2.5 text-sm"
                            : "btn-ghost !px-5 !py-2.5 text-sm"
                        }
                      >
                        <Icon size={15} />
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
