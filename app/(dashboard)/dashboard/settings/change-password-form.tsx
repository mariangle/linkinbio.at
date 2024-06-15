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

export const PasswordFormSchema = z.object({
  oldPassword: z.string().min(8),
  newPassword: z.string().min(8),
});

export type EmailFormValues = z.infer<typeof PasswordFormSchema>;

export function ChangePasswordForm() {
  const form = useForm<EmailFormValues>({
    resolver: zodResolver(PasswordFormSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
    },
  });

  const { loading, dirty, submit } = useFormSubmit({
    formValues: form.getValues(),
    endpoint: "/api/account/password",
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
              <FormHeading>Change Password</FormHeading>
              <Description>Lorem ipsum dolor sit amet.</Description>
            </div>
            <FormField
              control={form.control}
              name="oldPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Your old password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Your new password" {...field} />
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
