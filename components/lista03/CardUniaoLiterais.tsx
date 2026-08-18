type status = "Aprovado" | "Recupeacao"

export default function CardUniaoLiterais({status}: {status: status}) {
    return(

        <div className="
        w-45
        m-5
        bg-fuchsia-500
        rounded-3xl
        px-1 py-1
        text-center
        shadow-lg
        ">
    <span>
        {status}
    </span>

    </div>
    );
}
