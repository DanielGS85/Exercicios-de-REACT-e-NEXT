export default function ExperienciaPro() {
  const experiencias = [
    { id: 1, empresa: "Hospital Alcides Carneiro", cargo: "Vigilante", periodo: "Jan 2020 - Dez 2021" },
    { id: 2, empresa: "Metalúrgica Alborg", cargo: "Soldador", periodo: "Jan 2022 - Presente" },
    { id: 3, empresa: "Empresa de Software", cargo: "Desenvolvedor", periodo: "Jan 2023 - Presente" },
  ];

  return (
    // ESTILIZAR AQUI: card padrão (bg-white, rounded-2xl, shadow-md, p-6, mb-6)
    <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
      {/* ESTILIZAR AQUI: título da seção (text-2xl, font-bold, text-slate-800, mb-4) */}
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Experiência Profissional</h2>

      {/* ESTILIZAR AQUI: espaçamento entre os itens da lista (space-y-4 text-slate-700) */}
      <ol className="space-y-4 text-slate-700">
        {experiencias.map((exp, index) => (
          // ESTILIZAR AQUI: borda lateral esquerda para dar efeito de linha do tempo (border-l-4 border-blue-500 pl-4 py-1)
          <li key={exp.id} className="border-l-4 border-blue-500 pl-4 py-1">
            {/* ESTILIZAR AQUI: destaque no nome da empresa (text-lg font-semibold text-slate-900) */}
            <span className="text-lg font-semibold text-slate-900">{index + 1}. {exp.empresa}</span>
            <div className="">
              <strong>Cargo: </strong> {exp.cargo} | <strong>Período: </strong> {exp.periodo}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}