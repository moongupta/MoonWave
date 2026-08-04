import Image from "next/image";

interface Props {
  src: string;
}

export default function Avatar({
  src,
}: Props) {
  return (
    <Image
      src={src}
      alt="Avatar"
      width={48}
      height={48}
      className="rounded-full border-2 border-red-500 object-cover"
    />
  );
}