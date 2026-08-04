function CartaoPerfil6({ nome, curso, nota, presente }) {
  return (
    <div className="
 bg-white 
    rounded-2xl
    p-6 
    shadow-lg 
    text-center">
      <h3 className="text-xl font-bold text-slate-800">{nome}</h3>
      <p className="text-slate-800">{curso}</p>
       <p className="text-slate-800">{nota}</p>
        <span className="text-slate-800">{presente ? " 🟢 Presente" : " 🔴 Ausente"}</span>
        {nota >= 6 
        ? <span className="text-green-600 font-bold">✅ aprovado</span>
        : <span className="text-red-600 font-bold">🔄 em recuperação</span>}
    </div>
  );
}

export default function CartaoTurma() {
  const turmas = [
    { id: 1, nome: "Daniel", curso: "DEV FULL STACK", nota: 5, presente: true },
    { id: 2, nome: "Pedro", curso: "DEV FRONT END", nota: 9 },

  ];

  return (
    <div className="flex flex-wrap 
    justify-center
    gap-5 
    font-bold">
      {turmas.map((turma) => (
        <CartaoPerfil6 key={turma.id} nome={turma.nome} curso={turma.curso} presente={turma.presente} nota={turma.nota} />
      ))}
    </div>
  );
}
