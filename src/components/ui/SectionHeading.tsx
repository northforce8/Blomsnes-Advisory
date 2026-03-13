import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  tag,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {tag && (
        <span className="inline-block font-body text-sm font-semibold tracking-widest uppercase text-brand-600 mb-4">
          {tag}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-950 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-6 font-body text-lg text-charcoal-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
