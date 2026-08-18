export default function CardPropUnion({ cor }: { cor: "verde" | "vermelho" }) {
    const classe = cor === "verde"
    ? "w-45 m-5 rounded-3xl px-1 py-1 text-center shadow-lg  bg-green-100 text-green-700"
    : " w-45 m-5 rounded-3xl px-1 py-1 text-center shadow-lg bg-red-100 text-red-700";
    return <span className={
        "px-4 py-2 rounded-3xl font-bold " + classe}>{cor}</span>;
}


