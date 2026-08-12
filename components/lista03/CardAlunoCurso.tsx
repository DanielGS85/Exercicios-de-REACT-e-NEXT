// eslint-disable-next-line @typescript-eslint/no-unused-vars
type AlunoProps = {nome: string; curso: string;}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function CardAlunoCurso({ nome, curso}: AlunoProps){
    return(
        <div className="
        w-4/28
        m-5
       bg-fuchsia-500
        rounded-3xl
        px-1 py-1
        text-center
        shadow-lg
        ">
        <h3 className="text-xl font-bold text-slate-800">{nome}</h3>
        <p>{curso}</p>
        </div>
    );
}

