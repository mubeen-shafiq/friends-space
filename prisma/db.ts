import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}

async function connectToDatabase() {
  try {
    await db.$connect();
    console.log("Prisma connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB with Prisma:", error);
  } finally {
    await db.$disconnect();
  }
}

connectToDatabase();
