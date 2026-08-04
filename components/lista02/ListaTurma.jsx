function ListaTurma({ alunos }) {
  return (
    <ol className="text-xl text-slate-900 space-y-1 bg-white rounded-xl p-6 shadow-md">
      {alunos.map((turma) => (
        <li key={turma.id}>{turma.nome} — nota {turma.nota}</li>
      ))}
    </ol>
  );
}

export default function lista1() {
  const turma = [
    { id: 1, nome: "Daniel", nota: 8 },
    { id: 2, nome: "Pedro", nota: 9 },
    { id: 3, nome: "Felipe", nota: 9 },
  ];

  return <ListaTurma alunos={turma} />;
}