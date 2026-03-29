"use client";

import { useMemo, useState } from "react";

export default function Cliente() {
  const horarios = ["09:00", "09:30", "10:00", "11:00", "14:00", "15:30"];

  const categorias = [
    {
      nome: "Unhas",
      itens: [
        { nome: "Manicure", preco: "R$ 25,00", tempo: "30 min" },
        { nome: "Pedicure", preco: "R$ 25,00", tempo: "30 min" },
        { nome: "Manicure + Pedicure", preco: "R$ 50,00", tempo: "1h" },
      ],
    },
    {
      nome: "Depilação",
      itens: [
        { nome: "Depilação - perna inteira", preco: "R$ 30,00", tempo: "30 min" },
        { nome: "Depilação - meia perna", preco: "R$ 25,00", tempo: "20 min" },
        { nome: "Depilação - virilha", preco: "R$ 25,00", tempo: "15 min" },
        { nome: "Depilação - buço", preco: "R$ 10,00", tempo: "10 min" },
        { nome: "Sobrancelha - excesso", preco: "R$ 12,00", tempo: "15 min" },
      ],
    },
    {
      nome: "Cabelo",
      itens: [
        { nome: "Corte masculino", preco: "R$ 25,00", tempo: "20 min" },
        { nome: "Corte feminino sem escova", preco: "R$ 45,00", tempo: "30 min" },
        { nome: "Corte feminino + escova", preco: "A partir de R$ 60,00", tempo: "45 a 60 min" },
        { nome: "Coloração sem tinta inclusa - aplicação sem escova", preco: "R$ 40,00", tempo: "1h" },
        { nome: "Coloração sem tinta inclusa - aplicação com escova", preco: "R$ 65,00", tempo: "1h30" },
        { nome: "Coloração com tinta inclusa - aplicação sem escova", preco: "A partir de R$ 60,00", tempo: "1h" },
        { nome: "Coloração com tinta inclusa - aplicação com escova", preco: "A partir de R$ 85,00", tempo: "1h30" },
        { nome: "Hidratação", preco: "R$ 65,00", tempo: "1h" },
        { nome: "Cauterização", preco: "R$ 75,00", tempo: "1h" },
        { nome: "Escova", preco: "A partir de R$ 45,00", tempo: "30 min" },
        { nome: "Escova + prancha", preco: "A partir de R$ 55,00", tempo: "45 min" },
        { nome: "Luzes", preco: "A partir de R$ 170,00", tempo: "2h" },
        { nome: "Ombre hair", preco: "A partir de R$ 170,00", tempo: "2h" },
        { nome: "Morena iluminada", preco: "A partir de R$ 170,00", tempo: "2h" },
      ],
    },
  ];

  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Cabelo");
  const [servicoSelecionado, setServicoSelecionado] = useState("Corte feminino sem escova");

  const servicosDaCategoria = useMemo(() => {
    return categorias.find((c) => c.nome === categoriaSelecionada)?.itens || [];
  }, [categoriaSelecionada]);

  const resumoServico = useMemo(() => {
    return (
      servicosDaCategoria.find((item) => item.nome === servicoSelecionado) ||
      servicosDaCategoria[0]
    );
  }, [servicosDaCategoria, servicoSelecionado]);

  const todosServicos = categorias.flatMap((c) => c.itens);

  const agendamentos = [
    {
      servico: "Corte feminino sem escova",
      data: "15/03/2026",
      hora: "14:00",
      status: "Agendado",
    },
    {
      servico: "Hidratação",
      data: "22/03/2026",
      hora: "10:00",
      status: "Pendente",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Próximo atendimento</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">15/03</h2>
          <p className="mt-2 text-sm text-[#777]">
            Corte feminino sem escova às 14:00
          </p>
        </div>

        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Agendamentos</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">2</h2>
          <p className="mt-2 text-sm text-[#777]">ativos no sistema</p>
        </div>

        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Serviços disponíveis</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">{todosServicos.length}</h2>
          <p className="mt-2 text-sm text-[#777]">prontos para agendar</p>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#1f1f1f]">
                Agendar atendimento
              </h2>
              <p className="mt-1 text-sm text-[#666]">
                Monte seu próximo horário em poucos passos.
              </p>
            </div>

            <div className="rounded-full bg-[#fff4d6] px-4 py-2 text-sm font-semibold text-[#8a6a00]">
              Atendimento online
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-medium text-[#555]">
                Categoria
              </label>
              <select
                value={categoriaSelecionada}
                onChange={(e) => {
                  const novaCategoria = e.target.value;
                  setCategoriaSelecionada(novaCategoria);
                  const primeiroServico =
                    categorias.find((c) => c.nome === novaCategoria)?.itens[0]?.nome || "";
                  setServicoSelecionado(primeiroServico);
                }}
                className="w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3 outline-none focus:border-[#40916c]"
              >
                {categorias.map((categoria) => (
                  <option key={categoria.nome} value={categoria.nome}>
                    {categoria.nome}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#555]">
                Serviço
              </label>
              <select
                value={servicoSelecionado}
                onChange={(e) => setServicoSelecionado(e.target.value)}
                className="w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3 outline-none focus:border-[#40916c]"
              >
                {servicosDaCategoria.map((servico) => (
                  <option key={servico.nome} value={servico.nome}>
                    {servico.nome}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#555]">
                Data
              </label>
              <input
                type="date"
                className="w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3 outline-none focus:border-[#40916c]"
              />
            </div>
          </div>

          <div className="mt-8">
            <p className="mb-4 text-sm font-semibold text-[#555]">
              Horários disponíveis
            </p>

            <div className="flex flex-wrap gap-3">
              {horarios.map((hora) => (
                <button
                  key={hora}
                  className="rounded-2xl border border-[#d4af37] bg-white px-5 py-3 font-semibold text-[#1f1f1f] transition hover:bg-[#fff6dc]"
                >
                  {hora}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-[28px] bg-gradient-to-r from-[#40916c] to-[#74c69d] p-6 text-white">
            <p className="text-sm uppercase tracking-wide text-white/80">
              Resumo
            </p>
            <h3 className="mt-2 text-2xl font-bold">
              {resumoServico?.nome}
            </h3>
            <p className="mt-2 text-white/90">Duração média: {resumoServico?.tempo}</p>
            <p className="text-white/90">Valor: {resumoServico?.preco}</p>

            <button className="mt-5 rounded-2xl bg-white px-6 py-3 font-semibold text-[#1f1f1f] transition hover:bg-[#f2f2f2]">
              Confirmar agendamento
            </button>
          </div>
        </section>

        <div className="space-y-6">
          <section className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#1f1f1f]">
                Meus agendamentos
              </h2>
              <p className="mt-1 text-sm text-[#666]">
                Acompanhe seus próximos horários.
              </p>
            </div>

            <div className="space-y-4">
              {agendamentos.map((item) => (
                <div
                  key={`${item.servico}-${item.data}-${item.hora}`}
                  className="rounded-[24px] bg-[#f8f6f0] p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-lg font-semibold text-[#1f1f1f]">
                        {item.servico}
                      </p>
                      <p className="mt-1 text-sm text-[#666]">
                        {item.data} às {item.hora}
                      </p>
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-sm font-medium ${
                        item.status === "Agendado"
                          ? "bg-[#b7e4c7] text-[#1f1f1f]"
                          : "bg-[#fff1c9] text-[#1f1f1f]"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#1f1f1f] shadow-sm transition hover:bg-[#f2f2f2]">
                      Reagendar
                    </button>
                    <button className="rounded-xl border border-[#d4af37] px-4 py-2 text-sm font-semibold text-[#1f1f1f] transition hover:bg-[#fff6dc]">
                      Cancelar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#1f1f1f]">
                Serviços disponíveis
              </h2>
              <p className="mt-1 text-sm text-[#666]">
                Veja valores e duração dos atendimentos.
              </p>
            </div>

            <div className="space-y-4 max-h-[560px] overflow-y-auto pr-1">
              {todosServicos.map((servico) => (
                <div
                  key={servico.nome}
                  className="flex items-center justify-between rounded-[24px] bg-[#f8f6f0] p-5"
                >
                  <div>
                    <p className="text-base font-semibold text-[#1f1f1f]">
                      {servico.nome}
                    </p>
                    <p className="mt-1 text-sm text-[#666]">
                      {servico.preco} • {servico.tempo}
                    </p>
                  </div>

                  <button className="rounded-xl bg-[#40916c] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90">
                    Selecionar
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}