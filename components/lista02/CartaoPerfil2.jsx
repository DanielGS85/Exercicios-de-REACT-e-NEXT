export default function CartaoPerfil2({ nome=" Sem nome" }) {
  return (
    <div className="
      w-4/21
      m-5
      bg-green-600
      rounded-3xl
      px-1 py-1
      text-center
      shadow-lg
    "> 
      <div className="text-3xl">
        👩‍💻

        <h3 className="text-slate-800">{nome}</h3>
      </div>
    </div>
  );
}