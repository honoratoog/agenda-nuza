"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Servico = {
  id: number;
  nome: string;
  descricao: string | null;
  preco: string;
  duracaoMin: number;
  categoria: "UNHAS" | "DEPILACAO" | "CABELO" | "COMBINACOES";
  ativo: boolean;
};

export default function ClienteServicosPage() {
  const [servicos, setServicos] = useState<Servico[]>([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("TODOS");
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregarServicos() {
      const response = await fetch("/api/servicos");
      const data = await response.json();

      setServicos(data);
      setCarregando(false);
    }

    carregarServicos();
  }, []);

  const categorias = useMemo(() => {
    return ["TODOS", ...Array.from(new Set(servicos.map((item) => item.categoria)))];
  }, [servicos]);

  const servicosFiltrados = useMemo(() => {
    if (categoriaSelecionada === "TODOS") return servicos;

    return servicos.filter((item) => item.categoria === categoriaSelecionada);
  }, [servicos, categoriaSelecionada]);

  function formatarCategoria(categoria: string) {
    const nomes: Record<string, string> = {
      TODOS: "Todos",
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

  if (carregando) {
    return (
      <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <p className="text-[#666]">Carregando serviços...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <p className="text-sm font-medium text-[#40916c]">
          Catálogo de serviços
        </p>

        <h1 className="mt-2 text-3xl font-bold text-[#1f1f1f]">
          Serviços disponíveis
        </h1>

        <p className="mt-2 text-[#666]">
          Consulte os serviços cadastrados no salão, veja valores, duração média
          e escolha o melhor atendimento para você.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Total de serviços</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">
            {servicos.length}
          </h2>
        </div>

        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Categorias</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">
            {categorias.length - 1}
          </h2>
        </div>

        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Serviços ativos</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">
            {servicos.filter((item) => item.ativo).length}
          </h2>
        </div>
      </div>

      <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <div className="mb-6 flex flex-wrap gap-3">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setCategoriaSelecionada(categoria)}
              className={`rounded-2xl px-5 py-3 text-sm font-semibold transition ${
                categoriaSelecionada === categoria
                  ? "bg-[#40916c] text-white"
                  : "border border-[#d4af37] bg-white text-[#1f1f1f] hover:bg-[#fff6dc]"
              }`}
            >
              {formatarCategoria(categoria)}
            </button>
          ))}
        </div>

        <div className="grid gap-4 xl:grid-cols-2">
          {servicosFiltrados.map((servico) => (
            <div
              key={servico.id}
              className="rounded-[28px] bg-[#f8f6f0] p-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xl font-bold text-[#1f1f1f]">
                    {servico.nome}
                  </p>

                  <p className="mt-2 text-sm text-[#666]">
                    {servico.descricao || "Serviço disponível para agendamento."}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-white px-3 py-1 text-sm font-medium text-[#666]">
                      {formatarCategoria(servico.categoria)}
                    </span>

                    <span className="rounded-full bg-white px-3 py-1 text-sm font-medium text-[#666]">
                      {formatarDuracao(servico.duracaoMin)}
                    </span>

                    <span className="rounded-full bg-white px-3 py-1 text-sm font-medium text-[#666]">
                      {formatarPreco(servico.preco)}
                    </span>
                  </div>
                </div>

                <span
                  className={`w-fit rounded-full px-3 py-1 text-sm font-medium ${
                    servico.ativo
                      ? "bg-[#b7e4c7] text-[#1f1f1f]"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {servico.ativo ? "Disponível" : "Indisponível"}
                </span>
              </div>

              <Link
                href="/cliente"
                className="mt-5 inline-block rounded-2xl bg-[#40916c] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Agendar este serviço
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}