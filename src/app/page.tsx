"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f5f2eb] p-6">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl grid md:grid-cols-2"
      >
        <div className="bg-gradient-to-br from-[#9ed3b0] to-[#6fb48f] p-12 flex flex-col justify-center">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 w-fit rounded-full bg-white/80 px-4 py-1 text-sm font-medium text-[#3f7f5f]"
          >
            Danuza Andrietti Studio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6 text-6xl font-bold text-white"
          >
            AgendaNuza
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="max-w-md text-lg text-white/90"
          >
            Sua beleza merece organização, conforto e tecnologia.
            Agende seus horários com facilidade e tenha uma experiência exclusiva.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 flex items-center gap-4"
          >
            <div className="h-[2px] w-16 bg-[#d4af37]" />
            <h2 className="text-4xl font-bold tracking-wide text-white">
              Desde 1996
            </h2>
          </motion.div>
        </div>

        <div className="p-12 flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-4 text-4xl font-bold text-gray-800"
          >
            Bem-vindo(a)
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mb-8 text-gray-600"
          >
            Entre ou crie sua conta para agendar seu atendimento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <Link
              href="/login"
              className="rounded-xl bg-[#3f7f5f] py-4 text-center font-semibold text-white transition hover:scale-[1.01] hover:opacity-90"
            >
              Entrar na minha conta
            </Link>

            <Link
              href="/cadastro"
              className="rounded-xl border border-[#d4af37] py-4 text-center font-semibold text-gray-800 transition hover:scale-[1.01] hover:bg-[#faf6ea]"
            >
              Criar nova conta
            </Link>

            <Link
              href="/admin"
              className="text-center text-sm text-gray-500 transition hover:text-gray-800"
            >
              Área administrativa
            </Link>

            <span className="mt-6 text-center text-xs text-gray-400">
              AgendaNuza © 2026
            </span>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}