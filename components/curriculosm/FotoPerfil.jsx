import Image from 'next/image';

export default function FotoPerfil() {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="/imagens/223539475.jpg"
        alt="Foto de perfil"
        width={120}
        height={120}
        className="rounded-full object-cover"
      />
    </div>
  );
}