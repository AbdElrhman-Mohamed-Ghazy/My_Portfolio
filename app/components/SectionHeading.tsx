import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: Props) {
  const alignCls =
    align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col ${alignCls} mx-auto mb-12 max-w-3xl`}>
      <span className="eyebrow-line mb-4">{eyebrow}</span>
      <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300/90 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
