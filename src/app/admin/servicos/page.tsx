"use client";

import { useEffect, useState } from "react";

type Categoria = "UNHAS" | "DEPILACAO" | "CABELO" | "COMBINACOES";

type Servico = {
  id: number;
  nome: string;
  descricao: string | null;
  preco: string;
  duracaoMin: number;
  categoria: Categoria;
  ativo: boolean;
};

export default function AdminServicosPage() {
  const [servicos, setServicos] = useState<Servico[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [formAberto, setFormAberto] = useState(false);
  const [editandoId, setEditandoId] = useState<number | null>(null);
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [duracaoMin, setDuracaoMin] = useState("");
  const [categoria, setCategoria] = useState<Categoria>("CABELO");

  useEffect(() => {
    carregarServicos();
  }, []);

  async function carregarServicos() {
    const response = await fetch("/api/servicos");
    const data = await response.json();
    setServicos(data);
    setCarregando(false);
  }

  function limparFormulario() {
    setNome("");
    setDescricao("");
    setPreco("");
    setDuracaoMin("");
    setCategoria("CABELO");
    setEditandoId(null);
    setFormAberto(false);
  }

  function abrirEdicao(servico: Servico) {
    setFormAberto(true);
    setEditandoId(servico.id);
    setNome(servico.nome);
    setDescricao(servico.descricao || "");
    setPreco(String(servico.preco));
    setDuracaoMin(String(servico.duracaoMin));
    setCategoria(servico.categoria);
  }

  async function salvarServico() {
    setErro("");
    setMensagem("");

    if (!nome || !preco || !duracaoMin || !categoria) {
      setErro("Preencha nome, preço, duração e categoria.");
      return;
    }

    const url = editandoId ? `/api/servicos/${editandoId}` : "/api/servicos";
    const method = editandoId ? "PATCH" : "POST";

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome,
        descricao,
        preco,
        duracaoMin,
        categoria,
      }),
    });

    if (!response.ok) {
      setErro(editandoId ? "Erro ao atualizar serviço." : "Erro ao criar serviço.");
      return;
    }

    await carregarServicos();
    limparFormulario();
    setMensagem(editandoId ? "Serviço atualizado com sucesso." : "Serviço criado com sucesso.");

    setTimeout(() => setMensagem(""), 3000);
  }

  async function alternarStatus(servico: Servico) {
    setErro("");
    setMensagem("");

    const response = await fetch(`/api/servicos/${servico.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ativo: !servico.ativo,
      }),
    });

    if (!response.ok) {
      setErro("Erro ao alterar status do serviço.");
      return;
    }

    await carregarServicos();
    setMensagem(servico.ativo ? "Serviço inativado com sucesso." : "Serviço ativado com sucesso.");
    setTimeout(() => setMensagem(""), 3000);
  }

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

  const servicosAtivos = servicos.filter((servico) => servico.ativo).length;
  const valorMedio =
    servicos.length > 0
      ? servicos.reduce((total, servico) => total + Number(servico.preco), 0) /
        servicos.length
      : 0;

  if (carregando) {
    return (
      <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <p className="text-[#666]">Carregando serviços...</p>
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
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium text-[#40916c]">Gestão de serviços</p>
            <h1 className="mt-2 text-3xl font-bold text-[#1f1f1f]">
              Serviços cadastrados
            </h1>
            <p className="mt-2 text-[#666]">
              Crie, edite e gerencie os serviços disponíveis para agendamento.
            </p>
          </div>

          <button
            onClick={() => {
              limparFormulario();
              setFormAberto(true);
            }}
            className="rounded-2xl bg-[#40916c] px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            + Novo serviço
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Total de serviços</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">{servicos.length}</h2>
        </div>

        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Serviços ativos</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">{servicosAtivos}</h2>
        </div>

        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Valor médio</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">
            {formatarPreco(String(valorMedio))}
          </h2>
        </div>
      </div>

      {formAberto && (
        <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <h2 className="text-2xl font-bold text-[#1f1f1f]">
            {editandoId ? "Editar serviço" : "Novo serviço"}
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome do serviço"
              className="rounded-2xl border border-[#d9d9d9] px-4 py-3 outline-none focus:border-[#40916c]"
            />

            <input
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
              placeholder="Preço"
              type="number"
              className="rounded-2xl border border-[#d9d9d9] px-4 py-3 outline-none focus:border-[#40916c]"
            />

            <input
              value={duracaoMin}
              onChange={(e) => setDuracaoMin(e.target.value)}
              placeholder="Duração em minutos"
              type="number"
              className="rounded-2xl border border-[#d9d9d9] px-4 py-3 outline-none focus:border-[#40916c]"
            />

            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value as Categoria)}
              className="rounded-2xl border border-[#d9d9d9] px-4 py-3 outline-none focus:border-[#40916c]"
            >
              <option value="UNHAS">Unhas</option>
              <option value="DEPILACAO">Depilação</option>
              <option value="CABELO">Cabelo</option>
              <option value="COMBINACOES">Combinações</option>
            </select>

            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Descrição"
              className="md:col-span-2 rounded-2xl border border-[#d9d9d9] px-4 py-3 outline-none focus:border-[#40916c]"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={salvarServico}
              className="rounded-2xl bg-[#40916c] px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              {editandoId ? "Salvar alterações" : "Cadastrar serviço"}
            </button>

            <button
              onClick={limparFormulario}
              className="rounded-2xl border border-[#d4af37] px-6 py-3 font-semibold text-[#1f1f1f] transition hover:bg-[#fff6dc]"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#1f1f1f]">Lista de serviços</h2>
          <p className="mt-1 text-sm text-[#666]">
            Dados carregados diretamente da tabela de serviços.
          </p>
        </div>

        <div className="grid gap-4 xl:grid-cols-2">
          {servicos.map((servico) => (
            <div key={servico.id} className="rounded-[24px] bg-[#f8f6f0] p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-lg font-semibold text-[#1f1f1f]">{servico.nome}</p>

                  <p className="mt-1 text-sm text-[#666]">
                    {servico.descricao || "Sem descrição cadastrada."}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
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

                  <div className="mt-4 flex flex-wrap gap-2">
                    <button
                      onClick={() => abrirEdicao(servico)}
                      className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#1f1f1f] shadow-sm transition hover:bg-[#f2f2f2]"
                    >
                      Editar
                    </button>

                    <button
                      onClick={() => alternarStatus(servico)}
                      className="rounded-xl border border-[#d4af37] px-4 py-2 text-sm font-semibold text-[#1f1f1f] transition hover:bg-[#fff6dc]"
                    >
                      {servico.ativo ? "Inativar" : "Ativar"}
                    </button>
                  </div>
                </div>

                <span
                  className={`w-fit rounded-full px-3 py-1 text-sm font-medium ${
                    servico.ativo
                      ? "bg-[#b7e4c7] text-[#1f1f1f]"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {servico.ativo ? "Ativo" : "Inativo"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}