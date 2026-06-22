import { prisma } from "@/lib/prisma";

export async function GET() {
  const hoje = new Date();

  const inicioDia = new Date(
    hoje.getFullYear(),
    hoje.getMonth(),
    hoje.getDate(),
    0,
    0,
    0
  );

  const fimDia = new Date(
    hoje.getFullYear(),
    hoje.getMonth(),
    hoje.getDate(),
    23,
    59,
    59
  );

  const [
    agendamentosHoje,
    clientesAtivos,
    servicosAtivos,
    finalizados
  ] = await Promise.all([
    prisma.agendamento.count({
      where: {
        data: {
          gte: inicioDia,
          lte: fimDia
        }
      }
    }),

    prisma.usuario.count({
      where: {
        tipo: "CLIENTE",
        ativo: true
      }
    }),

    prisma.servico.count({
      where: {
        ativo: true
      }
    }),

    prisma.agendamento.count({
      where: {
        status: "FINALIZADO"
      }
    })
  ]);

  return Response.json({
    agendamentosHoje,
    clientesAtivos,
    servicosAtivos,
    finalizados
  });
}