"use client";

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
} from "@/components/ui/form";
import { useRouter } from "next/navigation";

export const RegisterFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export type RegisterFormValues = z.infer<typeof RegisterFormSchema>;

export function LoginForm() {
  const router = useRouter();
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { loading, dirty, submit } = useFormSubmit({
    formValues: form.getValues(),
    endpoint: "/api/auth/login",
    method: "POST",
  });

  async function onSubmit() {
    try {
      await submit();
      router.push("/dashboard");
      alert("shoud redirect yessh");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="pointer-events-auto w-full space-y-4"
      >
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
                <Input placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full"
          loading={loading}
          disabled={!dirty}
        >
          Log In
        </Button>
      </form>
    </Form>
  );
}
