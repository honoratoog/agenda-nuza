import { prisma } from "@/lib/prisma";

type Context = {
  params: Promise<{
    id: string;
  }>;
};

export async function PATCH(req: Request, context: Context) {
  try {
    const { id } = await context.params;
    const servicoId = Number(id);

    if (Number.isNaN(servicoId)) {
      return Response.json({ message: "ID inválido." }, { status: 400 });
    }

    const body = await req.json();

    const servico = await prisma.servico.update({
      where: {
        id: servicoId,
      },
      data: {
        ...(body.nome !== undefined && { nome: body.nome }),
        ...(body.descricao !== undefined && { descricao: body.descricao }),
        ...(body.preco !== undefined && { preco: Number(body.preco) }),
        ...(body.duracaoMin !== undefined && {
          duracaoMin: Number(body.duracaoMin),
        }),
        ...(body.categoria !== undefined && { categoria: body.categoria }),
        ...(body.ativo !== undefined && { ativo: body.ativo }),
      },
    });

    return Response.json(servico);
  } catch {
    return Response.json(
      { message: "Erro ao atualizar serviço." },
      { status: 500 }
    );
  }
}