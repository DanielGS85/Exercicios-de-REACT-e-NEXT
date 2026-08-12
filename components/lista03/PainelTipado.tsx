type PainelProps = {texto:string,children: React.ReactNode};

export function PainelTipado({texto, children}: PainelProps){
  return (
    <div className="
    w-45
    m-5
    bg-slate-200 
    p-4 
    rounded-lg 
    text-gray-950
    shadow-lg">
      <p className="text-lg font-bold text-slate-800">{texto}</p>
      {children}
    </div>
  )
}
