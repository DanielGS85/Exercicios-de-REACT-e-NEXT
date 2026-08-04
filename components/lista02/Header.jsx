import Link from "next/link";
export default function Header() {
  return (
    <header className=" 
          {/* aqui vão os cards dos alunos */}
    w-4/5  
    mt-10 mx-auto 
    flex flex-col
    bg-slate-800 
    text-center
    text-3xl
    text-white 
    px-5 py-3 
    rounded-xl 
    font-bold ">
      <b>Lista de exercicios 02 React</b>
        <nav className="text-1xl mt-5 flex justify-center gap-6">
        <Link href="/">
          <h1>Início</h1>
        </Link>
      </nav>
    </header>
  );
}