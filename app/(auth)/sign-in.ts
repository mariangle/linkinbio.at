"use server";

import { signIn } from "@/server/auth";

export async function signInAction(formData: {
  email: string;
  password: string;
}) {
  await signIn("credentials", formData);
}
