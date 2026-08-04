function CartaoAluno({ nome, curso, nota }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
      <h3 className="text-xl font-bold text-slate-800">{nome}</h3>
      <p className="text-slate-800">{curso}</p>
      <p className="text-slate-800">{nota}</p>
      {nota >= 6 && <span className="text-green-600 font-bold">✅ aprovado</span>
      }
    </div>
  );
}

export default function GradeSeisAlunos() {
  const alunos = [
    { id: 1, nome: "Daniel", curso: "DEV FULL STACK", nota: 5 },
    { id: 2, nome: "Pedro", curso: "DEV FRONT END", nota: 5 },
    { id: 3, nome: "Felipe", curso: "DEV FULL STACK", nota: 4 },
    { id: 4, nome: "Thais", curso: "DEV FRONT END", nota: 10 },
    { id: 5, nome: "Joao", curso: "DEV FULL STACK", nota: 6 },
    { id: 6, nome: "Ana", curso: "DATA SCIENCE", nota: 8 },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-5">
      {alunos.map((Turma) => (
        <CartaoAluno key={Turma.id} nome={Turma.nome} curso={Turma.curso} nota={Turma.nota} />
      ))}
    </div>
  );
}