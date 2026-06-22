"use client";

import { useEffect, useMemo, useState } from "react";

type Servico = {
  id: number;
  nome: string;
  descricao: string | null;
  preco: string;
  duracaoMin: number;
  categoria: "UNHAS" | "DEPILACAO" | "CABELO" | "COMBINACOES";
};

type Agendamento = {
  id: number;
  data: string;
  horaInicio: string;
  horaFim: string;
  status: "PENDENTE" | "CONFIRMADO" | "FINALIZADO" | "CANCELADO";
  servico: Servico;
};

type UsuarioStorage = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  tipo: string;
};

export default function Cliente() {
  const horarios = ["09:00", "09:30", "10:00", "11:00", "14:00", "15:30"];

  const [servicos, setServicos] = useState<Servico[]>([]);
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
  const [servicoSelecionadoId, setServicoSelecionadoId] = useState<number | null>(null);
  const [dataSelecionada, setDataSelecionada] = useState("");
  const [horarioSelecionado, setHorarioSelecionado] = useState("");
  const [horariosOcupados, setHorariosOcupados] = useState<string[]>([]);
  const [agendamentoConfirmado, setAgendamentoConfirmado] = useState(false);
  const [sucessoAgendamento, setSucessoAgendamento] = useState("");
  const [erroAgendamento, setErroAgendamento] = useState("");
  const [carregando, setCarregando] = useState(true);

  const [agendamentoReagendando, setAgendamentoReagendando] = useState<number | null>(null);
  const [novaData, setNovaData] = useState("");
  const [novaHora, setNovaHora] = useState("");

  async function carregarAgendamentos(usuarioId: number) {
    const response = await fetch(`/api/agendamentos?usuarioId=${usuarioId}`);
    const data = await response.json();
    setAgendamentos(data);
  }

  useEffect(() => {
    async function iniciarTela() {
      try {
        const response = await fetch("/api/servicos");
        const data = await response.json();

        setServicos(data);

        if (data.length > 0) {
          setCategoriaSelecionada(data[0].categoria);
          setServicoSelecionadoId(data[0].id);
        }

        const usuarioStorage = localStorage.getItem("usuario");

        if (usuarioStorage) {
          const usuario = JSON.parse(usuarioStorage) as UsuarioStorage;
          await carregarAgendamentos(usuario.id);
        }
      } finally {
        setCarregando(false);
      }
    }

    iniciarTela();
  }, []);

  useEffect(() => {
    async function carregarHorariosOcupados() {
      if (!dataSelecionada) {
        setHorariosOcupados([]);
        return;
      }

      const response = await fetch(
        `/api/agendamentos/ocupados?data=${dataSelecionada}`
      );

      const data = await response.json();
      setHorariosOcupados(data);
    }

    carregarHorariosOcupados();
  }, [dataSelecionada]);

  const categorias = useMemo(() => {
    return Array.from(new Set(servicos.map((servico) => servico.categoria)));
  }, [servicos]);

  const servicosDaCategoria = useMemo(() => {
    return servicos.filter((servico) => servico.categoria === categoriaSelecionada);
  }, [servicos, categoriaSelecionada]);

  const resumoServico = useMemo(() => {
    return servicos.find((servico) => servico.id === servicoSelecionadoId) || servicos[0];
  }, [servicos, servicoSelecionadoId]);

  const agendamentosAtivos = agendamentos.filter(
    (item) => item.status === "CONFIRMADO" || item.status === "PENDENTE"
  );

  const proximoAgendamento = agendamentosAtivos[0];

  function formatarCategoria(categoria: string) {
    const nomes: Record<string, string> = {
      UNHAS: "Unhas",
      DEPILACAO: "Depilação",
      CABELO: "Cabelo",
      COMBINACOES: "Combinações",
    };

    return nomes[categoria] || categoria;
  }

  function formatarPreco(preco: string) {
    return Number(preco).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function formatarDuracao(minutos: number) {
    if (minutos < 60) return `${minutos} min`;

    const horas = Math.floor(minutos / 60);
    const resto = minutos % 60;

    if (resto === 0) return `${horas}h`;

    return `${horas}h${resto}`;
  }

  function formatarData(data: string) {
    return new Date(data).toLocaleDateString("pt-BR", {
      timeZone: "UTC",
    });
  }

  function formatarHora(data: string) {
    return new Date(data).toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function formatarStatus(status: string) {
    const nomes: Record<string, string> = {
      PENDENTE: "Pendente",
      CONFIRMADO: "Agendado",
      FINALIZADO: "Finalizado",
      CANCELADO: "Cancelado",
    };

    return nomes[status] || status;
  }

  function statusClasse(status: string) {
    if (status === "CONFIRMADO") return "bg-[#b7e4c7] text-[#1f1f1f]";
    if (status === "FINALIZADO") return "bg-[#d8f3dc] text-[#1f1f1f]";
    if (status === "CANCELADO") return "bg-red-100 text-red-700";

    return "bg-[#fff1c9] text-[#1f1f1f]";
  }

  function mostrarSucesso(mensagem: string) {
    setSucessoAgendamento(mensagem);

    setTimeout(() => {
      setSucessoAgendamento("");
    }, 3000);
  }

  async function confirmarAgendamento() {
    setErroAgendamento("");
    setSucessoAgendamento("");
    setAgendamentoConfirmado(false);

    const usuarioStorage = localStorage.getItem("usuario");

    if (!usuarioStorage) {
      setErroAgendamento("Faça login novamente para agendar.");
      return;
    }

    if (!servicoSelecionadoId || !dataSelecionada || !horarioSelecionado) {
      setErroAgendamento("Selecione serviço, data e horário.");
      return;
    }

    const usuario = JSON.parse(usuarioStorage) as UsuarioStorage;

    const response = await fetch("/api/agendamentos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usuarioId: usuario.id,
        servicoId: servicoSelecionadoId,
        data: dataSelecionada,
        hora: horarioSelecionado,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      setErroAgendamento(data.message || "Erro ao confirmar agendamento.");
      return;
    }

    setAgendamentoConfirmado(true);
    setHorarioSelecionado("");
    await carregarAgendamentos(usuario.id);

    setTimeout(() => {
      setAgendamentoConfirmado(false);
    }, 3000);
  }

  async function cancelarAgendamento(agendamentoId: number) {
    setErroAgendamento("");
    setSucessoAgendamento("");

    const confirmar = window.confirm(
      "Tem certeza que deseja cancelar este agendamento?"
    );

    if (!confirmar) return;

    const usuarioStorage = localStorage.getItem("usuario");

    if (!usuarioStorage) {
      setErroAgendamento("Faça login novamente.");
      return;
    }

    const response = await fetch(`/api/agendamentos/${agendamentoId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        acao: "CANCELAR",
      }),
    });

    if (!response.ok) {
      setErroAgendamento("Erro ao cancelar agendamento.");
      return;
    }

    const usuario = JSON.parse(usuarioStorage) as UsuarioStorage;
    await carregarAgendamentos(usuario.id);
    mostrarSucesso("Agendamento cancelado com sucesso.");
  }

  async function reagendarAgendamento(agendamentoId: number) {
    setErroAgendamento("");
    setSucessoAgendamento("");

    const usuarioStorage = localStorage.getItem("usuario");

    if (!usuarioStorage) {
      setErroAgendamento("Faça login novamente.");
      return;
    }

    if (!novaData || !novaHora) {
      setErroAgendamento("Informe a nova data e horário.");
      return;
    }

    const response = await fetch(`/api/agendamentos/${agendamentoId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        acao: "REAGENDAR",
        data: novaData,
        hora: novaHora,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      setErroAgendamento(data.message || "Erro ao reagendar.");
      return;
    }

    const usuario = JSON.parse(usuarioStorage) as UsuarioStorage;

    setAgendamentoReagendando(null);
    setNovaData("");
    setNovaHora("");

    await carregarAgendamentos(usuario.id);
    mostrarSucesso("Agendamento reagendado com sucesso.");
  }

  if (carregando) {
    return (
      <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <p className="text-[#666]">Carregando serviços...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {agendamentoConfirmado && (
        <div className="rounded-2xl bg-[#b7e4c7] px-5 py-4 font-semibold text-[#1f1f1f]">
          Agendamento confirmado com sucesso.
        </div>
      )}

      {sucessoAgendamento && (
        <div className="rounded-2xl bg-[#b7e4c7] px-5 py-4 font-semibold text-[#1f1f1f]">
          {sucessoAgendamento}
        </div>
      )}

      {erroAgendamento && (
        <div className="rounded-2xl bg-red-50 px-5 py-4 font-semibold text-red-600">
          {erroAgendamento}
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Próximo atendimento</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">
            {proximoAgendamento ? formatarData(proximoAgendamento.data) : "--/--"}
          </h2>
          <p className="mt-2 text-sm text-[#777]">
            {proximoAgendamento
              ? `${proximoAgendamento.servico.nome} às ${formatarHora(proximoAgendamento.horaInicio)}`
              : "Nenhum horário agendado"}
          </p>
        </div>

        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Agendamentos</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">
            {agendamentosAtivos.length}
          </h2>
          <p className="mt-2 text-sm text-[#777]">ativos no sistema</p>
        </div>

        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Serviços disponíveis</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">{servicos.length}</h2>
          <p className="mt-2 text-sm text-[#777]">prontos para agendar</p>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#1f1f1f]">Agendar atendimento</h2>
              <p className="mt-1 text-sm text-[#666]">Monte seu próximo horário em poucos passos.</p>
            </div>

            <div className="rounded-full bg-[#fff4d6] px-4 py-2 text-sm font-semibold text-[#8a6a00]">
              Atendimento online
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-medium text-[#555]">Categoria</label>
              <select
                value={categoriaSelecionada}
                onChange={(e) => {
                  const categoria = e.target.value;
                  const primeiroServico = servicos.find((servico) => servico.categoria === categoria);

                  setCategoriaSelecionada(categoria);
                  setServicoSelecionadoId(primeiroServico?.id || null);
                }}
                className="w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3 outline-none focus:border-[#40916c]"
              >
                {categorias.map((categoria) => (
                  <option key={categoria} value={categoria}>
                    {formatarCategoria(categoria)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#555]">Serviço</label>
              <select
                value={servicoSelecionadoId || ""}
                onChange={(e) => setServicoSelecionadoId(Number(e.target.value))}
                className="w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3 outline-none focus:border-[#40916c]"
              >
                {servicosDaCategoria.map((servico) => (
                  <option key={servico.id} value={servico.id}>
                    {servico.nome}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#555]">Data</label>
              <input
                type="date"
                value={dataSelecionada}
                onChange={(e) => {
                  setDataSelecionada(e.target.value);
                  setHorarioSelecionado("");
                }}
                className="w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3 outline-none focus:border-[#40916c]"
              />
            </div>
          </div>

          <div className="mt-8">
            <p className="mb-4 text-sm font-semibold text-[#555]">Horários disponíveis</p>

            <div className="flex flex-wrap gap-3">
              {horarios.map((hora) => {
                const ocupado = horariosOcupados.includes(hora);

                return (
                  <button
                    key={hora}
                    onClick={() => {
                      if (!ocupado) {
                        setHorarioSelecionado(hora);
                      }
                    }}
                    disabled={ocupado}
                    className={`rounded-2xl border px-5 py-3 font-semibold transition ${
                      ocupado
                        ? "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400"
                        : horarioSelecionado === hora
                        ? "border-[#40916c] bg-[#40916c] text-white"
                        : "border-[#d4af37] bg-white text-[#1f1f1f] hover:bg-[#fff6dc]"
                    }`}
                  >
                    {hora}
                  </button>
                );
              })}
            </div>
          </div>

          {resumoServico && (
            <div className="mt-8 rounded-[28px] bg-gradient-to-r from-[#40916c] to-[#74c69d] p-6 text-white">
              <p className="text-sm uppercase tracking-wide text-white/80">Resumo</p>
              <h3 className="mt-2 text-2xl font-bold">{resumoServico.nome}</h3>
              <p className="mt-2 text-white/90">
                Duração média: {formatarDuracao(resumoServico.duracaoMin)}
              </p>
              <p className="text-white/90">Valor: {formatarPreco(resumoServico.preco)}</p>

              <button
                onClick={confirmarAgendamento}
                className="mt-5 rounded-2xl bg-white px-6 py-3 font-semibold text-[#1f1f1f] transition hover:bg-[#f2f2f2]"
              >
                Confirmar agendamento
              </button>
            </div>
          )}
        </section>

        <div className="space-y-6">
          <section className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#1f1f1f]">Meus agendamentos</h2>
              <p className="mt-1 text-sm text-[#666]">Acompanhe seus próximos horários.</p>
            </div>

            <div className="space-y-4">
              {agendamentos.length === 0 && (
                <div className="rounded-[24px] bg-[#f8f6f0] p-5">
                  <p className="text-sm text-[#666]">Nenhum agendamento encontrado.</p>
                </div>
              )}

              {agendamentos.map((item) => (
                <div key={item.id} className="rounded-[24px] bg-[#f8f6f0] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-lg font-semibold text-[#1f1f1f]">{item.servico.nome}</p>
                      <p className="mt-1 text-sm text-[#666]">
                        {formatarData(item.data)} às {formatarHora(item.horaInicio)}
                      </p>
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-sm font-medium ${statusClasse(item.status)}`}
                    >
                      {formatarStatus(item.status)}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <button
                      onClick={() => {
                        setAgendamentoReagendando(item.id);
                        setNovaData("");
                        setNovaHora("");
                      }}
                      disabled={item.status === "CANCELADO" || item.status === "FINALIZADO"}
                      className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#1f1f1f] shadow-sm transition hover:bg-[#f2f2f2] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Reagendar
                    </button>

                    <button
                      onClick={() => cancelarAgendamento(item.id)}
                      disabled={item.status === "CANCELADO" || item.status === "FINALIZADO"}
                      className="rounded-xl border border-[#d4af37] px-4 py-2 text-sm font-semibold text-[#1f1f1f] transition hover:bg-[#fff6dc] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Cancelar
                    </button>
                  </div>

                  {agendamentoReagendando === item.id && (
                    <div className="mt-4 rounded-2xl bg-white p-4">
                      <div className="grid gap-3 md:grid-cols-2">
                        <input
                          type="date"
                          value={novaData}
                          onChange={(e) => setNovaData(e.target.value)}
                          className="rounded-xl border border-[#d9d9d9] px-4 py-3 outline-none focus:border-[#40916c]"
                        />

                        <select
                          value={novaHora}
                          onChange={(e) => setNovaHora(e.target.value)}
                          className="rounded-xl border border-[#d9d9d9] px-4 py-3 outline-none focus:border-[#40916c]"
                        >
                          <option value="">Selecione um horário</option>
                          {horarios.map((hora) => (
                            <option key={hora} value={hora}>
                              {hora}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="mt-3 flex gap-2">
                        <button
                          onClick={() => reagendarAgendamento(item.id)}
                          className="rounded-xl bg-[#40916c] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                        >
                          Confirmar reagendamento
                        </button>

                        <button
                          onClick={() => {
                            setAgendamentoReagendando(null);
                            setNovaData("");
                            setNovaHora("");
                          }}
                          className="rounded-xl border border-[#d4af37] px-4 py-2 text-sm font-semibold text-[#1f1f1f] transition hover:bg-[#fff6dc]"
                        >
                          Fechar
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#1f1f1f]">Serviços disponíveis</h2>
              <p className="mt-1 text-sm text-[#666]">Veja valores e duração dos atendimentos.</p>
            </div>

            <div className="max-h-[560px] space-y-4 overflow-y-auto pr-1">
              {servicos.map((servico) => (
                <div
                  key={servico.id}
                  className="flex items-center justify-between rounded-[24px] bg-[#f8f6f0] p-5"
                >
                  <div>
                    <p className="text-base font-semibold text-[#1f1f1f]">{servico.nome}</p>
                    <p className="mt-1 text-sm text-[#666]">
                      {formatarPreco(servico.preco)} • {formatarDuracao(servico.duracaoMin)}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setCategoriaSelecionada(servico.categoria);
                      setServicoSelecionadoId(servico.id);
                    }}
                    className="rounded-xl bg-[#40916c] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                  >
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