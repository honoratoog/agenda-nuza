import bcrypt from "bcryptjs";
import { prisma } from "../src/lib/prisma";

async function main() {
  const senhaAdmin = await bcrypt.hash("123456", 10);

  await prisma.usuario.upsert({
    where: {
      email: "admin@agendanuza.com",
    },
    update: {
      nome: "Danuza",
      telefone: "47999999999",
      tipo: "ADMIN",
      ativo: true,
    },
    create: {
      nome: "Danuza",
      email: "admin@agendanuza.com",
      senha: senhaAdmin,
      telefone: "47999999999",
      tipo: "ADMIN",
      ativo: true,
    },
  });

  console.log("Admin criado com sucesso.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });