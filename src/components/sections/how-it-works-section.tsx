import { Button } from "@/components/ui/button";

export default function HowItWorksSection() {
  return (
    <section
      id="como-funciona"
      className="border-b border-slate-800/70 py-14"
    >
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
          Como funciona
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          Como funciona na prática
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-300">
          Um passo a passo pensado para facilitar a sua vida, sem precisar
          sair de casa.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <div className="card-hover rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
          <span className="text-xs font-semibold uppercase tracking-wide text-indigo-200">
            Passo 1
          </span>
          <h3 className="mt-2 text-sm font-semibold text-slate-50">
            Envio dos documentos
          </h3>
          <p className="mt-2 text-sm text-slate-200">
            Você envia fotos ou PDFs dos seus comprovantes, extratos e
            demais documentos do benefício.
          </p>
        </div>

        <div className="card-hover rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
          <span className="text-xs font-semibold uppercase tracking-wide text-indigo-200">
            Passo 2
          </span>
          <h3 className="mt-2 text-sm font-semibold text-slate-50">
            Auditoria completa
          </h3>
          <p className="mt-2 text-sm text-slate-200">
            A Pravia faz uma análise detalhada para entender todos os
            descontos e valores envolvidos.
          </p>
        </div>

        <div className="card-hover rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
          <span className="text-xs font-semibold uppercase tracking-wide text-indigo-200">
            Passo 3
          </span>
          <h3 className="mt-2 text-sm font-semibold text-slate-50">
            Relatório organizado
          </h3>
          <p className="mt-2 text-sm text-slate-200">
            Você recebe um resumo claro com cada valor identificado e
            explicado.
          </p>
        </div>

        <div className="card-hover rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
          <span className="text-xs font-semibold uppercase tracking-wide text-indigo-200">
            Passo 4
          </span>
          <h3 className="mt-2 text-sm font-semibold text-slate-50">
            Acompanhamento
          </h3>
          <p className="mt-2 text-sm text-slate-200">
            Nós seguimos com você até que tudo esteja totalmente
            compreendido e esclarecido.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-slate-300">
          Quer dar o próximo passo? Envie seus documentos agora mesmo e
          comece a entender seu benefício em detalhes.
        </p>
        <Button asChild className="btn-primary rounded-full px-6 py-2.5 text-sm font-semibold !text-slate-950">
          <a href="#contato">Quero fazer minha análise agora</a>
        </Button>
      </div>
    </section>
  );
}
