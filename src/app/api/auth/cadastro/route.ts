import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { nome, email, senha, telefone } = await req.json();

    if (!nome || !email || !senha || !telefone) {
      return Response.json(
        { message: "Preencha todos os campos." },
        { status: 400 }
      );
    }

    const usuarioExistente = await prisma.usuario.findUnique({
      where: { email },
    });

    if (usuarioExistente) {
      return Response.json(
        { message: "Este email já está cadastrado." },
        { status: 409 }
      );
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const usuario = await prisma.usuario.create({
      data: {
        nome,
        email,
        telefone,
        senha: senhaCriptografada,
        tipo: "CLIENTE",
      },
      select: {
        id: true,
        nome: true,
        email: true,
        telefone: true,
        tipo: true,
      },
    });

    return Response.json(
      {
        message: "Cadastro realizado com sucesso.",
        usuario,
      },
      { status: 201 }
    );
  } catch {
    return Response.json(
      { message: "Erro ao realizar cadastro." },
      { status: 500 }
    );
  }
}