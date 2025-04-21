import { db  } from "@/prisma/db";
import { compare } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = await db.user.findUnique({ where: { email } });
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  const isValid = await compare(password, user.password);
  if (!isValid) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }

  return NextResponse.json(
    { user: { id: user.id, email: user.email, name: user.name } },
    { status: 200 }
  );
}
