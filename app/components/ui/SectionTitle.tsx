interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-8 flex items-end justify-between">
      <div>
        <h2 className="text-3xl font-black tracking-tight text-white">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-2 text-sm text-zinc-400">
            {subtitle}
          </p>
        )}
      </div>

      <button className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10">
        View All
      </button>
    </div>
  );
}