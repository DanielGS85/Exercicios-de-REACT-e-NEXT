type Aluno = {
  id: number;
  nome: string;
  curso: string;
  nota: number;
  bolsista?: boolean;
};

export default function CardAlunoCompleto({ nome, curso, nota, bolsista }: Aluno) {
  return (
    <div
      className="
        w-45
        m-5
        bg-fuchsia-500
        rounded-3xl
        px-1 py-1
        text-center
        shadow-lg"
    >
      <h3 className="text-xl font-bold text-slate-800">
        {nome} {bolsista && "🎓"}
      </h3>
      <p className="text-neutral-950">
        {curso} · nota {nota} {nota >= 6 ? "✅" : "❌"}
      </p>
    </div>
  );
}
