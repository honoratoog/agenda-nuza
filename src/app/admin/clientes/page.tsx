export default function ClientesAdminPage() {
    const clientes = [
      { nome: "Maria Silva", telefone: "(47) 99999-1111", email: "maria@email.com" },
      { nome: "Ana Souza", telefone: "(47) 99999-2222", email: "ana@email.com" },
      { nome: "Juliana Costa", telefone: "(47) 99999-3333", email: "juliana@email.com" },
    ];
  
    return (
      <div className="space-y-6">
        <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <p className="text-sm font-medium text-[#40916c]">Gestão de clientes</p>
          <h1 className="mt-2 text-3xl font-bold text-[#1f1f1f]">Clientes cadastrados</h1>
          <p className="mt-2 text-[#666]">
            Visualize os clientes do sistema e faça cadastros manuais quando necessário.
          </p>
        </div>
  
        <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <h2 className="text-2xl font-bold text-[#1f1f1f]">Cadastrar cliente manualmente</h2>
  
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <input
              placeholder="Nome do cliente"
              className="w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3 outline-none focus:border-[#40916c]"
            />
            <input
              placeholder="WhatsApp"
              className="w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3 outline-none focus:border-[#40916c]"
            />
            <input
              placeholder="Email"
              className="w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3 outline-none focus:border-[#40916c] md:col-span-2"
            />
          </div>
  
          <button className="mt-5 rounded-2xl bg-[#40916c] px-6 py-3 font-semibold text-white transition hover:opacity-90">
            Cadastrar cliente
          </button>
        </div>
  
        <div className="space-y-4">
          {clientes.map((cliente) => (
            <div
              key={cliente.email}
              className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
            >
              <h2 className="text-xl font-semibold text-[#1f1f1f]">{cliente.nome}</h2>
              <p className="mt-1 text-sm text-[#666]">{cliente.telefone}</p>
              <p className="mt-1 text-sm text-[#666]">{cliente.email}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }