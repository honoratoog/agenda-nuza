"use client";

import { useState } from "react";

export default function PerfilPage() {
  const [salvo, setSalvo] = useState(false);

  function salvarAlteracoes() {
    setSalvo(true);

    setTimeout(() => {
      setSalvo(false);
    }, 3000);
  }

  return (
    <div className="space-y-6">
      {salvo && (
        <div className="rounded-2xl bg-[#b7e4c7] px-5 py-4 font-semibold text-[#1f1f1f]">
          Informações atualizadas com sucesso.
        </div>
      )}

      <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <p className="text-sm font-medium text-[#40916c]">Dados pessoais</p>
        <h1 className="mt-2 text-3xl font-bold text-[#1f1f1f]">Meu perfil</h1>
        <p className="mt-2 text-[#666]">
          Atualize suas informações pessoais e dados de acesso.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <section className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#b7e4c7] text-3xl font-bold text-[#1f1f1f]">
              L
            </div>

            <h2 className="mt-5 text-2xl font-bold text-[#1f1f1f]">
              Luiza Honorato
            </h2>

            <p className="mt-1 text-sm text-[#666]">Cliente AgendaNuza</p>

            <div className="mt-6 w-full rounded-[24px] bg-[#f8f6f0] p-4 text-left">
              <p className="text-sm text-[#666]">Status da conta</p>
              <p className="mt-1 font-semibold text-[#1f1f1f]">Ativa</p>
            </div>

            <div className="mt-4 w-full rounded-[24px] bg-[#f8f6f0] p-4 text-left">
              <p className="text-sm text-[#666]">Membro desde</p>
              <p className="mt-1 font-semibold text-[#1f1f1f]">
                Março de 2026
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <h2 className="text-2xl font-bold text-[#1f1f1f]">
            Informações pessoais
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-[#555]">
                Nome completo
              </label>
              <input
                defaultValue="Luiza Honorato"
                className="w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3 outline-none focus:border-[#40916c]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#555]">
                WhatsApp
              </label>
              <input
                defaultValue="(47) 99999-9999"
                className="w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3 outline-none focus:border-[#40916c]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-[#555]">
                Email
              </label>
              <input
                defaultValue="luiza@email.com"
                className="w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3 outline-none focus:border-[#40916c]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#555]">
                Nova senha
              </label>
              <input
                type="password"
                placeholder="Digite uma nova senha"
                className="w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3 outline-none focus:border-[#40916c]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#555]">
                Confirmar nova senha
              </label>
              <input
                type="password"
                placeholder="Confirme a nova senha"
                className="w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3 outline-none focus:border-[#40916c]"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={salvarAlteracoes}
              className="rounded-2xl bg-[#40916c] px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Salvar alterações
            </button>

            <button className="rounded-2xl border border-[#d4af37] px-6 py-3 font-semibold text-[#1f1f1f] transition hover:bg-[#fff6dc]">
              Cancelar
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}