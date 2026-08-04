export default function CartaoPerfil4(){
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
           <ol>
            {nomes.map((nome, i) => (
              <li key={nome}>{i + 1}. {nome}</li>
             ))}
           </ol> 
        </div>
  );
}