"use server";

import { db } from "@/server/db";
import { getCurrentUser } from "@/lib/functions/auth";
import { revalidatePath } from "next/cache";

export async function deleteAccount() {
  const currentUser = await getCurrentUser();

  if (!currentUser) return null;

  await db.user.delete({
    where: {
      id: currentUser.id,
    },
  });

  revalidatePath("/", "layout");
}
