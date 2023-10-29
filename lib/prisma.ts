import { PrismaClient } from "@prisma/client";

const prismaGlobal = global as unknown as { prisma: PrismaClient };

export const prisma = prismaGlobal.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") prismaGlobal.prisma = prisma;
