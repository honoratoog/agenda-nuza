import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="space-y-6">
      {/* TOPO */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Agendamentos hoje</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">12</h2>
        </div>

        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Clientes ativos</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">84</h2>
        </div>

        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Serviços ativos</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">8</h2>
        </div>

        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Atendimentos finalizados</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">37</h2>
        </div>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        {/* ESQUERDA */}
        <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <div className="mb-6">
            <p className="text-sm font-medium text-[#40916c]">Visão geral</p>
            <h1 className="mt-1 text-2xl font-bold text-[#1f1f1f]">
              Painel administrativo
            </h1>
            <p className="mt-2 text-[#666]">
              Acompanhe rapidamente o movimento do salão e acesse as principais áreas do sistema.
            </p>
          </div>

          {/* CARDS CLICÁVEIS */}
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/admin/agenda"
              className="group rounded-[24px] bg-[#f8f6f0] p-6 transition hover:shadow-lg hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-[#1f1f1f] group-hover:text-[#40916c]">
                Agenda do dia
              </h3>
              <p className="mt-2 text-sm text-[#666]">
                Visualize todos os horários marcados e acompanhe os atendimentos do dia.
              </p>
            </Link>

            <Link
              href="/admin/clientes"
              className="group rounded-[24px] bg-[#f8f6f0] p-6 transition hover:shadow-lg hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-[#1f1f1f] group-hover:text-[#40916c]">
                Clientes
              </h3>
              <p className="mt-2 text-sm text-[#666]">
                Consulte clientes cadastrados e faça cadastro manual quando necessário.
              </p>
            </Link>

            <Link
              href="/admin/servicos"
              className="group rounded-[24px] bg-[#f8f6f0] p-6 transition hover:shadow-lg hover:-translate-y-1"
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
              className="group rounded-[24px] bg-[#f8f6f0] p-6 transition hover:shadow-lg hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-[#1f1f1f] group-hover:text-[#40916c]">
                Controle
              </h3>
              <p className="mt-2 text-sm text-[#666]">
                Marque atendimentos como finalizados e mantenha a agenda organizada.
              </p>
            </Link>
          </div>
        </div>

        {/* DIREITA */}
        <div className="rounded-[32px] bg-gradient-to-r from-[#40916c] to-[#74c69d] p-8 text-white">
          <p className="text-sm uppercase tracking-wide text-white/80">
            Resumo do dia
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Movimento em alta
          </h2>

          <p className="mt-3 text-white/90">
            O salão está com boa ocupação hoje, com horários da tarde quase completos.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white/20 p-4">
              <p className="text-sm text-white/80">Ocupação</p>
              <h3 className="mt-1 text-xl font-bold">78%</h3>
            </div>

            <div className="rounded-2xl bg-white/20 p-4">
              <p className="text-sm text-white/80">Serviço destaque</p>
              <h3 className="mt-1 text-xl font-bold">Escova</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}