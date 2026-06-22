"use client";

import { useEffect, useState } from "react";

type Usuario = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  tipo: string;
  ativo?: boolean;
  createdAt?: string;
};

export default function PerfilPage() {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  useEffect(() => {
    const usuarioStorage = localStorage.getItem("usuario");

    if (!usuarioStorage) {
      setErro("Usuário não encontrado. Faça login novamente.");
      setCarregando(false);
      return;
    }

    const usuarioLogado = JSON.parse(usuarioStorage) as Usuario;

    async function buscarUsuario() {
      try {
        const response = await fetch(`/api/usuarios/${usuarioLogado.id}`);
        const data = await response.json();

        if (!response.ok) {
          setErro(data.message || "Erro ao carregar perfil.");
          return;
        }

        setUsuario(data);
        setNome(data.nome);
        setEmail(data.email);
        setTelefone(data.telefone);
      } catch {
        setErro("Não foi possível carregar os dados do perfil.");
      } finally {
        setCarregando(false);
      }
    }

    buscarUsuario();
  }, []);

  async function salvarAlteracoes() {
    setErro("");
    setSucesso("");

    if (!usuario) {
      setErro("Usuário não encontrado.");
      return;
    }

    if (!nome || !email || !telefone) {
      setErro("Nome, email e WhatsApp são obrigatórios.");
      return;
    }

    if (senha && senha.length < 6) {
      setErro("A nova senha deve ter pelo menos 6 caracteres.");
      return;
    }

    if (senha !== confirmarSenha) {
      setErro("As senhas não conferem.");
      return;
    }

    try {
      setSalvando(true);

      const response = await fetch(`/api/usuarios/${usuario.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          email,
          telefone,
          senha: senha || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErro(data.message || "Erro ao atualizar perfil.");
        return;
      }

      localStorage.setItem("usuario", JSON.stringify(data.usuario));
      setUsuario(data.usuario);
      setSenha("");
      setConfirmarSenha("");
      setSucesso("Informações atualizadas com sucesso.");

      setTimeout(() => {
        setSucesso("");
      }, 3000);
    } catch {
      setErro("Não foi possível atualizar o perfil.");
    } finally {
      setSalvando(false);
    }
  }

  if (carregando) {
    return (
      <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <p className="text-[#666]">Carregando perfil...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {erro && (
        <div className="rounded-2xl bg-red-50 px-5 py-4 font-semibold text-red-600">
          {erro}
        </div>
      )}

      {sucesso && (
        <div className="rounded-2xl bg-[#b7e4c7] px-5 py-4 font-semibold text-[#1f1f1f]">
          {sucesso}
        </div>
      )}

      <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <p className="text-sm font-medium text-[#40916c]">Dados pessoais</p>
        <h1 className="mt-2 text-3xl font-bold text-[#1f1f1f]">Meu perfil</h1>
        <p className="mt-2 text-[#666]">
          Atualize suas informações pessoais e dados de acesso.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <section className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#b7e4c7] text-3xl font-bold text-[#1f1f1f]">
              {nome ? nome.charAt(0).toUpperCase() : "U"}
            </div>

            <h2 className="mt-5 text-2xl font-bold text-[#1f1f1f]">
              {nome || "Cliente"}
            </h2>

            <p className="mt-1 text-sm text-[#666]">Cliente AgendaNuza</p>

            <div className="mt-6 w-full rounded-[24px] bg-[#f8f6f0] p-4 text-left">
              <p className="text-sm text-[#666]">Status da conta</p>
              <p className="mt-1 font-semibold text-[#1f1f1f]">
                {usuario?.ativo === false ? "Inativa" : "Ativa"}
              </p>
            </div>

            <div className="mt-4 w-full rounded-[24px] bg-[#f8f6f0] p-4 text-left">
              <p className="text-sm text-[#666]">Tipo de usuário</p>
              <p className="mt-1 font-semibold text-[#1f1f1f]">
                {usuario?.tipo}
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <h2 className="text-2xl font-bold text-[#1f1f1f]">
            Informações pessoais
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-[#555]">
                Nome completo
              </label>
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3 outline-none focus:border-[#40916c]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#555]">
                WhatsApp
              </label>
              <input
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                className="w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3 outline-none focus:border-[#40916c]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-[#555]">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3 outline-none focus:border-[#40916c]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#555]">
                Nova senha
              </label>
              <input
                type="password"
                placeholder="Digite uma nova senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3 outline-none focus:border-[#40916c]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#555]">
                Confirmar nova senha
              </label>
              <input
                type="password"
                placeholder="Confirme a nova senha"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                className="w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3 outline-none focus:border-[#40916c]"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={salvarAlteracoes}
              disabled={salvando}
              className="rounded-2xl bg-[#40916c] px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {salvando ? "Salvando..." : "Salvar alterações"}
            </button>

            <button
              onClick={() => {
                if (!usuario) return;

                setNome(usuario.nome);
                setEmail(usuario.email);
                setTelefone(usuario.telefone);
                setSenha("");
                setConfirmarSenha("");
                setErro("");
                setSucesso("");
              }}
              className="rounded-2xl border border-[#d4af37] px-6 py-3 font-semibold text-[#1f1f1f] transition hover:bg-[#fff6dc]"
            >
              Cancelar
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}