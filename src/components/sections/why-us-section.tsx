export default function WhyUsSection() {
  return (
    <section className="border-b border-slate-800/70 py-14">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
          Por que escolher a Pravia
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          Por que milhares confiam na Pravia?
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <div className="card-hover glass rounded-2xl p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
            Transparência total
          </p>
          <p className="mt-2 text-sm text-slate-200">
            Você sabe o que está sendo feito em cada etapa da análise. Nada
            escondido, nada confuso.
          </p>
        </div>

        <div className="card-hover glass rounded-2xl p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
            Linguagem simples
          </p>
          <p className="mt-2 text-sm text-slate-200">
            Explicamos tudo como se estivéssemos conversando na mesa da sua
            casa, olho no olho.
          </p>
        </div>

        <div className="card-hover glass rounded-2xl p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
            Rapidez
          </p>
          <p className="mt-2 text-sm text-slate-200">
            Em poucas horas após o envio dos documentos, você já começa a
            receber as primeiras respostas.
          </p>
        </div>

        <div className="card-hover glass rounded-2xl p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
            Atendimento humano
          </p>
          <p className="mt-2 text-sm text-slate-200">
            Nosso foco está em acolher, explicar e acompanhar. Aqui ninguém
            é tratado como número.
          </p>
        </div>
      </div>
    </section>
  );
}
