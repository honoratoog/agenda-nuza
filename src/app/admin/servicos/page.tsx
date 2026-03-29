export default function ServicosAdminPage() {
    const categorias = [
      {
        titulo: "Unhas",
        itens: [
          { nome: "Manicure", preco: "R$ 25,00", tempo: "30 min" },
          { nome: "Pedicure", preco: "R$ 25,00", tempo: "30 min" },
          { nome: "Manicure + Pedicure", preco: "R$ 50,00", tempo: "1h" },
        ],
      },
      {
        titulo: "Depilação",
        itens: [
          { nome: "Depilação - perna inteira", preco: "R$ 30,00", tempo: "30 min" },
          { nome: "Depilação - meia perna", preco: "R$ 25,00", tempo: "20 min" },
          { nome: "Depilação - virilha", preco: "R$ 25,00", tempo: "15 min" },
          { nome: "Depilação - buço", preco: "R$ 10,00", tempo: "10 min" },
          { nome: "Sobrancelha - excesso", preco: "R$ 12,00", tempo: "15 min" },
        ],
      },
      {
        titulo: "Cabelo",
        itens: [
          { nome: "Corte masculino", preco: "R$ 25,00", tempo: "20 min" },
          { nome: "Corte feminino sem escova", preco: "R$ 45,00", tempo: "30 min" },
          { nome: "Corte feminino + escova", preco: "A partir de R$ 60,00", tempo: "45 a 60 min" },
          { nome: "Coloração sem tinta inclusa - aplicação sem escova", preco: "R$ 40,00", tempo: "1h" },
          { nome: "Coloração sem tinta inclusa - aplicação com escova", preco: "R$ 65,00", tempo: "1h30" },
          { nome: "Coloração com tinta inclusa - aplicação sem escova", preco: "A partir de R$ 60,00", tempo: "1h" },
          { nome: "Coloração com tinta inclusa - aplicação com escova", preco: "A partir de R$ 85,00", tempo: "1h30" },
          { nome: "Hidratação", preco: "R$ 65,00", tempo: "1h" },
          { nome: "Cauterização", preco: "R$ 75,00", tempo: "1h" },
          { nome: "Escova", preco: "A partir de R$ 45,00", tempo: "30 min" },
          { nome: "Escova + prancha", preco: "A partir de R$ 55,00", tempo: "45 min" },
          { nome: "Luzes", preco: "A partir de R$ 170,00", tempo: "2h" },
          { nome: "Ombre hair", preco: "A partir de R$ 170,00", tempo: "2h" },
          { nome: "Morena iluminada", preco: "A partir de R$ 170,00", tempo: "2h" },
        ],
      },
      {
        titulo: "Combinações",
        itens: [
          { nome: "Coloração + manicure ou pedicure", preco: "Consultar", tempo: "1h30" },
          { nome: "Coloração + manicure e pedicure", preco: "Consultar", tempo: "2h" },
          { nome: "Hidratação ou cauterização + manicure ou pedicure", preco: "Consultar", tempo: "1h30" },
          { nome: "Hidratação + manicure e pedicure", preco: "Consultar", tempo: "2h" },
          { nome: "Luzes, morena iluminada ou ombre hair + manicure e pedicure", preco: "Consultar", tempo: "2h" },
          { nome: "Escova ou escova com prancha + manicure ou pedicure", preco: "Consultar", tempo: "1h" },
          { nome: "Escova ou escova com prancha + manicure e pedicure", preco: "Consultar", tempo: "1h30" },
        ],
      },
    ];
  
    const totalServicos = categorias.reduce((acc, categoria) => acc + categoria.itens.length, 0);
  
    return (
      <div className="space-y-6">
        <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <p className="text-sm font-medium text-[#40916c]">Catálogo do salão</p>
          <h1 className="mt-2 text-3xl font-bold text-[#1f1f1f]">Serviços</h1>
          <p className="mt-2 text-[#666]">
            Gerencie os serviços cadastrados, seus valores e a duração média de cada atendimento.
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
            <p className="text-sm text-[#666]">Destaque</p>
            <h2 className="mt-2 text-2xl font-bold text-[#1f1f1f]">Coloração</h2>
          </div>
  
          <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <p className="text-sm text-[#666]">Maior duração</p>
            <h2 className="mt-2 text-2xl font-bold text-[#1f1f1f]">2h</h2>
          </div>
        </div>
  
        <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <h2 className="text-2xl font-bold text-[#1f1f1f]">Cadastrar novo serviço</h2>
  
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <input
              placeholder="Nome do serviço"
              className="w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3 outline-none focus:border-[#40916c]"
            />
            <input
              placeholder="Preço"
              className="w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3 outline-none focus:border-[#40916c]"
            />
            <input
              placeholder="Tempo médio"
              className="w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3 outline-none focus:border-[#40916c]"
            />
            <input
              placeholder="Categoria"
              className="w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3 outline-none focus:border-[#40916c]"
            />
          </div>
  
          <button className="mt-5 rounded-2xl bg-[#40916c] px-6 py-3 font-semibold text-white transition hover:opacity-90">
            Cadastrar serviço
          </button>
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
  
            <div className="space-y-4">
              {categoria.itens.map((servico) => (
                <div
                  key={servico.nome}
                  className="flex flex-col gap-4 rounded-[24px] bg-[#f8f6f0] p-5 md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-[#1f1f1f]">{servico.nome}</h3>
                    <p className="mt-1 text-sm text-[#666]">
                      {servico.preco} • {servico.tempo}
                    </p>
                  </div>
  
                  <div className="flex gap-2">
                    <button className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#1f1f1f] shadow-sm transition hover:bg-[#f2f2f2]">
                      Editar
                    </button>
                    <button className="rounded-xl border border-[#d4af37] px-4 py-2 text-sm font-semibold text-[#1f1f1f] transition hover:bg-[#fff6dc]">
                      Ocultar
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