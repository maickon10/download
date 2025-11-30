export default function AboutSection() {
  return (
    <section
      id="quem-somos"
      className="border-b border-slate-800/70 py-14"
    >
      <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
            Quem é a Pravia
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Transparência e clareza para aposentados e pensionistas.
          </h2>
        </div>
        <div className="max-w-lg text-sm text-slate-300">
          A Pravia é uma empresa especializada em{" "}
          <span className="font-medium text-slate-100">
            auditoria administrativa e análise técnica de benefícios
          </span>
          . Nosso papel é revelar, com rapidez e simplicidade, de onde vêm
          os descontos, o que está correto e o que pode estar prejudicando
          o valor final que você recebe.
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="card-hover glass rounded-2xl p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
            Missão
          </p>
          <p className="mt-2 text-sm text-slate-200">
            Levar clareza financeira para aposentados e pensionistas,
            mostrando cada detalhe do benefício de forma simples, humana e
            respeitosa.
          </p>
        </div>
        <div className="card-hover glass rounded-2xl p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
            Visão
          </p>
          <p className="mt-2 text-sm text-slate-200">
            Ser referência nacional em análise técnica de benefícios,
            garantindo que ninguém fique no escuro sobre os valores que
            recebe.
          </p>
        </div>
        <div className="card-hover glass rounded-2xl p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
            Valores
          </p>
          <p className="mt-2 text-sm text-slate-200">
            Transparência, cuidado com o idoso, respeito à história de vida
            do cliente e compromisso total com uma comunicação clara e
            honesta.
          </p>
        </div>
      </div>
    </section>
  );
}
