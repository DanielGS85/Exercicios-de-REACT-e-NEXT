type AlunoProps ={ nome: string; nota:number;}

export function CardAlunoNota({nome, nota}: AlunoProps){
  return (
    <div className=" w-4/28
      m-5
      bg-fuchsia-500
      rounded-3xl
      px-1 py-1
      text-center
      shadow-lg">
        <p className="text-xl font-bold text-slate-800">{nome}</p>
        <p className="text-slate-800">{nota}</p>
    </div>
  )

}