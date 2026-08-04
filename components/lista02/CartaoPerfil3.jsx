export default function CartaoPerfil3(){
    const nomes = ["Thais", "Ana", "Daniel", "Pedro"];

    return (
        <div className="
        w-3/30
        h-3/30  
        m-5
        bg-green-600
        rounded-3xl
        px-1 py-1
        font-bold
        text-center
        text-slate-800
        shadow-lg
        ">
           <ul>
            {nomes.map((nome) => (
              <li key={nome}><h2>{nome}</h2></li>
             ))}
           </ul> 
        </div>
  );
}

