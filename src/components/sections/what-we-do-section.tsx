export default function WhatWeDoSection() {
  return (
    <section
      id="o-que-fazemos"
      className="border-b border-slate-800/70 py-14"
    >
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
          O que fazemos
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          O que a Pravia faz por você
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-300">
          Analisamos seu benefício de ponta a ponta para identificar
          descontos que não fazem sentido, cobranças estranhas e tudo aquilo
          que reduz o valor que você recebe sem explicação clara.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="card-hover rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-200">
            1. Investigação dos descontos
          </p>
          <p className="mt-3 text-sm text-slate-200">
            Identificamos descontos desconhecidos, cobranças repetidas e
            valores fora do normal que afetam seu benefício todos os meses.
          </p>
        </div>

        <div className="card-hover rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-200">
            2. Auditoria detalhada
          </p>
          <p className="mt-3 text-sm text-slate-200">
            Analisamos extratos, comprovantes, contratos e histórico de
            créditos para montar um diagnóstico completo da situação.
          </p>
        </div>

        <div className="card-hover rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-200">
            3. Explicação simples
          </p>
          <p className="mt-3 text-sm text-slate-200">
            Você recebe tudo traduzido para uma linguagem clara, sem termos
            difíceis, sem siglas confusas e sem enrolação.
          </p>
        </div>

        <div className="card-hover rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-200">
            4. Orientação segura
          </p>
          <p className="mt-3 text-sm text-slate-200">
            Quando identificamos algo que precisa ser tratado fora da
            análise técnica, orientamos você sobre qual é o caminho certo,
            sem promessas e sem criar expectativas irreais.
          </p>
        </div>
      </div>
    </section>
  );
}
