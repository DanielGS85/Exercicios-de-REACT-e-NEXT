type Aluno = { nome: string; curso: string };

export default function CardAlunnoCompObjType({ aluno }: { aluno: Aluno }) {
    return(
        <div className=" 
        w-45
        m-5
      bg-fuchsia-500 
        rounded-2xl 
        p-6
        shadow-lg 
        text-center">
      <h3 className="text-xl font-bold text-slate-800">{aluno.nome}</h3>
      <p className="text-slate-500">{aluno.curso}</p>
    </div>

    );
};

