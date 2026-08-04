interface Props {
  title: string;
  action?: string;
}

export default function SectionHeader({
  title,
  action,
}: Props) {
  return (
    <div className="mb-8 flex items-center justify-between">

      <h2 className="text-4xl font-black">
        {title}
      </h2>

      {action && (
        <button className="text-zinc-400 hover:text-white">
          {action}
        </button>
      )}

    </div>
  );
}