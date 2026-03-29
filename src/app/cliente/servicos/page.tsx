export default function ServicosPage() {
  const categorias = [
    {
      titulo: "Unhas",
      itens: [
        {
          nome: "Manicure",
          descricao: "Cuidado completo para unhas com atendimento rápido e prático.",
          preco: "R$ 25,00",
          duracao: "30 min",
        },
        {
          nome: "Pedicure",
          descricao: "Atendimento para os pés com acabamento e cuidado detalhado.",
          preco: "R$ 25,00",
          duracao: "30 min",
        },
        {
          nome: "Manicure + Pedicure",
          descricao: "Atendimento combinado para mãos e pés no mesmo horário.",
          preco: "R$ 50,00",
          duracao: "1h",
        },
      ],
    },
    {
      titulo: "Depilação",
      itens: [
        {
          nome: "Depilação - perna inteira",
          descricao: "Procedimento completo para pernas com atendimento ágil.",
          preco: "R$ 30,00",
          duracao: "30 min",
        },
        {
          nome: "Depilação - meia perna",
          descricao: "Procedimento rápido para a região inferior das pernas.",
          preco: "R$ 25,00",
          duracao: "20 min",
        },
        {
          nome: "Depilação - virilha",
          descricao: "Atendimento objetivo e com duração reduzida.",
          preco: "R$ 25,00",
          duracao: "15 min",
        },
        {
          nome: "Depilação - buço",
          descricao: "Procedimento rápido para manutenção facial.",
          preco: "R$ 10,00",
          duracao: "10 min",
        },
        {
          nome: "Sobrancelha - excesso",
          descricao: "Ajuste e limpeza simples para sobrancelhas.",
          preco: "R$ 12,00",
          duracao: "15 min",
        },
      ],
    },
    {
      titulo: "Cabelo",
      itens: [
        {
          nome: "Corte masculino",
          descricao: "Corte rápido e prático para rotina masculina.",
          preco: "R$ 25,00",
          duracao: "20 min",
        },
        {
          nome: "Corte feminino sem escova",
          descricao: "Corte feminino com finalização simples.",
          preco: "R$ 45,00",
          duracao: "30 min",
        },
        {
          nome: "Corte feminino + escova",
          descricao: "Corte com finalização mais completa.",
          preco: "A partir de R$ 60,00",
          duracao: "45 a 60 min",
        },
        {
          nome: "Coloração sem tinta inclusa - aplicação sem escova",
          descricao: "Aplicação de coloração com finalização simples.",
          preco: "R$ 40,00",
          duracao: "1h",
        },
        {
          nome: "Coloração sem tinta inclusa - aplicação com escova",
          descricao: "Aplicação de coloração com finalização em escova.",
          preco: "R$ 65,00",
          duracao: "1h30",
        },
        {
          nome: "Coloração com tinta inclusa - aplicação sem escova",
          descricao: "Retoque ou coloração completa com tinta inclusa.",
          preco: "A partir de R$ 60,00",
          duracao: "1h",
        },
        {
          nome: "Coloração com tinta inclusa - aplicação com escova",
          descricao: "Coloração completa com finalização em escova.",
          preco: "A partir de R$ 85,00",
          duracao: "1h30",
        },
        {
          nome: "Hidratação",
          descricao: "Tratamento capilar para brilho, maciez e recuperação dos fios.",
          preco: "R$ 65,00",
          duracao: "1h",
        },
        {
          nome: "Cauterização",
          descricao: "Tratamento de recuperação para fios mais danificados.",
          preco: "R$ 75,00",
          duracao: "1h",
        },
        {
          nome: "Escova",
          descricao: "Finalização prática para o dia a dia.",
          preco: "A partir de R$ 45,00",
          duracao: "30 min",
        },
        {
          nome: "Escova + prancha",
          descricao: "Finalização com escova e prancha para maior definição.",
          preco: "A partir de R$ 55,00",
          duracao: "45 min",
        },
        {
          nome: "Luzes",
          descricao: "Procedimento de iluminação com atendimento mais longo.",
          preco: "A partir de R$ 170,00",
          duracao: "2h",
        },
        {
          nome: "Ombre hair",
          descricao: "Técnica de iluminação gradual com efeito moderno.",
          preco: "A partir de R$ 170,00",
          duracao: "2h",
        },
        {
          nome: "Morena iluminada",
          descricao: "Iluminação sofisticada mantendo a base mais escura.",
          preco: "A partir de R$ 170,00",
          duracao: "2h",
        },
      ],
    },
  ];

  const totalServicos = categorias.reduce((acc, categoria) => acc + categoria.itens.length, 0);

  return (
    <div className="space-y-6">
      <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <p className="text-sm font-medium text-[#40916c]">Catálogo do salão</p>
        <h1 className="mt-2 text-3xl font-bold text-[#1f1f1f]">Serviços disponíveis</h1>
        <p className="mt-2 text-[#666]">
          Confira os serviços oferecidos pelo salão, com duração média e valores.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Total de serviços</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">{totalServicos}</h2>
        </div>

        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Categorias</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1f1f1f]">{categorias.length}</h2>
        </div>

        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Serviço destaque</p>
          <h2 className="mt-2 text-2xl font-bold text-[#1f1f1f]">Coloração</h2>
        </div>

        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[#666]">Maior duração</p>
          <h2 className="mt-2 text-2xl font-bold text-[#1f1f1f]">2h</h2>
        </div>
      </div>

      {categorias.map((categoria) => (
        <section
          key={categoria.titulo}
          className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[#40916c]">Categoria</p>
              <h2 className="mt-1 text-2xl font-bold text-[#1f1f1f]">{categoria.titulo}</h2>
            </div>

            <span className="rounded-full bg-[#fff4d6] px-4 py-2 text-sm font-semibold text-[#8a6a00]">
              {categoria.itens.length} itens
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {categoria.itens.map((servico) => (
              <div
                key={servico.nome}
                className="rounded-[24px] bg-[#f8f6f0] p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[#1f1f1f]">{servico.nome}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#666]">{servico.descricao}</p>
                  </div>

                  <span className="rounded-full bg-white px-3 py-1 text-sm font-medium text-[#1f1f1f] shadow-sm">
                    {servico.duracao}
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <p className="text-base font-semibold text-[#1f1f1f]">{servico.preco}</p>

                  <button className="rounded-xl bg-[#40916c] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90">
                    Agendar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}