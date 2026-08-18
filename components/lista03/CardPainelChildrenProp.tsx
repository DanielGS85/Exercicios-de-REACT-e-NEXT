export default function PainelCVhildrenProp({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <div className="
 w-45
      m-5
      bg-fuchsia-500
      rounded-3xl
      px-1 py-1
      text-center
      shadow-lg">
      <h3 className="text-xl font-bold text-amber-50 mb-2">{titulo}</h3>
      {children}
    </div>
  );
}


