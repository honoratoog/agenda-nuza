import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const data = searchParams.get("data");

  if (!data) {
    return Response.json([]);
  }

  const horariosBase = ["09:00", "09:30", "10:00", "11:00", "14:00", "15:30"];

  const inicioDia = new Date(`${data}T00:00:00`);
  const fimDia = new Date(`${data}T23:59:59`);

  const agendamentos = await prisma.agendamento.findMany({
    where: {
      horaInicio: {
        gte: inicioDia,
        lte: fimDia,
      },
      status: {
        not: "CANCELADO",
      },
    },
    select: {
      horaInicio: true,
      horaFim: true,
    },
  });

  const horariosOcupados = horariosBase.filter((hora) => {
    const horarioTeste = new Date(`${data}T${hora}:00`);

    return agendamentos.some((agendamento) => {
      return (
        horarioTeste >= agendamento.horaInicio &&
        horarioTeste < agendamento.horaFim
      );
    });
  });

  return Response.json(horariosOcupados);
}