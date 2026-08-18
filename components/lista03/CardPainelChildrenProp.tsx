export default function CardChi ({ children }) {
    return (
        <div className=" 
        w-4/21 
        m-8
        px-1 py-1 p-4 
        flex justify-center
        bg-orange-600 
        text-white
        text-center 
        rounded-lg 
        shadow-md">
            {children}
        </div>
    );
}