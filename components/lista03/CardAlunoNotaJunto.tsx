type AlunoProps ={ nome: string; nota:number;}

export function CardAlunoNotaJunto({nome, nota}: AlunoProps){
  return (
    <div className="
      w-45
      m-5
      bg-fuchsia-500
      rounded-3xl
      px-1 py-1
      flex
      items-center
      justify-center
      text-center
      shadow-lg">
        <p className="text-xl font-bold text-slate-800">{nome}-nota{nota}</p>
        
    </div>
  )

}