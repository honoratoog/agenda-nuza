import { prisma } from "@/lib/prisma";

type Context = {
  params: Promise<{
    id: string;
  }>;
};

export async function PATCH(
  _req: Request,
  context: Context
) {
  const { id } = await context.params;

  const agendamento = await prisma.agendamento.update({
    where: {
      id: Number(id),
    },
    data: {
      status: "CANCELADO",
    },
  });

  return Response.json(agendamento);
}