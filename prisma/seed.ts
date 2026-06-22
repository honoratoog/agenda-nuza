import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL ?? "file:./dev.db",
});

const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.servico.deleteMany();

  await prisma.servico.createMany({
    data: [
      {
        nome: "Manicure",
        descricao: "Cuidado completo para unhas das mãos.",
        preco: 25,
        duracaoMin: 30,
        categoria: "UNHAS",
      },
      {
        nome: "Pedicure",
        descricao: "Cuidado completo para unhas dos pés.",
        preco: 25,
        duracaoMin: 30,
        categoria: "UNHAS",
      },
      {
        nome: "Manicure + Pedicure",
        descricao: "Atendimento completo para mãos e pés.",
        preco: 50,
        duracaoMin: 60,
        categoria: "UNHAS",
      },
      {
        nome: "Depilação - perna inteira",
        descricao: "Depilação completa das pernas.",
        preco: 30,
        duracaoMin: 30,
        categoria: "DEPILACAO",
      },
      {
        nome: "Depilação - meia perna",
        descricao: "Depilação de meia perna.",
        preco: 25,
        duracaoMin: 20,
        categoria: "DEPILACAO",
      },
      {
        nome: "Depilação - virilha",
        descricao: "Depilação de virilha.",
        preco: 25,
        duracaoMin: 15,
        categoria: "DEPILACAO",
      },
      {
        nome: "Depilação - buço",
        descricao: "Depilação facial na região do buço.",
        preco: 10,
        duracaoMin: 10,
        categoria: "DEPILACAO",
      },
      {
        nome: "Sobrancelha - excesso",
        descricao: "Limpeza do excesso da sobrancelha.",
        preco: 12,
        duracaoMin: 15,
        categoria: "DEPILACAO",
      },
      {
        nome: "Corte masculino",
        descricao: "Corte masculino simples.",
        preco: 25,
        duracaoMin: 20,
        categoria: "CABELO",
      },
      {
        nome: "Corte feminino sem escova",
        descricao: "Corte feminino sem finalização com escova.",
        preco: 45,
        duracaoMin: 30,
        categoria: "CABELO",
      },
      {
        nome: "Corte feminino + escova",
        descricao: "Corte feminino com escova.",
        preco: 60,
        duracaoMin: 60,
        categoria: "CABELO",
      },
      {
        nome: "Coloração sem tinta inclusa - aplicação sem escova",
        descricao: "Aplicação de coloração sem tinta inclusa e sem escova.",
        preco: 40,
        duracaoMin: 60,
        categoria: "CABELO",
      },
      {
        nome: "Coloração sem tinta inclusa - aplicação com escova",
        descricao: "Aplicação de coloração sem tinta inclusa com escova.",
        preco: 65,
        duracaoMin: 90,
        categoria: "CABELO",
      },
      {
        nome: "Coloração com tinta inclusa - aplicação sem escova",
        descricao: "Coloração com tinta inclusa sem escova.",
        preco: 60,
        duracaoMin: 60,
        categoria: "CABELO",
      },
      {
        nome: "Coloração com tinta inclusa - aplicação com escova",
        descricao: "Coloração com tinta inclusa com escova.",
        preco: 85,
        duracaoMin: 90,
        categoria: "CABELO",
      },
      {
        nome: "Hidratação",
        descricao: "Tratamento capilar para hidratação dos fios.",
        preco: 65,
        duracaoMin: 60,
        categoria: "CABELO",
      },
      {
        nome: "Cauterização",
        descricao: "Tratamento capilar de reconstrução.",
        preco: 75,
        duracaoMin: 60,
        categoria: "CABELO",
      },
      {
        nome: "Escova",
        descricao: "Finalização com escova.",
        preco: 45,
        duracaoMin: 30,
        categoria: "CABELO",
      },
      {
        nome: "Escova + prancha",
        descricao: "Finalização com escova e prancha.",
        preco: 55,
        duracaoMin: 45,
        categoria: "CABELO",
      },
      {
        nome: "Luzes",
        descricao: "Serviço de iluminação capilar.",
        preco: 170,
        duracaoMin: 120,
        categoria: "CABELO",
      },
      {
        nome: "Ombre hair",
        descricao: "Técnica de iluminação gradual dos fios.",
        preco: 170,
        duracaoMin: 120,
        categoria: "CABELO",
      },
      {
        nome: "Morena iluminada",
        descricao: "Iluminação para cabelos escuros.",
        preco: 170,
        duracaoMin: 120,
        categoria: "CABELO",
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("Serviços cadastrados com sucesso.");
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });