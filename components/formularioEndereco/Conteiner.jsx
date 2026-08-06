export default function Container({ children }) {
  return (
    /* 1. Wrapper fixado em toda a tela (top-0 left-0 w-screen h-screen) */
    <div className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-emerald-50 p-4">     
      <div className="
        w-180
        h-100
        p-6 
        bg-mauve-600
        rounded-xl 
        shadow-lg 
        flex 
        flex-col
      ">
        {children}
      </div>

    </div>
  );
}

// min-w-screen ----------   coloca o elemnto pegando  toda a tela horizontalmente
// min-h-screen-----------   coloa o elemento pegando  toda a tela verticalmente 