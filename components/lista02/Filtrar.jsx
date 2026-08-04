export default function Filtrar() {
    const turmas = [
        { id: 1, nome: "Daniel", curso: "DEV FULL STACK", nota: 5},
        { id: 2, nome: "Pedro", curso: "DEV FRONT END", nota: 9 },
        { id: 3, nome: "Felipe", curso: "DEV FULL STACK", nota:5 },
        { id: 4, nome: "Thais", curso: "DEV FRONT END", nota: 10 },
        { id: 5, nome: "Joao", curso: "DEV FULL STACK", nota: 4 },
      ];
          
      return (
         <div className="flex gap-3">
      {turmas.map((turma) => (
        turma.nota >= 6 ? (
          <div key={turma.id} className="

          bg-white 
          rounded-xl 
          p-6 
          shadow-md 
          text-slate-800 
          font-bold">{turma.nome}
          </div>
        ) : null
      ))}
    </div>
      );
}
