export default function ListaTurmaNotas() {
  const turma = [
    { id: 1, nome: "Daniel", nota: 9 },
    { id: 2, nome: "Pedro", nota: 4 },
    { id: 3, nome: "Felipe", nota: 6 },
    { id: 4, nome: "Thais", nota: 7 },
    { id: 5, nome: "Joao", nota: 10 },
  ];

  return (
    <ol className="text-xl 
    text-slate-700 
    space-y-1 bg-white 
    rounded-xl p-6 
    shadow-md">
      {turma.map((Turma, i) => (
        <li key={Turma.id}>{i + 1}. {Turma.nome} .......nota {Turma.nota}</li>
      ))}
    </ol>
  );
}