import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f6f0] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-6xl rounded-[40px] bg-white shadow-[0_40px_120px_rgba(0,0,0,0.12)] overflow-hidden grid lg:grid-cols-2">
        
        {/* LADO ESQUERDO ESTÉTICO */}
        <div className="bg-gradient-to-br from-[#b7e4c7] via-[#95d5b2] to-[#74c69d] p-12 lg:p-16 flex flex-col justify-center relative">

          <div className="absolute top-8 left-8 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-8 right-8 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>

          <span className="w-fit rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#40916c]">
            Danuza Andrietti Studio
          </span>

          <h1 className="mt-8 text-6xl font-bold text-white leading-tight">
            AgendaNuza
          </h1>

          <p className="mt-6 text-white/90 text-lg max-w-md">
            Sua beleza merece organização, conforto e tecnologia.
            Agende seus horários com facilidade e tenha uma experiência exclusiva.
          </p>

          <div className="mt-10 flex gap-4">
            <div className="bg-white/20 px-2 py-3 rounded-xl backdrop-blur-md">
              <p className="text-white font-semibold">Segurança &</p>
              <span className="text-white/80 text-sm">qualidade</span>
            </div>

            <div className="bg-white/20 px-2 py-2 rounded-xl backdrop-blur-md">
              <p className="text-white font-semibold">Desde 1996</p>
              <span className="text-white/80 text-sm">com você</span>
            </div>
          </div>
        </div>

        {/* LADO DIREITO LOGIN / CTA */}
        <div className="p-12 lg:p-16 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-[#1f1f1f]">
            Bem-vinda
          </h2>

          <p className="mt-3 text-[#666] text-lg">
            Entre ou crie sua conta para agendar seu atendimento.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            <Link
              href="/login"
              className="rounded-2xl bg-[#40916c] px-6 py-4 text-center text-white font-semibold text-lg hover:opacity-90 transition"
            >
              Entrar na minha conta
            </Link>

            <Link
              href="/cadastro"
              className="rounded-2xl border-2 border-[#d4af37] px-6 py-4 text-center text-[#1f1f1f] font-semibold text-lg hover:bg-[#fff6dc] transition"
            >
              Criar nova conta
            </Link>

            <Link
              href="/admin"
              className="mt-6 text-center text-sm text-[#888] hover:text-[#1f1f1f] transition"
            >
              Área administrativa
            </Link>
          </div>

          <div className="mt-12 text-center text-xs text-[#aaa]">
            AgendaNuza © 2026
          </div>
        </div>
      </div>
    </main>
  );
}