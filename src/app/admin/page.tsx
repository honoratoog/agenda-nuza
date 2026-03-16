export default function Admin() {
  const agendamentos = [
    {
      horario: "09:00",
      cliente: "Marilza Pereira",
      servico: "Corte feminino",
      status: "Confirmado",
    },
    {
      horario: "10:30",
      cliente: "Marilda Honorato",
      servico: "Escova",
      status: "Em breve",
    },
    {
      horario: "14:00",
      cliente: "Tiazinha da rua",
      servico: "Hidratação",
      status: "Confirmado",
    },
  ];

  const servicos = [
    { nome: "Corte feminino", preco: "R$ 55,00", tempo: "40 min" },
    { nome: "Escova", preco: "R$ 45,00", tempo: "30 min" },
    { nome: "Hidratação", preco: "R$ 70,00", tempo: "60 min" },
    { nome: "Manicure", preco: "R$ 35,00", tempo: "45 min" },
  ];

  return (
    <main className="min-h-screen bg-[#f8f6f0] px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium text-[#40916c]">Painel administrativo</p>
            <h1 className="text-4xl font-bold text-[#1f1f1f]">AgendaNuza</h1>
            <p className="mt-2 text-[#666]">
              Gerencie horários, clientes e serviços do salão.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#b7e4c7] text-lg font-bold text-[#1f1f1f]">
              D
            </div>
            <div>
              <p className="font-semibold text-[#1f1f1f]">Danuza</p>
              <p className="text-sm text-[#777]">Administradora</p>
            </div>
          </div>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <p className="text-sm text-[#666]">Agendamentos hoje</p>
            <h2 className="mt-2 text-4xl font-bold text-[#1f1f1f]">12</h2>
          </div>

          <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <p className="text-sm text-[#666]">Clientes cadastrados</p>
            <h2 className="mt-2 text-4xl font-bold text-[#1f1f1f]">84</h2>
          </div>

          <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <p className="text-sm text-[#666]">Serviços ativos</p>
            <h2 className="mt-2 text-4xl font-bold text-[#1f1f1f]">8</h2>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <section className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-[#1f1f1f]">Agenda do dia</h2>
                  <p className="mt-1 text-sm text-[#666]">
                    Clientes com horário marcado hoje.
                  </p>
                </div>

                <button className="rounded-2xl bg-[#40916c] px-5 py-3 font-semibold text-white transition hover:opacity-90">
                  Novo agendamento
                </button>
              </div>

              <div className="space-y-4">
                {agendamentos.map((item) => (
                  <div
                    key={`${item.horario}-${item.cliente}`}
                    className="rounded-[24px] bg-[#f8f6f0] p-5"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div>
                        <p className="text-sm font-medium text-[#40916c]">{item.horario}</p>
                        <h3 className="mt-1 text-lg font-semibold text-[#1f1f1f]">
                          {item.cliente}
                        </h3>
                        <p className="text-sm text-[#666]">{item.servico}</p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`rounded-full px-3 py-1 text-sm font-medium ${
                            item.status === "Confirmado"
                              ? "bg-[#b7e4c7] text-[#1f1f1f]"
                              : "bg-[#fff1c9] text-[#1f1f1f]"
                          }`}
                        >
                          {item.status}
                        </span>

                        <button className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#1f1f1f] shadow-sm transition hover:bg-[#f2f2f2]">
                          Ver detalhes
                        </button>

                        <button className="rounded-xl bg-[#40916c] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90">
                          Finalizar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#1f1f1f]">Cadastrar cliente</h2>
                <p className="mt-1 text-sm text-[#666]">
                  Para atendimentos agendados presencialmente.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <input
                  placeholder="Nome do cliente"
                  className="w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3 outline-none focus:border-[#40916c]"
                />
                <input
                  placeholder="WhatsApp"
                  className="w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3 outline-none focus:border-[#40916c]"
                />
                <input
                  placeholder="Email"
                  className="w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3 outline-none focus:border-[#40916c] md:col-span-2"
                />
              </div>

              <button className="mt-5 rounded-2xl bg-[#40916c] px-6 py-3 font-semibold text-white transition hover:opacity-90">
                Cadastrar cliente
              </button>
            </section>
          </div>

          <div className="space-y-6">
            <section className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-[#1f1f1f]">Serviços</h2>
                  <p className="mt-1 text-sm text-[#666]">
                    Gerencie os serviços disponíveis.
                  </p>
                </div>

                <button className="rounded-xl border border-[#d4af37] px-4 py-2 text-sm font-semibold text-[#1f1f1f] transition hover:bg-[#fff6dc]">
                  Novo
                </button>
              </div>

              <div className="space-y-4">
                {servicos.map((servico) => (
                  <div
                    key={servico.nome}
                    className="flex items-center justify-between rounded-[24px] bg-[#f8f6f0] p-5"
                  >
                    <div>
                      <p className="text-lg font-semibold text-[#1f1f1f]">
                        {servico.nome}
                      </p>
                      <p className="mt-1 text-sm text-[#666]">
                        {servico.preco} • {servico.tempo}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <button className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#1f1f1f] shadow-sm transition hover:bg-[#f2f2f2]">
                        Editar
                      </button>
                      <button className="rounded-xl border border-[#d4af37] px-4 py-2 text-sm font-semibold text-[#1f1f1f] transition hover:bg-[#fff6dc]">
                        Ocultar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[32px] bg-gradient-to-r from-[#40916c] to-[#74c69d] p-8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <p className="text-sm uppercase tracking-wide text-white/80">
                Resumo do dia
              </p>
              <h2 className="mt-2 text-3xl font-bold">Atendimento em alta</h2>
              <p className="mt-3 text-white/90">
                Hoje o salão está com ótima ocupação e os horários da tarde estão quase completos.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/20 p-4 backdrop-blur-sm">
                  <p className="text-sm text-white/80">Horários ocupados</p>
                  <p className="mt-1 text-2xl font-bold">78%</p>
                </div>

                <div className="rounded-2xl bg-white/20 p-4 backdrop-blur-sm">
                  <p className="text-sm text-white/80">Serviço destaque</p>
                  <p className="mt-1 text-2xl font-bold">Escova</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}