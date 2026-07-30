import Container from '../components/lista01/Container';
import HeaderPrinc from '../components/homePrincipal/HeaderPrinc';
import BotaoLst01 from '../components/homePrincipal/BotaoLst01';
import Footer from '../components/lista01/Footer';



export default function home(){

    return (

        <Container>
      <div>
        <HeaderPrinc/>
        <div>
            <BotaoLst01/>
        <div>
        <section className="flex flex-wrap justify-center gap-5">
        </section>
        </div>      
      </div>
      <div>
      <Footer />
      </div>
    </div>
    </Container>

    );
}