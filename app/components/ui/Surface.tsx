interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Surface({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-3xl ${className}`}
    >
      {children}
    </div>
  );
}