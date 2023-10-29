"use server";

import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { z } from "zod";

export async function getSkills() {
  return (await prisma.skill.findMany())
    .sort((a, b) =>
      a.weight !== b.weight ? a.weight - b.weight : a.name > b.name ? 1 : -1
    )
    .map((skill) => skill.name);
}

export async function upsertSkill(formData: FormData) {
  if (
    (await getServerSession())?.user?.email ===
    process.env.NEXT_PUBLIC_ADMIN_EMAIL
  ) {
    const { skill, weight } = z
      .object({
        skill: z.string().min(1),
        weight: z.coerce.number().int(),
      })
      .parse(Object.fromEntries(formData.entries()));
    await prisma.skill.upsert({
      where: { name: skill },
      create: {
        name: skill,
        weight,
      },
      update: {
        weight,
      },
    });
  }
  return await getSkills();
}

export async function deleteSkill(skill: string) {
  if (
    (await getServerSession())?.user?.email ===
    process.env.NEXT_PUBLIC_ADMIN_EMAIL
  )
    await prisma.skill.delete({
      where: { name: skill },
    });
  return await getSkills();
}
