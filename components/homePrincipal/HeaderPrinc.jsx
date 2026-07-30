export default function HeaderPrinc() {
  return (
    <headerP className=" 
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
      <b>Mural Da Turma</b>
      <b>Exercicios De React</b>
      <nav className="text-1xl mt-5 flex justify-center gap-6">
        <a href="#"><h1></h1></a>
        <a href="#"><h1></h1></a>
      </nav>
    </headerP>
  );
}