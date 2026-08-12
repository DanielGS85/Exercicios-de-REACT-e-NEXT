type Aluno = {
  id: number;
  nome: string;
  curso: string;
};

type Props = {
  aluno: Aluno;
};

export default function CardAlunoObjeto({ aluno }: Props) {
  return (
    <div className="
      w-45
      m-5
      bg-fuchsia-500
      rounded-3xl
      px-1 py-1
      text-center
      shadow-lg">
      <h3 className="text-xl font-bold text-stone-50">
        {aluno.nome}
      </h3>

      <p className="text-stone-200">
        {aluno.curso}
      </p>
    </div>
  );
}
