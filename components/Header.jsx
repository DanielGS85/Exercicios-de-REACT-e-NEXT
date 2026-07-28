export default function Header() {
  return (
    <header className="bg-slate-800 text-white px-5 py-3 rounded-xl font-bold w-full text-center">
      <b>Mural Da Turma</b>
      <nav className="flex gap-4">
        <a href="#">Início</a>
        <a href="#">Turma</a>
      </nav>
    </header>
  );
}


// function Header() {
//   return (<header className="mt-10 mb-5 bg-slate-800 text-white px-5 py-3 w-200 h-13 rounded-xl font-bold text-center"><b>Mural Da Turma</b></header>);}