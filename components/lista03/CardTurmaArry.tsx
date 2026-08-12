type Aluno = {
  id: number;
  nome: string;
};

export default function CardTurmaArry() {
const turma: Aluno[] = [
  { id: 1, nome: "Ana" },
  { id: 2, nome: "Daniel" },
  { id: 3, nome: "Maria" },
 ];

 return (
    <ul className="   w-45
      m-5
      bg-fuchsia-500
      rounded-3xl
      px-1 py-1
      text-center
      shadow-lg">
      {turma.map((aluno) => (
        <li key={aluno.id}>. {aluno.nome}</li>
      ))}
    </ul>
  );
}