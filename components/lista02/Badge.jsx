export default function Badge({ texto }) {
  return (
    <span className="
    w-4/40
    h-3x 
    m-5
    px-1 py-1
    text-center
    text-white 
    font-bold 
    text-4xl
    shadow-lg
    flex-wrap
    bg-slate-800 
    rounded-3xl ">
      {texto}
    </span>
  );
}