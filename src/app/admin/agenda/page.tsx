"use client";

import { useEffect, useState } from "react";

type Agendamento = {
  id: number;
  data: string;
  horaInicio: string;
  horaFim: string;
  status: "PENDENTE" | "CONFIRMADO" | "FINALIZADO" | "CANCELADO";
  servico: {
    nome: string;
    preco: string;
    duracaoMin: number;
  };
  usuario: {
    nome: string;
    email: string;
    telefone: string;
  };
};

export default function AgendaAdminPage() {
  const [agenda, setAgenda] = useState<Agendamento[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    carregarAgenda();
  }, []);

  async function carregarAgenda() {
    const response = await fetch("/api/agendamentos");
    const data = await response.json();

    setAgenda(data);
    setCarregando(false);
  }

  async function finalizarAgendamento(id: number) {
  await fetch(`/api/agendamentos/${id}/cancelar`, {
    method: "PATCH",
  });

    carregarAgenda();
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

  function statusStyle(status: string) {
    if (status === "CONFIRMADO") return "bg-[#b7e4c7] text-[#1f1f1f]";
    if (status === "FINALIZADO") return "bg-[#d8f3dc] text-[#1f1f1f]";
    if (status === "CANCELADO") return "bg-red-100 text-red-700";
    return "bg-[#fff1c9] text-[#1f1f1f]";
  }

  async function cancelarAgendamento(id: number) {
  await fetch(`/api/agendamentos/${id}/cancelar`, {
    method: "PATCH",
  });

  carregarAgenda();
}

  const totalHoje = agenda.length;
  const confirmados = agenda.filter((item) => item.status === "CONFIRMADO").length;
  const pendentes = agenda.filter((item) => item.status === "PENDENTE").length;
  const finalizados = agenda.filter((item) => item.status === "FINALIZADO").length;

  if (carregando) {
    return (
      <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <p className="text-[#666]">Carregando agenda...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <p className="text-sm font-medium text-[#40916c]">Organização diária</p>
        <h1 className="mt-2 text-3xl font-bold text-[#1f1f1f]">Agenda do salão</h1>
        <p className="mt-2 text-[#666]">
          Visualize os atendimentos cadastrados pelos clientes e acompanhe o status de cada horário.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Atendimentos</p>
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
          <p className="text-sm text-[#666]">Finalizados</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">{finalizados}</h2>
        </div>
      </div>

      <div className="space-y-4">
        {agenda.length === 0 && (
          <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <p className="text-[#666]">Nenhum agendamento encontrado.</p>
          </div>
        )}

        {agenda.map((item) => (
          <div
            key={item.id}
            className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
          >
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div className="min-w-[140px]">
                <p className="text-sm font-medium text-[#40916c]">Horário</p>
                <h2 className="mt-1 text-2xl font-bold text-[#1f1f1f]">
                  {formatarHora(item.horaInicio)}
                </h2>
                <p className="text-sm text-[#666]">{formatarData(item.data)}</p>
              </div>

              <div className="flex-1">
                <p className="text-lg font-semibold text-[#1f1f1f]">
                  {item.usuario.nome}
                </p>
                <p className="mt-1 text-sm text-[#666]">
                  {item.servico.nome}
                </p>
                <p className="mt-1 text-sm text-[#777]">
                  {item.usuario.telefone} • {item.usuario.email}
                </p>

                <div className="mt-2 flex flex-wrap gap-2 text-sm text-[#666]">
                  <span className="rounded-full bg-[#f8f6f0] px-3 py-1">
                    {formatarDuracao(item.servico.duracaoMin)}
                  </span>
                  <span className="rounded-full bg-[#f8f6f0] px-3 py-1">
                    {formatarPreco(item.servico.preco)}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${statusStyle(
                    item.status
                  )}`}
                >
                  {item.status}
                </span>

                <button className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#1f1f1f] shadow-sm transition hover:bg-[#f2f2f2]">
                  Detalhes
                </button>

                <button
                  onClick={() => finalizarAgendamento(item.id)}
                  disabled={item.status === "FINALIZADO" || item.status === "CANCELADO"}
                  className="rounded-xl bg-[#40916c] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Finalizar
                </button>
                <button
  onClick={() => cancelarAgendamento(item.id)}
  disabled={
    item.status === "FINALIZADO" ||
    item.status === "CANCELADO"
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