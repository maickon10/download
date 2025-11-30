import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative grid gap-10 border-b border-slate-800/70 pb-16 lg:grid-cols-[1.1fr,0.9fr] lg:items-center lg:gap-16"
    >
      <div className="space-y-8">
        <div className="pill inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-slate-200">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Auditoria técnica do benefício, sem linguagem difícil.
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
            Seu benefício veio menor?
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-violet-300 bg-clip-text text-transparent">
              Nós descobrimos o motivo.
            </span>
          </h1>
          <p className="max-w-xl text-base text-slate-300 sm:text-lg">
            A Pravia faz uma auditoria técnica completa dos valores e
            descontos do seu benefício, explica cada detalhe de forma
            simples e mostra o que realmente está acontecendo todos os
            meses.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild className="btn-primary rounded-full px-6 py-2.5 text-sm font-semibold !text-slate-950">
            <a href="#contato">Quero analisar meu benefício</a>
          </Button>
          <Button asChild className="btn-secondary rounded-full px-6 py-2.5 text-sm font-medium text-slate-200">
            <a href="#como-funciona">Ver como funciona</a>
          </Button>
        </div>

        <div className="space-y-2 text-xs text-slate-400">
          <p>✓ Explicação clara de cada desconto</p>
          <p>✓ Sem termos difíceis, sem enrolação</p>
          <p>✓ Foco em clareza, respeito e segurança para o aposentado</p>
        </div>
      </div>

      <div className="card-hover glass relative mt-2 rounded-3xl p-5 shadow-2xl shadow-slate-950/70">
        <div className="mb-4 flex items-center justify-between gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-slate-300">
            Visão rápida do benefício
          </span>
          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
            Sem complicação
          </span>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-4">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Resumo do mês</span>
              <span>Benefício • Aposentado</span>
            </div>
            <div className="mt-3 flex items-end justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-wide text-slate-400">
                  Valor recebido
                </p>
                <p className="text-2xl font-semibold text-slate-50">
                  R$ 2.640,00
                </p>
              </div>
              <div className="text-right">
                <p className="text-[11px] uppercase tracking-wide text-slate-400">
                  Descontos
                </p>
                <p className="text-lg font-semibold text-rose-400">
                  R$ 812,00
                </p>
              </div>
            </div>

            <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
              <div className="h-full w-[31%] rounded-full bg-gradient-to-r from-rose-400 to-orange-400" />
            </div>

            <p className="mt-3 text-xs text-slate-300">
              A Pravia mostra de forma simples{" "}
              <span className="font-semibold text-slate-100">
                de onde vem cada desconto
              </span>{" "}
              e como ele afeta o valor final que você recebe.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="card-hover rounded-2xl border border-slate-700/60 bg-slate-900/60 p-3">
              <p className="text-[11px] font-medium text-slate-400">
                Descontos desconhecidos
              </p>
              <p className="mt-1 text-lg font-semibold text-amber-300">2</p>
              <p className="mt-1 text-[11px] text-slate-400">
                Identificados na análise técnica
              </p>
            </div>

            <div className="card-hover rounded-2xl border border-slate-700/60 bg-slate-900/60 p-3">
              <p className="text-[11px] font-medium text-slate-400">
                Cobrança repetida
              </p>
              <p className="mt-1 text-lg font-semibold text-rose-300">1</p>
              <p className="mt-1 text-[11px] text-slate-400">
                Contrato já pago ou duplicado
              </p>
            </div>

            <div className="card-hover rounded-2xl border border-slate-700/60 bg-slate-900/60 p-3">
              <p className="text-[11px] font-medium text-slate-400">
                Impacto no bolso
              </p>
              <p className="mt-1 text-lg font-semibold text-emerald-300">
                +R$ 350,00
              </p>
              <p className="mt-1 text-[11px] text-slate-400">
                Potencial de alívio por mês
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-3">
          <p className="text-[11px] text-slate-400">
            Acompanhamos você em cada etapa até tudo ficar claro.
          </p>
          <a
            href="#contato"
            className="text-[11px] font-medium text-cyan-300 hover:text-cyan-200"
          >
            Falar com um especialista →
          </a>
        </div>
      </div>
    </section>
  );
}
