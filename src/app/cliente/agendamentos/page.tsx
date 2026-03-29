export default function AgendamentosPage() {
    const agendamentos = [
      {
        servico: "Corte feminino",
        data: "15/03/2026",
        hora: "14:00",
        status: "Agendado",
        valor: "R$ 55,00",
      },
      {
        servico: "Hidratação",
        data: "22/03/2026",
        hora: "10:00",
        status: "Pendente",
        valor: "R$ 70,00",
      },
      {
        servico: "Escova",
        data: "03/03/2026",
        hora: "16:30",
        status: "Finalizado",
        valor: "R$ 45,00",
      },
    ];
  
    return (
      <div className="space-y-6">
        <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <p className="text-sm font-medium text-[#40916c]">Histórico e próximos horários</p>
          <h1 className="mt-2 text-3xl font-bold text-[#1f1f1f]">Meus agendamentos</h1>
          <p className="mt-2 text-[#666]">
            Acompanhe seus horários marcados, serviços realizados e status de atendimento.
          </p>
        </div>
  
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <p className="text-sm text-[#666]">Total agendado</p>
            <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">3</h2>
          </div>
  
          <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <p className="text-sm text-[#666]">Próximo horário</p>
            <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">15/03</h2>
          </div>
  
          <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <p className="text-sm text-[#666]">Último serviço</p>
            <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">Escova</h2>
          </div>
        </div>
  
        <div className="space-y-4">
          {agendamentos.map((item) => (
            <div
              key={`${item.servico}-${item.data}-${item.hora}`}
              className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xl font-semibold text-[#1f1f1f]">{item.servico}</p>
                  <p className="mt-1 text-sm text-[#666]">
                    {item.data} às {item.hora}
                  </p>
                  <p className="mt-1 text-sm text-[#666]">{item.valor}</p>
                </div>
  
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      item.status === "Agendado"
                        ? "bg-[#b7e4c7] text-[#1f1f1f]"
                        : item.status === "Pendente"
                        ? "bg-[#fff1c9] text-[#1f1f1f]"
                        : "bg-[#e9ecef] text-[#1f1f1f]"
                    }`}
                  >
                    {item.status}
                  </span>
  
                  <button className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#1f1f1f] shadow-sm transition hover:bg-[#f2f2f2]">
                    Ver detalhes
                  </button>
  
                  <button className="rounded-xl border border-[#d4af37] px-4 py-2 text-sm font-semibold text-[#1f1f1f] transition hover:bg-[#fff6dc]">
                    Reagendar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }