export default function Container({ children }) {
  return (
    <div className="
      w-full
      min-h-screen
      mx-auto
      p-5
      bg-blue-300
      flex 
      flex-col 
      shadow-lg
    ">
      {children}
    </div>
  );
}