import Link from "next/link";
import FotoPerfil from "./FotoPerfil";

export default function Header() {
  return (
    <header className="
      w-120
      h-180
      mt-20
      mx-auto      
      p-5     
      bg-amber-50
      flex 
      flex-col 
      shadow-lg
    ">
      <FotoPerfil />

      <nav className=" w-12 bg-emerald-500 flex justify-center text-1xl mt-5  gap-6">
                <Link href="/">
          <h1>Início</h1>
        </Link>
      </nav>
    </header>
  );
}

// bg-white: Deixa o fundo branco igual ao modelo da imagem (em vez de amber-100).

// w-full + max-w-4xl: A caixa ocupa 100% nos celulares, mas trava em uma largura elegante (ex: ~896px) em telas maiores de PC.

// mx-auto: Centraliza a caixa branca na horizontal na página.

// my-12: Dá uma margem acima e abaixo da caixa para aparecer o fundo colorido atrás (substitui a necessidade de travar o h-5/6).

// p-8 + pt-20: Cria o espaço interno. O pt-20 reserva o espaço extra no topo para quando você encaixar a foto redonda vazando para fora do topo do card.

// shadow-2xl: Adiciona a sombra suave em volta do papel para destacar do fundo.

// relative: Permite posicionar a foto redonda de forma absoluta em relação a essa caixa.



//  estilizacao do conteiner
//       w-full
//       min-h-screen
//       mx-auto
//       p-5
//       bg-blue-300
//       flex 
//       flex-col 
//       shadow-lg