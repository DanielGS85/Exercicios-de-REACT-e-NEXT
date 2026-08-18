import React from "react";

// objeto tipado
type Aluno = {
  id: number;
  nome: string;
  curso: string;
};

// card estiliazdo do aluno ue aparece na tela com os props dos alunos
function CardAluno({ aluno }: { aluno: Aluno }) {
  return React.createElement(
    "div",
    {
      className:"w-45 m-5 bg-fuchsia-500 rounded-3xl px-1 py-1 text-center shadow-lg",
    },
    `${aluno.nome} — ${aluno.curso}`
  );
}

// array com toso os alunnos seja 2 ou 2.000 cada aluno recebe os atributos do objeto aluno
export default function CardListaTipadaTurrma() {
  const turma: Aluno[] = [
    { id: 1, nome: "Ana Carolina", curso: "Front-end" },
    { id: 2, nome: "João Eduardo", curso: "Back-end" },
    { id: 3, nome: "Thais Resende", curso: "Design" },
  ];

  // return recebe a logica e mostra na tela
  return React.createElement(
    "div",
    { className: "space-y-2" },
    ...turma.map((a) =>
      React.createElement(CardAluno, {
        key: a.id,
        aluno: a,
      })
    )
  );
}