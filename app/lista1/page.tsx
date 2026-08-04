import Container from '../../components/lista01/Container';
import Header from '../../components/lista01/Header';
import ContadorAlunos from '../../components/lista01/ContadorAlunos';
import CartaoPerfil from '../../components/lista01/CartaoPerfil';
import CartaoPerfil1 from '../../components/lista01/CartaoPerfil1';
import CartaoPerfil2 from '../../components/lista01/CartaoPerfil2';
import CartaoPerfil3 from '../../components/lista01/CartaoPerfil3';
import CartaoPerfil4 from '../../components/lista01/CartaoPerfil4';
import Footer from '../../components/lista01/Footer';



export default function Lista1(){
  return (
    <Container>
    <div className="flex flex-col flex-1">
      <div>
        <Header/>
        <div>
        <ContadorAlunos/>
        </div>
        {/* Os cards dos alunos obedencem  o as regrgas do container com a tag section, */}
        <div>
        <section className="flex flex-wrap justify-center gap-5"> 
        {/* aqui vão os cards dos alunos */}
        <CartaoPerfil />
        <CartaoPerfil1 />
        <CartaoPerfil2 />
        <CartaoPerfil3 />
        <CartaoPerfil4 />
        </section>
        </div>      
      </div> 
      <Footer />
    </div>
    </Container>
  );
}




// import Image from "next/image";//
// import { TemplateString } from 'next/dist/lib/metadata/types/metadata-types';

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
