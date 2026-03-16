import Link from "next/link";

export default function Login() {
  return (
    <main className="min-h-screen bg-[#f8f6f0] flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-6xl rounded-[40px] bg-white shadow-[0_40px_120px_rgba(0,0,0,0.12)] overflow-hidden grid lg:grid-cols-2">
        <div className="hidden lg:flex bg-gradient-to-br from-[#b7e4c7] via-[#95d5b2] to-[#74c69d] p-12 lg:p-16 flex-col justify-center relative">
          <div className="absolute top-8 left-8 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-8 right-8 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>

          <span className="w-fit rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#40916c]">
            Danuza Andrietti Studio
          </span>

          <h1 className="mt-8 text-5xl font-bold text-white leading-tight">
            Bem-vinda de volta
          </h1>

          <p className="mt-6 text-white/90 text-lg max-w-md">
            Entre na sua conta para acompanhar seus agendamentos e marcar novos horários com praticidade.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">
            <div className="bg-white/20 px-4 py-4 rounded-2xl backdrop-blur-md">
              <p className="text-white font-semibold">Agendamento</p>
              <span className="text-white/80 text-sm">rápido e simples</span>
            </div>

            <div className="bg-white/20 px-4 py-4 rounded-2xl backdrop-blur-md">
              <p className="text-white font-semibold">Área cliente</p>
              <span className="text-white/80 text-sm">organizada e elegante</span>
            </div>
          </div>
        </div>

        <div className="p-10 lg:p-16 flex flex-col justify-center">
          <div className="mb-8">
            <p className="text-sm font-medium text-[#40916c]">Acesso ao sistema</p>
            <h2 className="mt-2 text-4xl font-bold text-[#1f1f1f]">Entrar</h2>
            <p className="mt-3 text-[#666]">
              Use seu email e senha para acessar sua conta.
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-[#555]">
                Email
              </label>
              <input
                type="email"
                placeholder="seuemail@email.com"
                className="w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3 outline-none transition focus:border-[#40916c]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#555]">
                Senha
              </label>
              <input
                type="password"
                placeholder="Digite sua senha"
                className="w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3 outline-none transition focus:border-[#40916c]"
              />
            </div>

            <div className="flex items-center justify-between pt-1 text-sm">
              <label className="flex items-center gap-2 text-[#666]">
                <input type="checkbox" className="accent-[#40916c]" />
                Lembrar de mim
              </label>

              <span className="text-[#d4af37] font-medium cursor-pointer hover:opacity-80">
                Esqueci minha senha
              </span>
            </div>

            <button
              type="button"
              className="w-full rounded-2xl bg-[#40916c] py-3.5 text-white font-semibold text-lg transition hover:opacity-90"
            >
              Entrar
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-[#666]">
            Ainda não possui conta?{" "}
            <Link href="/cadastro" className="font-semibold text-[#d4af37] hover:opacity-80">
              Criar conta
            </Link>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-sm text-[#888] hover:text-[#1f1f1f] transition"
            >
              Voltar para a página inicial
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}