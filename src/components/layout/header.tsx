import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-0">
        <div className="flex items-center gap-3">
          <div className="flex flex-col leading-tight">
            <div className="relative h-8 w-44">
              <Image
                src="/img/LogoPraviaT.png"
                alt="Pravia Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          <a href="#hero" className="hover:text-white">
            Início
          </a>
          <a href="#quem-somos" className="hover:text-white">
            Quem é a Pravia
          </a>
          <a href="#o-que-fazemos" className="hover:text-white">
            O que fazemos
          </a>
          <a href="#como-funciona" className="hover:text-white">
            Como funciona
          </a>
          <a href="#contato" className="hover:text-white">
            Contato
          </a>
        </div>

        <div className="hidden md:flex">
          <Button asChild className="btn-primary rounded-full px-5 py-2 text-sm font-semibold !text-slate-950">
            <a href="#contato">Falar com a Pravia</a>
          </Button>
        </div>
      </nav>
    </header>
  );
}
