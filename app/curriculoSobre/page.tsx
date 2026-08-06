import Container from "../../components/curriculosm/Container";
import Header from '../../components/curriculosm/Header';
import InformacoesP from '../../components/curriculosm/InformacoesP';
import ExperienciaPro from '../../components/curriculosm/ExperienciaPro';
import FormacaoAca from '../../components/curriculosm/FormacaoAca';
import FormacoesTec from './../../components/curriculosm/FormacoesTec';
import Footer from '../../components/curriculosm/Footer';
// import FotoPerfil from "../../public/imagens/223539475.jpg";

export default function CurriculoSobreMin() {
    return (
        <Container>
            <div>
                <Header />
                <div>
                    <InformacoesP/>
                    <ExperienciaPro/>
                    <FormacaoAca/>
                     <FormacoesTec/>
                     <Footer/>
                </div>
            </div>
        </Container>
    );
}