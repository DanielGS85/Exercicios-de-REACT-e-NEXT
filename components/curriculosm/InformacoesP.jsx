export default function InformacoesPessoais() {
  return (
    // ESTILIZAR AQUI: container principal (bg-white, rounded-2xl, shadow-md, p-6, mb-6)
    <div className="">
      {/* ESTILIZAR AQUI: título da seção (text-2xl, font-bold, text-slate-800, border-b, pb-2, mb-4) */}
      <h2 className="">Informações Pessoais</h2>

      {/* ESTILIZAR AQUI: usar flexbox ou grid para colocar a lista e a foto lado a lado (flex flex-col md:flex-row justify-between items-center gap-6) */}
      <div className="">
        {/* ESTILIZAR AQUI: espaçamento entre os itens da lista (space-y-2, text-slate-700) */}
        <ul className="">
          <li>
            {/* ESTILIZAR AQUI: destaque no rótulo (font-semibold text-slate-900) */}
            <strong className="">Nome: </strong> 
            Daniel Guimaraes
          </li>
          <li>
            <strong className="">Email: </strong> 
            daniel@mail.com
          </li>
          <li>
            <strong className="">GitHub: </strong>
            {/* ESTILIZAR AQUI: transformar o link em visual de botão (inline-block bg-slate-900 text-white px-3 py-1 rounded-lg hover:bg-slate-700 transition) */}
            <a 
              href="https://github.com/DanielGS85" 
              target="_blank" 
              rel="noopener noreferrer"
              className=""
            >
              DanielGS85
            </a>
          </li>
          <li>
            <strong className="">Telefone: </strong> 
            (11) 99999-9999
          </li>
          <li>
            <strong className="">Endereço: </strong> 
            Rua Exemplo, 123, Petrópolis, RJ
          </li>
        </ul>

        {/* ESTILIZAR AQUI: tamanho da imagem (w-32 h-32 ou w-40 h-40), arredondamento (rounded-full), borda (border-4 border-slate-200), sombra (shadow-lg), object-cover */}
      </div>
    </div>
  );
}