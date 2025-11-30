export default function WhoItsForSection() {
  return (
    <section className="border-b border-slate-800/70 py-14">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
          Para quem é
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          A Pravia é ideal para quem:
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <ul className="space-y-3 text-sm text-slate-200">
          <li>✓ Recebeu um desconto que não reconhece</li>
          <li>✓ Percebeu redução no valor do benefício</li>
          <li>✓ Enxerga cobranças de serviços que nunca contratou</li>
        </ul>
        <ul className="space-y-3 text-sm text-slate-200">
          <li>✓ Já quitou um contrato, mas ele continua sendo cobrado</li>
          <li>✓ Quer entender cada detalhe que entra e sai do benefício</li>
          <li>✓ Deseja segurança, clareza e uma análise técnica confiável</li>
        </ul>
      </div>
    </section>
  );
}
