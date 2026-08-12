import Container from "../components/lista01/Container";
import Header from "../components/homePrincipal/Header";
import BotaoLista from "../components/homePrincipal/BotaoLista";
import Footer from "../components/homePrincipal/Footer"

export default function home() {
  return (
    <Container>
      <div className="flex flex-col flex-6">
        <Header />
        <div className="flex justify-center gap-5 w-full">
          <BotaoLista href="/lista1" texto="Lista 1" />
          <BotaoLista href="/lista2" texto="Lista 2" />
          <BotaoLista href="/lista3" texto="Lista 3" />
          <BotaoLista href="/lista4" texto="Lista 4" />
          <BotaoLista href="/curriculoSobre" texto="curriculo" />
        </div>
          <div>
          {/* <section className="flex flex-wrap justify-center gap-5"></section> */}
          <div className="flex flex-wrap justify-center gap-5">
          <BotaoLista href="/formularioEnd" texto="Formulario" />
          </div>
          </div>
          <Footer/>
      </div>
    </Container>
  );
}


{/* <div className="">
          <BotaoLista href="/curriculoSobre" texto="curriculo"/>
          </div> */}