import { prisma } from "@/lib/prisma";

export async function GET() {
  const servicos = await prisma.servico.findMany({
    orderBy: [{ categoria: "asc" }, { nome: "asc" }],
  });

  return Response.json(servicos);
}

export async function POST(req: Request) {
  try {
    const { nome, descricao, preco, duracaoMin, categoria } = await req.json();

    if (!nome || !preco || !duracaoMin || !categoria) {
      return Response.json(
        { message: "Preencha os campos obrigatórios." },
        { status: 400 }
      );
    }

    const servico = await prisma.servico.create({
      data: {
        nome,
        descricao,
        preco: Number(preco),
        duracaoMin: Number(duracaoMin),
        categoria,
        ativo: true,
      },
    });

    return Response.json(servico, { status: 201 });
  } catch {
    return Response.json(
      { message: "Erro ao criar serviço." },
      { status: 500 }
    );
  }
}