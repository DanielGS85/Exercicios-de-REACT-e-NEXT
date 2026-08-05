import fotoPerfil from '/public/imagens/223539475';

export default function Perfil() {
  return (
    <div className="flex items-center gap-4">
      <img src={fotoPerfil} alt="Foto de perfil" className="w-16 h-16 rounded-full" />
     
    </div>
  );
}