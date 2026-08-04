function CartaoPerfil5({ nome, curso, nota }) {
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
        {/* <span className="text-slate-800">{nota>=6 ? " 🟢 Presente" : " 🔴 Ausente"}</span> */}
        {nota >= 6 && <span className="text-green-600 font-bold">✅ aprovado</span>}
    </div>
  );
}

export default function CartaoTurma() {
  const turmas = [
    { id: 1, nome: "Daniel", curso: "DEV FULL STACK", nota: 8 },
    { id: 2, nome: "Pedro", curso: "DEV FRONT END", nota: 9 },
    { id: 3, nome: "Felipe", curso: "DEV FULL STACK", nota: 9 },
    { id: 4, nome: "Thais", curso: "DEV FRONT END", nota: 10 },
    { id: 5, nome: "Joao", curso: "DEV FULL STACK", nota: 10 },
  ];

  return (
    <div className="flex flex-wrap 
    justify-center 
    gap-5 
    font-bold">
      {turmas.map((turma) => (
        <CartaoPerfil5 key={turma.id} nome={turma.nome} curso={turma.curso} nota={turma.nota} />
      ))}
    </div>
  );
}


{/* <p className="text-slate-800">{nota}</p>
        <span className="text-slate-800">{presente ? " 🟢 Presente" : " 🔴 Ausente"}</span> */}