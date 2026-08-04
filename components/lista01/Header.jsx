import Link from "next/link";
export default function Header() {
  return (
    <header
      className=" 
          {/* aqui vão os cards dos alunos */}
    w-4/5  
    mt-10 mx-auto 
    flex flex-col
    bg-slate-800 F
    text-center
    text-3xl
    text-white 
    px-5 py-3 
    rounded-xl 
    font-bold "
    >
      <b>Mural Da Turma</b>
      <nav className="text-1xl mt-5 flex justify-center gap-6">
        <Link href="/">
          <h1>Início</h1>
        </Link>
        <Link href="/lista1">
          <h1>Turma</h1>
        </Link>
      </nav>
    </header>
  );
}

{
  /* 
  w-4/5       → largura de 80% do elemento pai
  mt-10       → margem superior de 2.5rem (afasta do topo)
  mx-auto     → centraliza horizontalmente
  flex        → ativa o Flexbox
  flex-col    → organiza os elementos em coluna (um abaixo do outro)
  bg-slate-800→ define o fundo cinza escuro
  text-center → centraliza os textos
  text-3xl     → define o tamanho do texto (3 vezes maior que o padrão)
  h1          → define o tamanho do texto (1.5 vezes maior que o padrão) tambempode ser usado text-1xl
  text-white  → deixa o texto branco
  px-5        → espaçamento interno horizontal (esquerda e direita)
  py-3        → espaçamento interno vertical (cima e baixo)
  rounded-xl  → bordas arredondadas grandes
  font-bold   → texto em negrito
*/
}

// function Header() {
//   return (<header className="mt-10 mb-5 bg-slate-800 text-white px-5 py-3 w-200 h-13 rounded-xl font-bold text-center"><b>Mural Da Turma</b></header>);}
