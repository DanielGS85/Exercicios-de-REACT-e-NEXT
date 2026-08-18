import Container from '../../components/lista03/Container';
import Header from '../../components/lista03/Header';
import { CardAluno } from '@/components/lista03/CardAluno';
import { CardAlunoCurso } from '@/components/lista03/CardAlunoCurso';
import { CardAlunoNota } from '@/components/lista03/CardAlunoNota';
import CardAlunoPresente from '@/components/lista03/CardAlunoPresente';
import CardAlunoInline from '@/components/lista03/CardAlunoInline';
import { CardAlunoOpcional } from '@/components/lista03/CardAlunoOpcional';
import CardAlunoOpValorPadrao from '@/components/lista03/CardAlunoOpValorPadrao';
import { PainelTipado } from '@/components/lista03/PainelTipado';
import CardAlunoObjeto from '@/components/lista03/CardAlunoObjeto';
import CardTurmaArry from '@/components/lista03/CardTurmaArry';
import CardUniaoLiterais from '@/components/lista03/CardUniaoLiterais';
import CardPropUnion from '@/components/lista03/CardPropUnion';
import CardArrayStringtipado from './../../components/lista03/CardArrayStringtipado';
import Footer from '../../components/lista03/Footer';
import { CardAlunoNotaJunto } from '@/components/lista03/CardAlunoNotaJunto';


export default function Lista1() {

  const aluno = {
    id: 1,
    nome: "Daniel",
    curso: "Objeto"
  };


  return (
    <Container>
      <div className="flex flex-col flex-1">
        <div>
          <Header />

          <div>
            <section className="flex flex-wrap justify-center gap-5">

              <CardAluno nome={'Daniel'} />

              <CardAlunoCurso
                nome={'Daniel'}
                curso={"Desenvolvedor"}
              />

              <CardAlunoNota
                nome={'Daniel'}
                nota={10}
              />

              <CardAlunoPresente
                nome={'Daniel'}
                curso={"Desenvolvedor"}
                presente={true}
              />

              <CardAlunoInline nome={'Daniel INLINE'} />

              <CardAlunoOpcional
                nome={'Daniel'}
                bolsista={true}
              />

              <CardAlunoOpValorPadrao
                nome={'Daniel'}
              />

              <PainelTipado texto="Painel Tipado">
                <p>Este é um painel tipado.</p>
              </PainelTipado>

              <CardAlunoObjeto aluno={aluno} />

              <CardTurmaArry />

              <CardUniaoLiterais status="Aprovado" />

              <CardPropUnion cor={"vermelho"}/>

              <CardArrayStringtipado/>

              <CardAlunoNotaJunto
              nome={'Daniel'}
              nota={10}
              />
            </section>
          </div>
        </div>

        <Footer />
      </div>
    </Container>
  );
}