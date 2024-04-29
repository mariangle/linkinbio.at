import { auth } from "@/lib/auth";

export async function getUserId() {
  const session = await auth();
  return session?.user?.id;
}

export async function getUser() {
  const session = await auth();
  return session?.user;
}

export async function getSession() {
  return await auth();
}
