"use client";

import { useEffect, useState } from "react";

type Servico = {
  id: number;
  nome: string;
  descricao: string | null;
  preco: string;
  duracaoMin: number;
  categoria: string;
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

export default function AgendamentosPage() {
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    async function carregar() {
      const usuarioStorage = localStorage.getItem("usuario");

      if (!usuarioStorage) {
        setErro("Faça login novamente para ver seus agendamentos.");
        setCarregando(false);
        return;
      }

      const usuario = JSON.parse(usuarioStorage) as UsuarioStorage;

      const response = await fetch(`/api/agendamentos?usuarioId=${usuario.id}`);
      const data = await response.json();

      setAgendamentos(data);
      setCarregando(false);
    }

    carregar();
  }, []);

  async function carregarAgendamentos() {
    const usuarioStorage = localStorage.getItem("usuario");

    if (!usuarioStorage) return;

    const usuario = JSON.parse(usuarioStorage) as UsuarioStorage;
    const response = await fetch(`/api/agendamentos?usuarioId=${usuario.id}`);
    const data = await response.json();

    setAgendamentos(data);
  }

  async function cancelarAgendamento(id: number) {
    const confirmar = window.confirm(
      "Tem certeza que deseja cancelar este agendamento?"
    );

    if (!confirmar) return;

    const response = await fetch(`/api/agendamentos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        acao: "CANCELAR",
      }),
    });

    if (!response.ok) {
      setErro("Erro ao cancelar agendamento.");
      return;
    }

    await carregarAgendamentos();

    setMensagem("Agendamento cancelado com sucesso.");
    setTimeout(() => setMensagem(""), 3000);
  }

  function formatarData(data: string) {
    return new Date(data).toLocaleDateString("pt-BR", {
      timeZone: "UTC",
    });
  }

  function formatarDataCurta(data: string) {
    return new Date(data).toLocaleDateString("pt-BR", {
      timeZone: "UTC",
      day: "2-digit",
      month: "2-digit",
    });
  }

  function formatarHora(data: string) {
    return new Date(data).toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function formatarPreco(preco: string) {
    return Number(preco).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
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
    if (status === "PENDENTE") return "bg-[#fff1c9] text-[#1f1f1f]";
    if (status === "FINALIZADO") return "bg-[#e9ecef] text-[#1f1f1f]";
    return "bg-red-100 text-red-700";
  }

  const ativos = agendamentos.filter(
    (item) => item.status === "CONFIRMADO" || item.status === "PENDENTE"
  );

  const finalizados = agendamentos.filter(
    (item) => item.status === "FINALIZADO"
  );

  const proximoHorario = ativos[0];
  const ultimoServico = finalizados[0] || agendamentos[0];

  if (carregando) {
    return (
      <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <p className="text-[#666]">Carregando agendamentos...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {mensagem && (
        <div className="rounded-2xl bg-[#b7e4c7] px-5 py-4 font-semibold text-[#1f1f1f]">
          {mensagem}
        </div>
      )}

      {erro && (
        <div className="rounded-2xl bg-red-50 px-5 py-4 font-semibold text-red-600">
          {erro}
        </div>
      )}

      <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <p className="text-sm font-medium text-[#40916c]">
          Histórico e próximos horários
        </p>
        <h1 className="mt-2 text-3xl font-bold text-[#1f1f1f]">
          Meus agendamentos
        </h1>
        <p className="mt-2 text-[#666]">
          Acompanhe seus horários marcados, serviços realizados e status de
          atendimento.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Total agendado</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">
            {agendamentos.length}
          </h2>
        </div>

        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Próximo horário</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">
            {proximoHorario ? formatarDataCurta(proximoHorario.data) : "--/--"}
          </h2>
        </div>

        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Último serviço</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">
            {ultimoServico ? ultimoServico.servico.nome : "-"}
          </h2>
        </div>
      </div>

      <div className="space-y-4">
        {agendamentos.length === 0 && (
          <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <p className="text-[#666]">Nenhum agendamento encontrado.</p>
          </div>
        )}

        {agendamentos.map((item) => (
          <div
            key={item.id}
            className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xl font-semibold text-[#1f1f1f]">
                  {item.servico.nome}
                </p>
                <p className="mt-1 text-sm text-[#666]">
                  {formatarData(item.data)} às {formatarHora(item.horaInicio)}
                </p>
                <p className="mt-1 text-sm text-[#666]">
                  {formatarPreco(item.servico.preco)}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${statusClasse(
                    item.status
                  )}`}
                >
                  {formatarStatus(item.status)}
                </span>

                <button className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#1f1f1f] shadow-sm transition hover:bg-[#f2f2f2]">
                  Ver detalhes
                </button>

                <button
                  disabled={
                    item.status === "CANCELADO" || item.status === "FINALIZADO"
                  }
                  className="rounded-xl border border-[#d4af37] px-4 py-2 text-sm font-semibold text-[#1f1f1f] transition hover:bg-[#fff6dc] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Reagendar
                </button>

                <button
                  onClick={() => cancelarAgendamento(item.id)}
                  disabled={
                    item.status === "CANCELADO" || item.status === "FINALIZADO"
                  }
                  className="rounded-xl border border-red-300 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}