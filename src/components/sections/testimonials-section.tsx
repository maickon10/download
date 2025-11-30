export default function TestimonialsSection() {
  return (
    <section className="border-b border-slate-800/70 py-14">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
          Depoimentos
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          Histórias de quem ganhou clareza
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="card-hover glass rounded-2xl p-5">
          <p className="text-sm text-slate-200">
            “Eu só via o dinheiro sumindo todo mês. Com a análise da
            Pravia, entendi de onde vinham os descontos e consegui organizar
            minha vida financeira.”
          </p>
          <p className="mt-3 text-xs font-medium text-slate-400">
            Maria, 69 anos – Aposentada
          </p>
        </div>

        <div className="card-hover glass rounded-2xl p-5">
          <p className="text-sm text-slate-200">
            “Descobri um desconto que eu nunca tinha autorizado. Se eu não
            tivesse feito essa auditoria, ia continuar perdendo dinheiro sem
            saber.”
          </p>
          <p className="mt-3 text-xs font-medium text-slate-400">
            José, 72 anos – Pensionista
          </p>
        </div>

        <div className="card-hover glass rounded-2xl p-5">
          <p className="text-sm text-slate-200">
            “O melhor foi a forma como me explicaram. Sem termos difíceis,
            sem pressa e com muito respeito.”
          </p>
          <p className="mt-3 text-xs font-medium text-slate-400">
            Tereza, 64 anos – Aposentada
          </p>
        </div>
      </div>
    </section>
  );
}
