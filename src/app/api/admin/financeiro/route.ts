import { prisma } from "@/lib/prisma";

export async function GET() {
  const hoje = new Date();

  const inicioMes = new Date(
    hoje.getFullYear(),
    hoje.getMonth(),
    1
  );

  const fimMes = new Date(
    hoje.getFullYear(),
    hoje.getMonth() + 1,
    0,
    23,
    59,
    59
  );

  const finalizados = await prisma.agendamento.findMany({
    where: {
      status: "FINALIZADO",
    },
    include: {
      servico: true,
    },
  });

  const finalizadosMes = finalizados.filter(
    (item) =>
      item.data >= inicioMes &&
      item.data <= fimMes
  );

  const faturamentoTotal = finalizados.reduce(
    (total, item) => total + Number(item.servico.preco),
    0
  );

  const faturamentoMes = finalizadosMes.reduce(
    (total, item) => total + Number(item.servico.preco),
    0
  );

  return Response.json({
    faturamentoTotal,
    faturamentoMes,
  });
}