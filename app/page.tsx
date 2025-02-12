import { Header } from "@/components/Header";
import { animals } from "@/data/animals"

const animalData = animals

export default function Home() {
  return (
    <main>
      <Header />
      <div className="w-full min-h-screen dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
      {/* Spotlight effect */}
      <div className="absolute pointer-events-none flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {/* Content */}  
      <div className="max-w-7xl w-full flex flex-col justify-center items-center mx-auto overflow-hidden">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-5">
          {animalData.map((d) => (
            <h1>{d.navn}</h1>
          ))}
        </div>
      </div>


      </div>
      
    </main>
  );
}
