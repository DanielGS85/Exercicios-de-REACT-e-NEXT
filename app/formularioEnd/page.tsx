
import FormEndereco from '@/components/formularioEndereco/FormEndereco';
import Container from '../../components/formularioEndereco/Conteiner'
export default function home() {
  return (
    <Container>
          <div className="flex flex-col flex-6">
              <div>                  
                <FormEndereco/>
              </div>
      </div>
    </Container>
  );
}