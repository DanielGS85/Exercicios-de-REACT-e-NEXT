type AlunoProps = { nome: string };


export function CardAluno({ nome }: AlunoProps) {
  return (
    <div className="
      w-4/28
      m-5
      bg-fuchsia-500
      rounded-3xl
      px-1 py-1
      text-center
      shadow-lg">
      <h3 className="text-xl font-bold text-slate-800">{nome}</h3>
    </div>
  );
}