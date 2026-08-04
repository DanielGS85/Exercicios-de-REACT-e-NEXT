import Link from "next/link";

type BotaoListaProps = {
  href: string;
  texto: string;
};

export default function BotaoLista({ href, texto }: BotaoListaProps) {
  return (
    <div className="
    mt-8
    w-20
    h-6
    bg-blue-500
    flex
    justify-center
    rounded-2xl
    gap-6
    ">
      <Link href={href}>
        {texto}
      </Link>
    </div>
  );
}