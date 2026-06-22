import { prisma } from "@/lib/prisma";

type Context = {
  params: Promise<{
    id: string;
  }>;
};

export async function PATCH(_req: Request, context: Context) {
  const { id } = await context.params;
  const agendamentoId = Number(id);

  if (Number.isNaN(agendamentoId)) {
    return Response.json({ message: "ID inválido." }, { status: 400 });
  }

  const agendamento = await prisma.agendamento.update({
    where: {
      id: agendamentoId,
    },
    data: {
      status: "FINALIZADO",
    },
  });

  return Response.json({
    message: "Atendimento finalizado com sucesso.",
    agendamento,
  });
}