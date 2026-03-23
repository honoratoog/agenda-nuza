"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Cadastro() {
  return (
    <main className="min-h-screen bg-[#f8f6f0] flex items-center justify-center px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-6xl rounded-[40px] bg-white shadow-[0_40px_120px_rgba(0,0,0,0.12)] overflow-hidden grid lg:grid-cols-2"
      >
        <div className="hidden lg:flex bg-gradient-to-br from-[#b7e4c7] via-[#95d5b2] to-[#74c69d] p-12 lg:p-16 flex-col justify-center relative">
          <div className="absolute top-8 left-8 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-8 right-8 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>

          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="w-fit rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#40916c]"
          >
            Danuza Andrietti Studio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-8 text-5xl font-bold text-white leading-tight"
          >
            Crie sua conta
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.6 }}
            className="mt-6 text-white/90 text-lg max-w-md"
          >
            Faça seu cadastro para agendar horários, acompanhar seus atendimentos
            e ter uma experiência mais prática no salão.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10 grid grid-cols-2 gap-4"
          >
            <div className="bg-white/20 px-4 py-4 rounded-2xl backdrop-blur-md">
              <p className="text-white font-semibold">Cadastro rápido</p>
              <span className="text-white/80 text-sm">em poucos passos</span>
            </div>

            <div className="bg-white/20 px-4 py-4 rounded-2xl backdrop-blur-md">
              <p className="text-white font-semibold">Acesso fácil</p>
              <span className="text-white/80 text-sm">ao painel do cliente</span>
            </div>
          </motion.div>
        </div>

        <div className="p-10 lg:p-16 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-sm font-medium text-[#40916c]">Novo cadastro</p>
            <h2 className="mt-2 text-4xl font-bold text-[#1f1f1f]">Criar conta</h2>
            <p className="mt-3 text-[#666]">
              Preencha seus dados para começar a usar o AgendaNuza.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.32, duration: 0.6 }}
            className="space-y-4"
          >
            <div>
              <label className="mb-2 block text-sm font-medium text-[#555]">
                Nome completo
              </label>
              <input
                type="text"
                placeholder="Digite seu nome"
                className="w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3 outline-none transition focus:border-[#40916c] focus:shadow-[0_0_0_4px_rgba(64,145,108,0.10)]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#555]">
                Email
              </label>
              <input
                type="email"
                placeholder="seuemail@email.com"
                className="w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3 outline-none transition focus:border-[#40916c] focus:shadow-[0_0_0_4px_rgba(64,145,108,0.10)]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#555]">
                WhatsApp
              </label>
              <input
                type="text"
                placeholder="(47) 99999-9999"
                className="w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3 outline-none transition focus:border-[#40916c] focus:shadow-[0_0_0_4px_rgba(64,145,108,0.10)]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#555]">
                Senha
              </label>
              <input
                type="password"
                placeholder="Crie uma senha"
                className="w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3 outline-none transition focus:border-[#40916c] focus:shadow-[0_0_0_4px_rgba(64,145,108,0.10)]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#555]">
                Confirmar senha
              </label>
              <input
                type="password"
                placeholder="Digite novamente sua senha"
                className="w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3 outline-none transition focus:border-[#40916c] focus:shadow-[0_0_0_4px_rgba(64,145,108,0.10)]"
              />
            </div>

            <button
              type="button"
              className="w-full rounded-2xl bg-[#40916c] py-3.5 text-white font-semibold text-lg transition hover:opacity-90 hover:scale-[1.01]"
            >
              Criar conta
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-8 text-center text-sm text-[#666]"
          >
            Já possui conta?{" "}
            <Link
              href="/login"
              className="font-semibold text-[#d4af37] hover:opacity-80 transition"
            >
              Entrar
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-6 text-center"
          >
            <Link
              href="/"
              className="text-sm text-[#888] hover:text-[#1f1f1f] transition"
            >
              Voltar para a página inicial
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}