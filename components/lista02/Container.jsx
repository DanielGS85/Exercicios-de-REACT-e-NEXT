export default function Container({ children }) {
  return (
    <div className="
      w-4/5
      min-h-screen
      mx-auto
      mt-10
      p-5
      bg-white
      flex 
      flex-col 
      rounded-3xl
      shadow-lg
    ">
      {children}
    </div>
  );
}

