"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Usuario = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  tipo: string;
};

export default function ClienteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const [usuario, setUsuario] = useState<Usuario | null>(null);

  useEffect(() => {
    const usuarioStorage = localStorage.getItem("usuario");

    if (usuarioStorage) {
      setUsuario(JSON.parse(usuarioStorage));
    }
  }, []);

  function linkClass(href: string) {
    const ativo = pathname === href;

    return ativo
      ? "rounded-2xl bg-[#40916c] px-4 py-3 font-medium text-white transition"
      : "rounded-2xl px-4 py-3 font-medium text-[#1f1f1f] transition hover:bg-[#f3efe6]";
  }

  function sair() {
    localStorage.removeItem("usuario");
    router.push("/login");
  }

  const nome = usuario?.nome || "Cliente";
  const inicial = nome.charAt(0).toUpperCase();

  return (
    <main className="min-h-screen bg-[#f8f6f0]">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 flex-col justify-between bg-white px-6 py-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] lg:flex">
          <div>
            <div>
              <p className="text-sm font-medium text-[#40916c]">
                Área do cliente
              </p>
              <h1 className="mt-1 text-3xl font-bold text-[#1f1f1f]">
                AgendaNuza
              </h1>
              <p className="mt-2 text-sm text-[#777]">
                Gerencie seus agendamentos com praticidade.
              </p>
            </div>

            <nav className="mt-10 flex flex-col gap-3">
              <Link href="/cliente" className={linkClass("/cliente")}>
                Início
              </Link>

              <Link
                href="/cliente/agendamentos"
                className={linkClass("/cliente/agendamentos")}
              >
                Meus agendamentos
              </Link>

              <Link
                href="/cliente/servicos"
                className={linkClass("/cliente/servicos")}
              >
                Serviços
              </Link>

              <Link
                href="/cliente/perfil"
                className={linkClass("/cliente/perfil")}
              >
                Meu perfil
              </Link>

              <button
                onClick={sair}
                className="rounded-2xl px-4 py-3 text-left font-medium text-red-600 transition hover:bg-red-50"
              >
                Sair
              </button>
            </nav>
          </div>

          <div className="rounded-[28px] bg-gradient-to-r from-[#40916c] to-[#74c69d] p-5 text-white">
            <p className="text-sm text-white/80">Atendimento premium</p>
            <h2 className="mt-2 text-xl font-bold">Agende com facilidade</h2>
            <p className="mt-2 text-sm text-white/90">
              Escolha seu serviço e acompanhe seus horários em um só lugar.
            </p>

            <Link
              href="/cliente"
              className="mt-4 inline-block rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#1f1f1f] transition hover:bg-[#f2f2f2]"
            >
              Agendar agora
            </Link>
          </div>
        </aside>

        <section className="flex-1">
          <header className="flex items-center justify-between px-6 py-5 lg:px-10">
            <div>
              <p className="text-sm font-medium text-[#40916c]">Dashboard</p>
              <h2 className="text-2xl font-bold text-[#1f1f1f]">
                Bem-vinda ao seu painel
              </h2>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#b7e4c7] text-lg font-bold text-[#1f1f1f]">
                {inicial}
              </div>
              <div>
                <p className="font-semibold text-[#1f1f1f]">{nome}</p>
                <p className="text-sm text-[#777]">Cliente</p>
              </div>
            </div>
          </header>

          <div className="px-6 pb-8 lg:px-10">{children}</div>
        </section>
      </div>
    </main>
  );
}