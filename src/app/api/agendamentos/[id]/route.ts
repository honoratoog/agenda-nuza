import { prisma } from "@/lib/prisma";

type Context = {
  params: Promise<{
    id: string;
  }>;
};

export async function PATCH(req: Request, context: Context) {
  const { id } = await context.params;
  const agendamentoId = Number(id);

  if (Number.isNaN(agendamentoId)) {
    return Response.json({ message: "ID inválido." }, { status: 400 });
  }

  const body = await req.json();
  const { acao, data, hora } = body;

  if (acao === "CANCELAR") {
    const agendamento = await prisma.agendamento.update({
      where: {
        id: agendamentoId,
      },
      data: {
        status: "CANCELADO",
      },
    });

    return Response.json({
      message: "Agendamento cancelado com sucesso.",
      agendamento,
    });
  }

  if (acao === "REAGENDAR") {
    if (!data || !hora) {
      return Response.json(
        { message: "Informe nova data e horário." },
        { status: 400 }
      );
    }

    const agendamentoAtual = await prisma.agendamento.findUnique({
      where: {
        id: agendamentoId,
      },
      include: {
        servico: true,
      },
    });

    if (!agendamentoAtual) {
      return Response.json(
        { message: "Agendamento não encontrado." },
        { status: 404 }
      );
    }

    const horaInicio = new Date(`${data}T${hora}:00`);
    const horaFim = new Date(
      horaInicio.getTime() + agendamentoAtual.servico.duracaoMin * 60000
    );

    const conflito = await prisma.agendamento.findFirst({
      where: {
        id: {
          not: agendamentoId,
        },
        status: {
          not: "CANCELADO",
        },
        horaInicio: {
          lt: horaFim,
        },
        horaFim: {
          gt: horaInicio,
        },
      },
    });

    if (conflito) {
      return Response.json(
        { message: "Este horário já está ocupado." },
        { status: 409 }
      );
    }

    const agendamento = await prisma.agendamento.update({
      where: {
        id: agendamentoId,
      },
      data: {
        data: new Date(`${data}T00:00:00`),
        horaInicio,
        horaFim,
        status: "CONFIRMADO",
      },
    });

    return Response.json({
      message: "Agendamento reagendado com sucesso.",
      agendamento,
    });
  }

  return Response.json({ message: "Ação inválida." }, { status: 400 });
}