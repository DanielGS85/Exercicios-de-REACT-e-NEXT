export default function CartaoPerfeil() {
  return ( 
    <div className=" 
      w-4/18
      m-5
      bg-green-600
      rounded-3xl 
      px-1 py-1 
      text-center shadow-lg">
      <div className="text-5xl">👩‍💻</div>
      <h3 className="text-slate-800">Daniel Guimaraes</h3>
      <p className="text-slate-800">DEV FUl STACK</p></div>
  );
}

  // deiar os cards responsivos
  // w-full
  // sm:w-1/2
  // md:w-1/4
  // m-5
  // bg-green-600
  // rounded-3xl
  // px-4 py-4
  // text-center
  // shadow-lg
  //
  //  Assim:
  //  celular → ocupa a largura toda (w-full)
  //  tablet → metade da tela (sm:w-1/2)
  //  computador → 1/4 da tela (md:w-1/4)

// Essa combinação de flex-wrap no pai + largura responsiva no card é uma das formas mais usadas para listas de cards em Tailwind.


//bg-amber-300 m-4 rounded-3xl px-6 py-5 text-center shadow-lg"