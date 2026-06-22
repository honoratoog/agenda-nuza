"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Dashboard = {
  agendamentosHoje: number;
  clientesAtivos: number;
  servicosAtivos: number;
  finalizados: number;
};

type Financeiro = {
  faturamentoTotal: number;
  faturamentoMes: number;
};

export default function AdminPage() {
  const [dashboard, setDashboard] = useState<Dashboard>({
    agendamentosHoje: 0,
    clientesAtivos: 0,
    servicosAtivos: 0,
    finalizados: 0,
  });

  const [financeiro, setFinanceiro] = useState<Financeiro>({
    faturamentoTotal: 0,
    faturamentoMes: 0,
  });

  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregarDados() {
      const dashboardResponse = await fetch("/api/admin/dashboard");
      const dashboardData = await dashboardResponse.json();

      const financeiroResponse = await fetch("/api/admin/financeiro");
      const financeiroData = await financeiroResponse.json();

      setDashboard(dashboardData);
      setFinanceiro(financeiroData);
      setCarregando(false);
    }

    carregarDados();
  }, []);

  function formatarMoeda(valor: number) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  if (carregando) {
    return (
      <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <p className="text-[#666]">Carregando painel administrativo...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Agendamentos hoje</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">
            {dashboard.agendamentosHoje}
          </h2>
        </div>

        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Clientes ativos</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">
            {dashboard.clientesAtivos}
          </h2>
        </div>

        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Serviços ativos</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">
            {dashboard.servicosAtivos}
          </h2>
        </div>

        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Finalizados</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">
            {dashboard.finalizados}
          </h2>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Faturamento total</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">
            {formatarMoeda(financeiro.faturamentoTotal)}
          </h2>
          <p className="mt-2 text-sm text-[#777]">
            soma dos atendimentos finalizados
          </p>
        </div>

        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Faturamento do mês</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">
            {formatarMoeda(financeiro.faturamentoMes)}
          </h2>
          <p className="mt-2 text-sm text-[#777]">
            somente atendimentos finalizados neste mês
          </p>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <div className="mb-6">
            <p className="text-sm font-medium text-[#40916c]">Visão geral</p>
            <h1 className="mt-1 text-2xl font-bold text-[#1f1f1f]">
              Painel administrativo
            </h1>
            <p className="mt-2 text-[#666]">
              Acompanhe o movimento real do salão e acesse as principais áreas do sistema.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/admin/agenda"
              className="group rounded-[24px] bg-[#f8f6f0] p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-[#1f1f1f] group-hover:text-[#40916c]">
                Agenda do dia
              </h3>
              <p className="mt-2 text-sm text-[#666]">
                Visualize todos os horários marcados e acompanhe os atendimentos.
              </p>
            </Link>

            <Link
              href="/admin/clientes"
              className="group rounded-[24px] bg-[#f8f6f0] p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-[#1f1f1f] group-hover:text-[#40916c]">
                Clientes
              </h3>
              <p className="mt-2 text-sm text-[#666]">
                Consulte clientes cadastrados e seus dados de contato.
              </p>
            </Link>

            <Link
              href="/admin/servicos"
              className="group rounded-[24px] bg-[#f8f6f0] p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-[#1f1f1f] group-hover:text-[#40916c]">
                Serviços
              </h3>
              <p className="mt-2 text-sm text-[#666]">
                Gerencie serviços, valores e tempo médio de atendimento.
              </p>
            </Link>

            <Link
              href="/admin/agenda"
              className="group rounded-[24px] bg-[#f8f6f0] p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-[#1f1f1f] group-hover:text-[#40916c]">
                Controle
              </h3>
              <p className="mt-2 text-sm text-[#666]">
                Finalize, acompanhe e organize os atendimentos do salão.
              </p>
            </Link>
          </div>
        </div>

        <div className="rounded-[32px] bg-gradient-to-r from-[#40916c] to-[#74c69d] p-8 text-white">
          <p className="text-sm uppercase tracking-wide text-white/80">
            Resumo financeiro
          </p>

          <h2 className="mt-2 text-2xl font-bold">Movimento do salão</h2>

          <p className="mt-3 text-white/90">
            O faturamento é calculado com base nos atendimentos marcados como finalizados.
          </p>

          <div className="mt-6 grid gap-4">
            <div className="rounded-2xl bg-white/20 p-4">
              <p className="text-sm text-white/80">Total recebido</p>
              <h3 className="mt-1 text-xl font-bold">
                {formatarMoeda(financeiro.faturamentoTotal)}
              </h3>
            </div>

            <div className="rounded-2xl bg-white/20 p-4">
              <p className="text-sm text-white/80">Receita mensal</p>
              <h3 className="mt-1 text-xl font-bold">
                {formatarMoeda(financeiro.faturamentoMes)}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}