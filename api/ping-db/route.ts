import { NextResponse } from "next/server";
import { db } from "@/prisma/db";

export async function GET() {
  try {
    await db.user.findFirst();

    return NextResponse.json({
      status: "ok",
      message: "✅ MongoDB connected through Prisma",
    });
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    return NextResponse.json(
      { status: "error", message: "❌ MongoDB connection failed", error },
      { status: 500 }
    );
  }
}
