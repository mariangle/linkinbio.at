"use client";

import * as React from "react";
import z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  FormHeading,
  FormDescription as Description,
  FormContainer,
  FormFooter,
  FormContent,
  FormActions,
} from "@/components/dashboard/form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useFormSubmit } from "@/hooks/use-form-action";

export const EmailFormSchema = z.object({
  email: z.string().email(),
});

export type EmailFormValues = z.infer<typeof EmailFormSchema>;

export function EmailForm({ email }: { email?: string }) {
  const form = useForm<EmailFormValues>({
    resolver: zodResolver(EmailFormSchema),
    defaultValues: {
      email: email ?? "",
    },
  });

  const { loading, dirty, submit } = useFormSubmit({
    initialData: {
      email: email,
    },
    formValues: form.getValues(),
    endpoint: "/api/account/email",
  });

  async function onSubmit() {
    await submit();
  }

  function cancel() {
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormContainer>
          <FormContent>
            <div>
              <FormHeading>Email</FormHeading>
              <Description>Lorem ipsum dolor sit amet.</Description>
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FormContent>
          <FormFooter>
            <FormActions cancel={cancel} loading={loading} dirty={dirty} />
          </FormFooter>
        </FormContainer>
      </form>
    </Form>
  );
}
