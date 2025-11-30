"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-0">
        <div>
          <p className="font-medium text-slate-300">Pravia</p>
          <p className="mt-1">
            A Pravia atua exclusivamente com auditoria administrativa e
            análise técnica de benefícios. Não prestamos serviços jurídicos e
            não criamos expectativas sobre resultados externos à nossa análise
            técnica.
          </p>
          <p className="mt-2">
            Pravia, uma empresa do Grupo Haven · CNPJ 52.347.874/0001-13
          </p>
        </div>
        <div className="space-y-1 text-right">
          <p>© {year || new Date().getFullYear()} Pravia. Todos os direitos reservados.</p>
          <p className="text-[11px]">
            Termos de uso • Política de privacidade
          </p>
        </div>
      </div>
    </footer>
  );
}
