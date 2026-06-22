import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

type Context = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(_req: Request, context: Context) {
  const { id } = await context.params;
  const usuarioId = Number(id);

  if (Number.isNaN(usuarioId)) {
    return Response.json(
      { message: "ID inválido." },
      { status: 400 }
    );
  }

  const usuario = await prisma.usuario.findUnique({
    where: {
      id: usuarioId,
    },
    select: {
      id: true,
      nome: true,
      email: true,
      telefone: true,
      tipo: true,
      ativo: true,
      createdAt: true,
    },
  });

  if (!usuario) {
    return Response.json(
      { message: `Usuário ${usuarioId} não encontrado.` },
      { status: 404 }
    );
  }

  return Response.json(usuario);
}

export async function PUT(req: Request, context: Context) {
  const { id } = await context.params;
  const usuarioId = Number(id);

  if (Number.isNaN(usuarioId)) {
    return Response.json(
      { message: "ID inválido." },
      { status: 400 }
    );
  }

  const { nome, email, telefone, senha } = await req.json();

  if (!nome || !email || !telefone) {
    return Response.json(
      { message: "Nome, email e telefone são obrigatórios." },
      { status: 400 }
    );
  }

  const emailEmUso = await prisma.usuario.findFirst({
    where: {
      email,
      NOT: {
        id: usuarioId,
      },
    },
  });

  if (emailEmUso) {
    return Response.json(
      { message: "Este email já está em uso por outro usuário." },
      { status: 409 }
    );
  }

  const data: {
    nome: string;
    email: string;
    telefone: string;
    senha?: string;
  } = {
    nome,
    email,
    telefone,
  };

  if (senha) {
    data.senha = await bcrypt.hash(senha, 10);
  }

  const usuario = await prisma.usuario.update({
    where: {
      id: usuarioId,
    },
    data,
    select: {
      id: true,
      nome: true,
      email: true,
      telefone: true,
      tipo: true,
    },
  });

  return Response.json({
    message: "Usuário atualizado com sucesso.",
    usuario,
  });
}