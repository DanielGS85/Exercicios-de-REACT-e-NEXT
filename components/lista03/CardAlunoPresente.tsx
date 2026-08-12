type AlunnoProps = {
  nome: string;
  curso: string;
  presente: boolean;
}

export default function CardAlunoPresente({ nome, curso, presente }: AlunnoProps) {
  return (
    <div className="
    w-45
    m-5
    bg-fuchsia-500
    shadow-md 
    rounded-lg 
    p-1 py-1
    mb-4">
      <h2>{nome}</h2>
      <p>Curso: {curso}</p>
      <p>Status: {presente  ? "Presente 🟢" : "⚪"}</p>
    </div>
  );
}