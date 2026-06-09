import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#f8f6f0] flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-3xl rounded-[40px] bg-white p-10 text-center shadow-[0_40px_120px_rgba(0,0,0,0.12)]">
        <div className="mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full bg-[#b7e4c7] relative overflow-hidden">
          <div className="absolute bottom-8 h-4 w-24 rounded-full bg-[#d4af37] animate-pulse" />

          <div className="text-7xl animate-bounce">
            🐰
          </div>

          <div className="absolute right-9 bottom-10 text-3xl animate-[spin_3s_linear_infinite]">
            ⚙️
          </div>
        </div>

        <p className="text-sm font-medium text-[#40916c]">
          Página em construção
        </p>

        <h1 className="mt-3 text-6xl font-bold text-[#1f1f1f]">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-[#1f1f1f]">
          Opa! Essa página ainda não está pronta.
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-[#666]">
          Nosso coelhinho construtor está trabalhando para deixar tudo perfeito.
          Enquanto isso, você pode voltar para a página inicial.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-2xl bg-[#40916c] px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Voltar para home
          </Link>

          <Link
            href="/cliente"
            className="rounded-2xl border border-[#d4af37] px-6 py-3 font-semibold text-[#1f1f1f] transition hover:bg-[#fff6dc]"
          >
            Ir para área do cliente
          </Link>
        </div>
      </div>
    </main>
  );
}