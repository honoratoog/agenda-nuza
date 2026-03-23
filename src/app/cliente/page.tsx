export default function Cliente() {
  const horarios = ["09:00", "10:00", "11:30", "14:00", "15:30", "16:30"];

  const servicos = [
    { nome: "Corte feminino", preco: "R$ 55,00", tempo: "40 min" },
    { nome: "Escova", preco: "R$ 45,00", tempo: "30 min" },
    { nome: "Hidratação", preco: "R$ 70,00", tempo: "60 min" },
  ];

  const agendamentos = [
    { servico: "Corte feminino", data: "15/03/2026", hora: "14:00", status: "Agendado" },
    { servico: "Hidratação", data: "22/03/2026", hora: "10:00", status: "Pendente" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Próximo atendimento</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">15/03</h2>
          <p className="mt-2 text-sm text-[#777]">Corte feminino às 14:00</p>
        </div>

        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Agendamentos</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">2</h2>
          <p className="mt-2 text-sm text-[#777]">ativos no sistema</p>
        </div>

        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Serviços disponíveis</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">3</h2>
          <p className="mt-2 text-sm text-[#777]">prontos para agendar</p>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#1f1f1f]">Agendar atendimento</h2>
              <p className="mt-1 text-sm text-[#666]">
                Monte seu próximo horário em poucos passos.
              </p>
            </div>

            <div className="rounded-full bg-[#fff4d6] px-4 py-2 text-sm font-semibold text-[#8a6a00]">
              Atendimento online
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-[#555]">Serviço</label>
              <select className="w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3 outline-none focus:border-[#40916c]">
                <option>Corte feminino</option>
                <option>Escova</option>
                <option>Hidratação</option>
                <option>Manicure</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#555]">Data</label>
              <input
                type="date"
                className="w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3 outline-none focus:border-[#40916c]"
              />
            </div>
          </div>

          <div className="mt-8">
            <p className="mb-4 text-sm font-semibold text-[#555]">Horários disponíveis</p>

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
            <p className="text-sm uppercase tracking-wide text-white/80">Resumo</p>
            <h3 className="mt-2 text-2xl font-bold">Corte feminino</h3>
            <p className="mt-2 text-white/90">Duração média: 40 min</p>
            <p className="text-white/90">Valor: R$ 55,00</p>

            <button className="mt-5 rounded-2xl bg-white px-6 py-3 font-semibold text-[#1f1f1f] transition hover:bg-[#f2f2f2]">
              Confirmar agendamento
            </button>
          </div>
        </section>

        <div className="space-y-6">
          <section className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#1f1f1f]">Meus agendamentos</h2>
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
                      <p className="text-lg font-semibold text-[#1f1f1f]">{item.servico}</p>
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
              <h2 className="text-2xl font-bold text-[#1f1f1f]">Serviços disponíveis</h2>
              <p className="mt-1 text-sm text-[#666]">
                Veja valores e duração dos atendimentos.
              </p>
            </div>

            <div className="space-y-4">
              {servicos.map((servico) => (
                <div
                  key={servico.nome}
                  className="flex items-center justify-between rounded-[24px] bg-[#f8f6f0] p-5"
                >
                  <div>
                    <p className="text-lg font-semibold text-[#1f1f1f]">{servico.nome}</p>
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