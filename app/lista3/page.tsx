import Container from '../../components/lista03/Container';
import Header from '../../components/lista03/Header';
import { CardAluno } from '@/components/lista03/CardAluno';
import { CardAlunoCurso } from '@/components/lista03/CardAlunoCurso';
import { CardAlunoNota } from '@/components/lista03/CardAlunoNota';
import Footer from '../../components/lista03/Footer';




export default function Lista1(){
  return (
    <Container>
    <div className="flex flex-col flex-1">
      <div>
        <Header/>
        <div>
            <section className='"flex justify-center gap-5"'>
            <CardAluno nome={'Daniel'}/>
            <CardAlunoCurso nome={'Daniel'} curso={"Desenvolvedor"}/>
            <CardAlunoNota nome={'Daniel'} nota={10}/>
            </section>
        </div>
        <div>
        </div>      
      </div> 
      <Footer />
    </div>
    </Container>
  );
}