function CartaoAluno({ nome, curso, }) {
  return (
    <div className="w-4/21 m-5 bg-green-600 rounded-3xl px-1 py-1 text-center shadow-lg">
      <h3 className="text-slate-800">{nome}</h3>
      <p className="text-slate-800">{curso}</p>
    </div>
  );
}

export default function CartaoTurma() {
  const turmas = [
    { id: 1, nome: "Daniel", curso: "DEV FULL STACK" },
    { id: 2, nome: "Pedro", curso: "DEV FRONT END" },
    { id: 3, nome: "Felipe", curso: "DEV FULL STACK" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-5 text-slate-800 font-bold">
      {turmas.map((turma) => (
        <CartaoAluno key={turma.id} nome={turma.nome} curso={turma.curso} />
        
      ))}
    </div>
  );
}


