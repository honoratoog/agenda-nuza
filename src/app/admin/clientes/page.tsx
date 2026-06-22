"use client";

import { useEffect, useState } from "react";

type Cliente = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  ativo: boolean;
  createdAt: string;
  agendamentos: {
    id: number;
    status: string;
  }[];
};

export default function AdminClientesPage() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    carregarClientes();
  }, []);

  async function carregarClientes() {
    const response = await fetch("/api/admin/clientes");
    const data = await response.json();

    setClientes(data);
    setCarregando(false);
  }

  function formatarData(data: string) {
    return new Date(data).toLocaleDateString("pt-BR", {
      timeZone: "UTC",
    });
  }

  const totalClientes = clientes.length;
  const clientesAtivos = clientes.filter((cliente) => cliente.ativo).length;
  const totalAgendamentos = clientes.reduce(
    (total, cliente) => total + cliente.agendamentos.length,
    0
  );

  if (carregando) {
    return (
      <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <p className="text-[#666]">Carregando clientes...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <p className="text-sm font-medium text-[#40916c]">Cadastro de clientes</p>
        <h1 className="mt-2 text-3xl font-bold text-[#1f1f1f]">Clientes</h1>
        <p className="mt-2 text-[#666]">
          Visualize os clientes cadastrados no sistema e acompanhe seus agendamentos.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Clientes cadastrados</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">{totalClientes}</h2>
        </div>

        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Clientes ativos</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">{clientesAtivos}</h2>
        </div>

        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Agendamentos vinculados</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">{totalAgendamentos}</h2>
        </div>
      </div>

      <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#1f1f1f]">Lista de clientes</h2>
            <p className="mt-1 text-sm text-[#666]">
              Dados carregados diretamente do banco.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {clientes.length === 0 && (
            <div className="rounded-[24px] bg-[#f8f6f0] p-5">
              <p className="text-sm text-[#666]">Nenhum cliente encontrado.</p>
            </div>
          )}

          {clientes.map((cliente) => (
            <div
              key={cliente.id}
              className="rounded-[24px] bg-[#f8f6f0] p-5"
            >
              <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                <div>
                  <p className="text-lg font-semibold text-[#1f1f1f]">
                    {cliente.nome}
                  </p>
                  <p className="mt-1 text-sm text-[#666]">
                    {cliente.email}
                  </p>
                  <p className="mt-1 text-sm text-[#777]">
                    WhatsApp: {cliente.telefone}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-white px-3 py-1 text-sm font-medium text-[#666]">
                    Desde {formatarData(cliente.createdAt)}
                  </span>

                  <span className="rounded-full bg-white px-3 py-1 text-sm font-medium text-[#666]">
                    {cliente.agendamentos.length} agendamento(s)
                  </span>

                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      cliente.ativo
                        ? "bg-[#b7e4c7] text-[#1f1f1f]"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {cliente.ativo ? "Ativo" : "Inativo"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}