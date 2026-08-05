export default function FormacaoAcademica() {
  return (
    // ESTILIZAR AQUI: card padrão (bg-white, rounded-2xl, shadow-md, p-6, mb-6)
    <div className="">
      {/* ESTILIZAR AQUI: título da seção (text-2xl, font-bold, text-slate-800, mb-4) */}
      <h2 className="">Formação Acadêmica</h2>

      {/* ESTILIZAR AQUI: espaçamento entre os itens (space-y-3, text-slate-700) */}
      <ul className="">
        {/* ESTILIZAR AQUI: fundo leve em cada item se quiser destacar (p-3 bg-slate-50 rounded-lg) */}
        <li className="">
          <strong>Ensino Médio: </strong> Completo | <strong>Instituição: </strong> C.E.R.B
        </li>
        <li className="">
          <strong>Ensino Superior: </strong> Bacharel em História (Incompleto) | <strong>Instituição: </strong> UNOPAR
        </li>
      </ul>
    </div>
  );
}