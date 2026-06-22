import { prisma } from "@/lib/prisma";

export async function GET() {
  const clientes = await prisma.usuario.findMany({
    where: {
      tipo: "CLIENTE",
    },
    select: {
      id: true,
      nome: true,
      email: true,
      telefone: true,
      ativo: true,
      createdAt: true,
      agendamentos: {
        select: {
          id: true,
          status: true,
        },
      },
    },
    orderBy: {
      nome: "asc",
    },
  });

  return Response.json(clientes);
}