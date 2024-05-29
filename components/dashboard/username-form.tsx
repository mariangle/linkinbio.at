"use client";

import * as React from "react";
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
import { UsernameFormSchema, UsernameFormValues } from "@/lib/validations";
import { useRouter } from "next/navigation";

export function UsernameForm() {
  const router = useRouter();
  const form = useForm<UsernameFormValues>({
    resolver: zodResolver(UsernameFormSchema),
    defaultValues: {
      username: "",
    },
  });

  const { loading, dirty, submit } = useFormSubmit({
    initialData: {
      username: "",
    },
    formValues: {
      username: form.getValues().username,
    },
    endpoint: "/api/manage/username",
  });

  async function onSubmit() {
    await submit();

    router.push("/dashboard");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto max-w-sm space-y-4"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative text-sm">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                    linkinbio.at/
                  </span>
                  <Input
                    className="pl-[85px]"
                    placeholder="username"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" loading={loading} disabled={!dirty}>
          Continue
        </Button>
      </form>
    </Form>
  );
}
