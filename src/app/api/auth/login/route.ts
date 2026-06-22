import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { email, senha } = await req.json();

    if (!email || !senha) {
      return Response.json(
        { message: "Informe email e senha." },
        { status: 400 }
      );
    }

    const usuario = await prisma.usuario.findUnique({
      where: { email },
    });

    if (!usuario || !usuario.ativo) {
      return Response.json(
        { message: "Email ou senha inválidos." },
        { status: 401 }
      );
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      return Response.json(
        { message: "Email ou senha inválidos." },
        { status: 401 }
      );
    }

    return Response.json({
      message: "Login realizado com sucesso.",
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        telefone: usuario.telefone,
        tipo: usuario.tipo,
      },
    });
  } catch {
    return Response.json(
      { message: "Erro ao realizar login." },
      { status: 500 }
    );
  }
}