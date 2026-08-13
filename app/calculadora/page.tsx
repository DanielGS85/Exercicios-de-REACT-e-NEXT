import { Calculadora } from "@/components/calculadoraCom/Calculadora";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen bg-gray-200">
      <Calculadora/>
    </main >
  );
}