export default function Container({ children }) {
  return (
    <div className="
      w-4/5
      h-200
      mx-auto
      mt-10
      p-5
      bg-white
      rounded-3xl
      shadow-lg
    ">
      {children}
    </div>
  );
}