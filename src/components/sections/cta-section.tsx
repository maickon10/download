import ContactForm from "@/components/contact-form";

export default function CtaSection() {
    // COLOQUE AQUI O NÚMERO OFICIAL DA PRAVIA (somente números, com DDI e DDD)
    const WHATSAPP_NUMERO = "5516960010047"; // ex: 5516999999999

  return (
    <section id="contato" className="py-14">
      <div className="glass relative overflow-hidden rounded-3xl border border-slate-800 px-6 py-9 sm:px-10">
        <div className="gradient-line absolute inset-x-16 top-0 h-[1px] opacity-70" />

        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">
              Pronto para dar o próximo passo?
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Seu benefício não pode ser um mistério.
            </h2>
            <p className="mt-3 text-sm text-slate-200">
              Receba uma análise técnica completa e descubra a origem de
              cada desconto. Nosso time está pronto para te atender com
              calma, respeito e clareza.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMERO}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold text-slate-950"
              >
                Falar no WhatsApp
              </a>
              <a
                href="mailto:contato@pravia.com.br"
                className="btn-secondary inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium text-slate-200"
              >
                Enviar e-mail
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-400">
              Horário de atendimento: de segunda a sexta, das 09h às 18h
              (horário de Brasília).
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
