import Container from "../../components/lista02/Container";
import Header    from "../../components/lista02/Header"
import CartaoPerfil from "../../components/lista02/CartaoPerfil"
import CartaoPerfil2 from "../../components/lista02/CartaoPerfil2"
import CartaoPerfil3 from "../../components/lista02/CartaoPerfil3"
import CartaoPerfil4 from "../../components/lista02/CartaoPerfil4"
import CartaoPerfil5 from "../../components/lista02/CartaoPerfil5"
import CartaoPerfil6 from "../../components/lista02/CartaoPerfil6"
import CartaoTurma from "../../components/lista02/CartaoTurma"
import ListaTurmaNotas from "../../components/lista02/LIstarnotas"
import Filtrar from "../../components/lista02/Filtrar"
import Badge from "../../components/lista02/Badge"
import Painel from "../../components/lista02/Painel";
import Gradealunos from "../../components/lista02/Gradealunos"
import CardAlunosGeral from "../../components/lista02/CardAlunosGeral"
import Footer    from "../../components/lista02/Footer"

export default function lista2() {
    return(
        <Container>
        <div className="flex flex-wrap flex-col flex-1">
             <div>
                <Header/>
                <div>
                    <section className="flex flex-wrap justify-center gap-5">
                        <CartaoPerfil nome={'Daniel'} nota={8.5} curso={'DEV FULL STACK'} presente={false}/>
                        <CartaoPerfil2/>
                        <CartaoPerfil3/>
                        <CartaoPerfil4/>
                        <CartaoPerfil5/>
                        <CartaoPerfil6/>
                        <ListaTurmaNotas/>
                        <Filtrar/>
                        <Badge texto={'Novo'}/>
                        <CartaoTurma/>
                    </section>
                </div>
                <div>
                    <section className="flex flex-wrap justify-center gap-5">
                    <Painel>
                        <h3 className="text-xl font-bold">Painel</h3>
                    </Painel>
                    </section>
                </div>
                <section className="flex flex-wrap justify-center gap-5">
                    <Gradealunos/>
                    <CardAlunosGeral/>
                </section>
             </div>
             <Footer/>
        </div>
        </Container>
    );
};