"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ContactForm() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [motivo, setMotivo] = useState("");
  const [erro, setErro] = useState("");
  const [enviando, setEnviando] = useState(false);

  // COLOQUE AQUI O NÚMERO OFICIAL DA PRAVIA (somente números, com DDI e DDD)
  const WHATSAPP_NUMERO = "5516960010047"; // ex: 5516999999999

  function limparTelefone(raw: string) {
    return raw.replace(/\D/g, "");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro("");

    if (!nome.trim() || !telefone.trim() || !motivo.trim()) {
      setErro("Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    const telefoneLimpo = limparTelefone(telefone);
    if (telefoneLimpo.length < 10) {
      setErro("Informe um telefone/WhatsApp válido.");
      return;
    }

    setEnviando(true);

    const mensagem = `
Olá, equipe Pravia!

Um novo cliente preencheu o formulário do site:

• Nome: ${nome}
• Telefone/WhatsApp: ${telefone}
• Motivo do contato / resumo do problema:
${motivo}

Por favor, entrem em contato para iniciar a análise do benefício.
    `.trim();

    const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
      mensagem
    )}`;

    if (typeof window !== "undefined") {
      window.open(url, "_blank");
    }

    setEnviando(false);
  }

  return (
    <div className="card-hover rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
      <p className="text-sm font-semibold text-slate-50">
        Envie seus dados e retornamos para você
      </p>
      <p className="mt-1 text-xs text-slate-400">
        Preencha com cuidado para que possamos entrar em contato o
        mais rápido possível.
      </p>

      <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
        <div className="space-y-1.5">
          <Label htmlFor="nome" className="text-xs font-medium text-slate-300">
            Nome completo
          </Label>
          <Input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full rounded-xl border-slate-700 bg-slate-950/70 text-sm text-slate-100 ring-offset-0 placeholder:text-slate-500 focus-visible:ring-1 focus-visible:ring-indigo-400 focus-visible:ring-offset-0"
            placeholder="Como você prefere ser chamado(a)?"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="telefone" className="text-xs font-medium text-slate-300">
            Telefone / WhatsApp
          </Label>
          <Input
            id="telefone"
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            className="w-full rounded-xl border-slate-700 bg-slate-950/70 text-sm text-slate-100 ring-offset-0 placeholder:text-slate-500 focus-visible:ring-1 focus-visible:ring-indigo-400 focus-visible:ring-offset-0"
            placeholder="(DDD) 99999-9999"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="motivo" className="text-xs font-medium text-slate-300">
            Motivo do contato
          </Label>
          <Textarea
            id="motivo"
            rows={3}
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
            className="w-full rounded-xl border-slate-700 bg-slate-950/70 text-sm text-slate-100 ring-offset-0 placeholder:text-slate-500 focus-visible:ring-1 focus-visible:ring-indigo-400 focus-visible:ring-offset-0"
            placeholder="Ex: desconto desconhecido, benefício veio menor, cobrança que não reconheço..."
          />
        </div>

        {erro && (
          <p className="text-[11px] font-medium text-rose-400">
            {erro}
          </p>
        )}

        <Button
          type="submit"
          disabled={enviando}
          className="btn-primary mt-2 w-full !rounded-full px-4 py-2.5 text-sm font-semibold !text-slate-950 disabled:opacity-60"
        >
          {enviando ? "Enviando..." : "Enviar e abrir WhatsApp"}
        </Button>

        <p className="!mt-2 text-center text-[11px] text-slate-500">
          Ao enviar, você será direcionado(a) para o WhatsApp da
          Pravia com a mensagem pronta.
        </p>
      </form>
    </div>
  );
}
