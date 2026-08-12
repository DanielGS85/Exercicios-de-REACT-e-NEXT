export default function CardAlunoInline({ nome }: { nome: string }) {
  return (
    <div className="
    w-45
    m-5
    bg-fuchsia-500 
    rounded-2xl 
    p-6
    shadow-lg 
    text-center">
      <h3 className="text-xl font-bold text-slate-800">{nome}</h3>
    </div>
  );
}
