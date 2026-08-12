export default function CardAlunoOpValorPadrao({nome, curso="Front-End"}: {nome: string; curso?: string;}){
  return (
    <div className="
      w-45
      m-5
      bg-fuchsia-500
      rounded-3xl
      px-1 py-1
      text-center
      shadow-lg">
        <p className="text-xl font-bold text-slate-800">{nome}</p>
        <p className="text-slate-800">{curso}</p>
    </div>
  )

}