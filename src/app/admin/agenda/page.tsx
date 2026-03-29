export default function AgendaAdminPage() {
    const agenda = [
      {
        hora: "09:00",
        cliente: "Maria Silva",
        servico: "Manicure",
        duracao: "30 min",
        valor: "R$ 25,00",
        status: "Confirmado",
      },
      {
        hora: "09:30",
        cliente: "Ana Souza",
        servico: "Corte feminino sem escova",
        duracao: "30 min",
        valor: "R$ 45,00",
        status: "Em breve",
      },
      {
        hora: "10:30",
        cliente: "Juliana Costa",
        servico: "Hidratação",
        duracao: "1h",
        valor: "R$ 65,00",
        status: "Confirmado",
      },
      {
        hora: "14:00",
        cliente: "Patrícia Lima",
        servico: "Escova + prancha",
        duracao: "45 min",
        valor: "A partir de R$ 55,00",
        status: "Pendente",
      },
      {
        hora: "15:30",
        cliente: "Fernanda Alves",
        servico: "Coloração com tinta inclusa - aplicação com escova",
        duracao: "1h30",
        valor: "A partir de R$ 85,00",
        status: "Confirmado",
      },
      {
        hora: "17:00",
        cliente: "Camila Rocha",
        servico: "Pedicure",
        duracao: "30 min",
        valor: "R$ 25,00",
        status: "Pendente",
      },
    ];
  
    const totalHoje = agenda.length;
    const confirmados = agenda.filter((item) => item.status === "Confirmado").length;
    const pendentes = agenda.filter((item) => item.status === "Pendente").length;
    const faturamentoPrevisto = "R$ 300,00";
  
    return (
      <div className="space-y-6">
        <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <p className="text-sm font-medium text-[#40916c]">Organização diária</p>
          <h1 className="mt-2 text-3xl font-bold text-[#1f1f1f]">Agenda do dia</h1>
          <p className="mt-2 text-[#666]">
            Visualize todos os atendimentos marcados e acompanhe o status de cada horário.
          </p>
        </div>
  
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <p className="text-sm text-[#666]">Atendimentos hoje</p>
            <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">{totalHoje}</h2>
          </div>
  
          <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <p className="text-sm text-[#666]">Confirmados</p>
            <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">{confirmados}</h2>
          </div>
  
          <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <p className="text-sm text-[#666]">Pendentes</p>
            <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">{pendentes}</h2>
          </div>
  
          <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <p className="text-sm text-[#666]">Faturamento previsto</p>
            <h2 className="mt-2 text-2xl font-bold text-[#1f1f1f]">{faturamentoPrevisto}</h2>
          </div>
        </div>
  
        <div className="space-y-4">
          {agenda.map((item) => (
            <div
              key={`${item.hora}-${item.cliente}`}
              className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
            >
              <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                <div className="min-w-[120px]">
                  <p className="text-sm font-medium text-[#40916c]">Horário</p>
                  <h2 className="mt-1 text-2xl font-bold text-[#1f1f1f]">{item.hora}</h2>
                </div>
  
                <div className="flex-1">
                  <p className="text-lg font-semibold text-[#1f1f1f]">{item.cliente}</p>
                  <p className="mt-1 text-sm text-[#666]">{item.servico}</p>
                  <div className="mt-2 flex flex-wrap gap-2 text-sm text-[#666]">
                    <span className="rounded-full bg-[#f8f6f0] px-3 py-1">{item.duracao}</span>
                    <span className="rounded-full bg-[#f8f6f0] px-3 py-1">{item.valor}</span>
                  </div>
                </div>
  
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      item.status === "Confirmado"
                        ? "bg-[#b7e4c7] text-[#1f1f1f]"
                        : item.status === "Em breve"
                        ? "bg-[#fff1c9] text-[#1f1f1f]"
                        : "bg-[#e9ecef] text-[#1f1f1f]"
                    }`}
                  >
                    {item.status}
                  </span>
  
                  <button className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#1f1f1f] shadow-sm transition hover:bg-[#f2f2f2]">
                    Detalhes
                  </button>
  
                  <button className="rounded-xl bg-[#40916c] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90">
                    Finalizar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }