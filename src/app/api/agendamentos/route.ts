import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const usuarioId = searchParams.get("usuarioId");

  const agendamentos = await prisma.agendamento.findMany({
    where: usuarioId ? { usuarioId: Number(usuarioId) } : undefined,
    include: {
      servico: true,
      usuario: {
        select: {
          id: true,
          nome: true,
          email: true,
          telefone: true,
        },
      },
    },
    orderBy: {
      horaInicio: "asc",
    },
  });

  return Response.json(agendamentos);
}

export async function POST(req: Request) {
  try {
    const { usuarioId, servicoId, data, hora } = await req.json();

    if (!usuarioId || !servicoId || !data || !hora) {
      return Response.json(
        { message: "Preencha serviço, data e horário." },
        { status: 400 }
      );
    }

    const servico = await prisma.servico.findUnique({
      where: {
        id: Number(servicoId),
      },
    });

    if (!servico) {
      return Response.json(
        { message: "Serviço não encontrado." },
        { status: 404 }
      );
    }

    const horaInicio = new Date(`${data}T${hora}:00`);
    const horaFim = new Date(horaInicio.getTime() + servico.duracaoMin * 60000);

    const conflito = await prisma.agendamento.findFirst({
      where: {
        horaInicio,
        status: {
          not: "CANCELADO",
        },
      },
    });

    if (conflito) {
      return Response.json(
        { message: "Este horário já está ocupado." },
        { status: 409 }
      );
    }

    const agendamento = await prisma.agendamento.create({
      data: {
        usuarioId: Number(usuarioId),
        servicoId: Number(servicoId),
        data: new Date(`${data}T00:00:00`),
        horaInicio,
        horaFim,
        status: "CONFIRMADO",
      },
      include: {
        servico: true,
      },
    });

    return Response.json(
      {
        message: "Agendamento confirmado com sucesso.",
        agendamento,
      },
      { status: 201 }
    );
  } catch {
    return Response.json(
      { message: "Erro ao confirmar agendamento." },
      { status: 500 }
    );
  }
}