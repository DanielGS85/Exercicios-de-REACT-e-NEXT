export default function FormacoesTecnicas() {
  const cursos = [
    { id: 1, nome: "Soldador nos processos MIG/MAG", inicio: "Jan 2020", termino: "Jun 2020" },
    { id: 2, nome: "Eletrodo", inicio: "Jul 2020", termino: "Dez 2020" },
    { id: 3, nome: "TIG", inicio: "Jan 2021", termino: "Jun 2021" },
    { id: 4, nome: "Desenho Técnico Industrial", inicio: "Jul 2021", termino: "Dez 2021" },
    { id: 5, nome: "Desenvolvedor Full Stack", inicio: "Jan 2022", termino: "Jun 2026" },
    { id: 6, nome: "Editor Visual Gráfico (Adobe)", inicio: "Jan 2022", termino: "Jun 2026" },
  ];

  return (
    // ESTILIZAR AQUI: card padrão (bg-white, rounded-2xl, shadow-md, p-6, mb-6, overflow-x-auto para responsividade na tabela)
    <div className="">
      {/* ESTILIZAR AQUI: título da seção (text-2xl, font-bold, text-slate-800, mb-4) */}
      <h2 className="">Formações Técnicas</h2>

      {/* ESTILIZAR AQUI: largura total da tabela (w-full text-left border-collapse) */}
      <table className="">
        {/* ESTILIZAR AQUI: cabeçalho da tabela (bg-slate-100 text-slate-700 uppercase text-sm font-semibold) */}
        <thead className="">
          <tr>
            {/* ESTILIZAR AQUI: padding nas células do topo (py-3 px-4 border-b) */}
            <th className="">Curso</th>
            <th className="">Início</th>
            <th className="">Término</th>
          </tr>
        </thead>
        {/* ESTILIZAR AQUI: divisor entre linhas (divide-y divide-slate-200 text-slate-600) */}
        <tbody className="">
          {cursos.map((curso) => (
            // ESTILIZAR AQUI: efeito hover na linha (hover:bg-slate-50 transition)
            <tr key={curso.id} className="">
              {/* ESTILIZAR AQUI: padding nas células de conteúdo (py-3 px-4) */}
              <td className="">{curso.nome}</td>
              <td className="">{curso.inicio}</td>
              <td className="">{curso.termino}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}