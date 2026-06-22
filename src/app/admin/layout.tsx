"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type UsuarioStorage = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  tipo: string;
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [usuario, setUsuario] = useState<UsuarioStorage | null>(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const usuarioStorage = localStorage.getItem("usuario");

    if (!usuarioStorage) {
      router.push("/login");
      return;
    }

    const usuarioLogado = JSON.parse(usuarioStorage) as UsuarioStorage;

    if (usuarioLogado.tipo !== "ADMIN") {
      router.push("/cliente");
      return;
    }

    setUsuario(usuarioLogado);
    setCarregando(false);
  }, [router]);

  function sair() {
    localStorage.removeItem("usuario");
    router.push("/");
  }

  if (carregando) {
    return (
      <main className="min-h-screen bg-[#f8f6f0] p-8">
        <p className="text-[#666]">Verificando acesso administrativo...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f6f0]">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="bg-white p-8">
          <p className="text-sm font-medium text-[#40916c]">Painel administrativo</p>
          <h1 className="mt-2 text-3xl font-bold text-[#1f1f1f]">AgendaNuza</h1>
          <p className="mt-3 text-[#666]">Organize agenda, clientes e serviços do salão.</p>

          <nav className="mt-12 space-y-3">
            <Link href="/admin" className="block rounded-2xl px-5 py-3 text-[#1f1f1f] hover:bg-[#f8f6f0]">
              Início
            </Link>
            <Link href="/admin/agenda" className="block rounded-2xl px-5 py-3 text-[#1f1f1f] hover:bg-[#f8f6f0]">
              Agenda
            </Link>
            <Link href="/admin/clientes" className="block rounded-2xl px-5 py-3 text-[#1f1f1f] hover:bg-[#f8f6f0]">
              Clientes
            </Link>
            <Link href="/admin/servicos" className="block rounded-2xl px-5 py-3 text-[#1f1f1f] hover:bg-[#f8f6f0]">
              Serviços
            </Link>
            <button
              onClick={sair}
              className="block w-full rounded-2xl px-5 py-3 text-left text-red-600 hover:bg-red-50"
            >
              Sair
            </button>
          </nav>
        </aside>

        <section className="p-8">
          <div className="mb-8 flex justify-end">
            <div className="rounded-3xl bg-white px-6 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              <p className="font-bold text-[#1f1f1f]">{usuario?.nome}</p>
              <p className="text-sm text-[#666]">Administradora</p>
            </div>
          </div>

          {children}
        </section>
      </div>
    </main>
  );
}