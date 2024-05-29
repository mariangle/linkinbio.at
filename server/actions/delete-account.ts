"use server";

import { db } from "@/server/db";
import { auth } from "@/server/auth";
import { revalidatePath } from "next/cache";

export async function deleteAccount() {
  const session = await auth();

  if (!session?.user?.id) return null;

  await db.user.delete({
    where: {
      id: session.user.id,
    },
  });

  revalidatePath("/", "layout");
}
