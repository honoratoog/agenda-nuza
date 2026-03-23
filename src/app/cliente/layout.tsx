import Link from "next/link";

export default function ClienteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#f8f6f0]">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 flex-col justify-between bg-white px-6 py-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] lg:flex">
          <div>
            <div>
              <p className="text-sm font-medium text-[#40916c]">Área do cliente</p>
              <h1 className="mt-1 text-3xl font-bold text-[#1f1f1f]">
                AgendaNuza
              </h1>
              <p className="mt-2 text-sm text-[#777]">
                Gerencie seus agendamentos com praticidade.
              </p>
            </div>

            <nav className="mt-10 flex flex-col gap-3">
              <Link
                href="/cliente"
                className="rounded-2xl bg-[#40916c] px-4 py-3 font-medium text-white transition hover:opacity-90"
              >
                Início
              </Link>

              <Link
                href="/cliente/agendamentos"
                className="rounded-2xl px-4 py-3 font-medium text-[#1f1f1f] transition hover:bg-[#f3efe6]"
              >
                Meus agendamentos
              </Link>

              <Link
                href="/cliente/servicos"
                className="rounded-2xl px-4 py-3 font-medium text-[#1f1f1f] transition hover:bg-[#f3efe6]"
              >
                Serviços
              </Link>

              <Link
                href="/cliente/perfil"
                className="rounded-2xl px-4 py-3 font-medium text-[#1f1f1f] transition hover:bg-[#f3efe6]"
              >
                Meu perfil
              </Link>
            </nav>
          </div>

          <div className="rounded-[28px] bg-gradient-to-r from-[#40916c] to-[#74c69d] p-5 text-white">
            <p className="text-sm text-white/80">Atendimento premium</p>
            <h2 className="mt-2 text-xl font-bold">Agende com facilidade</h2>
            <p className="mt-2 text-sm text-white/90">
              Escolha seu serviço e acompanhe seus horários em um só lugar.
            </p>

            <Link
              href="/"
              className="mt-4 inline-block rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#1f1f1f] transition hover:bg-[#f2f2f2]"
            >
              Voltar para home
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
                L
              </div>
              <div>
                <p className="font-semibold text-[#1f1f1f]">Luiza Honorato</p>
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