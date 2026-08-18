export default function CardArrayStringtipado() {
    const cursos: string[] = ["Front-end", "Back-end", "Banco de Dados"];
    return(
        <ul className="
        w-45
      m-5
      bg-fuchsia-500
      rounded-3xl
      px-1 py-1
      text-center
      shadow-lg
        ">
        {cursos.map(c => <li key={c}>• {c}</li>)}
        </ul>
);
}