"use client";

import * as React from "react";
import z from "zod";
import { useFormSubmit } from "@/hooks/use-form-action";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";

export const RegisterFormSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(20, "Username must be at most 20 characters long")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores",
    ),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export type RegisterFormValues = z.infer<typeof RegisterFormSchema>;

export function RegisterForm({ username }: { username?: string }) {
  const router = useRouter();
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      username: username || "",
      email: "",
      password: "",
    },
  });

  const { loading, dirty, submit } = useFormSubmit({
    formValues: form.getValues(),
    endpoint: "/api/auth/register",
    method: "POST",
  });

  async function onSubmit() {
    try {
      await submit();
      router.push("/sign-in");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="pointer-events-auto mx-auto max-w-sm space-y-4"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative text-sm">
                  <span className="absolute inset-y-0 left-0 z-50 flex items-center pl-3 text-white">
                    linkinbio.at/
                  </span>
                  <Input
                    className="pl-[88px]"
                    placeholder="username"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" loading={loading}>
          Sign Up
        </Button>
      </form>
    </Form>
  );
}
