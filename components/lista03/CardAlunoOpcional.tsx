type AlunoProps = {nome: string; bolsista: boolean;}

export function CardAlunoOpcional({nome, bolsista}: AlunoProps){
  return (
    <div className="
      w-45
      m-5
      bg-fuchsia-500
      rounded-3xl
      px-1 py-1
      text-center
      shadow-lg">
        <p className="text-xl font-bold text-slate-800">{nome} {bolsista && "🎓"}</p>
        <p className="text-slate-800">{bolsista ? "Bolsista" : "Não é bolsista"}</p>
    </div>
  )

}