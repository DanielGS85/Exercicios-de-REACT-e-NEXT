* Faça o importes dos componentes aqui

import Container from "../components/pastaTal/Container";
import Header from '../../components/pastaTal/Header';
import Footer from '../../components/PastaTal/Footer';

* inicie a funcao page que chama os componente aqui

export default function home() {
  return (
  * Coloque os conponentes aqui, o container envolve tudo como o boody 
    # 
    <Container>
      <div className="flex flex-col flex-6">
        <Header />
        <div className="flex justify-center gap-5 w-full">
          <BotaoLista href="/lista1" texto="Lista 1" />
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