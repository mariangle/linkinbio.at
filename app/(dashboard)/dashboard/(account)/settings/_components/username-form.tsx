"use client";

import * as React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { UserFormSchema, UserFormValues } from "@/lib/validations";
import { useFormSubmit } from "@/hooks/use-form-submit";

export function UsernameForm({ username }: { username?: string }) {
  const form = useForm<UserFormValues>({
    resolver: zodResolver(UserFormSchema),
    defaultValues: {
      username: username ?? "",
    },
  });

  const { loading, dirty, submit } = useFormSubmit({
    initialData: {
      username: username,
    },
    formValues: {
      username: form.getValues().username,
    },
    endpoint: "/api/manage/username",
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
              <FormHeading>Username</FormHeading>
              <Description>
                Your username is how people find you on linkinbio.at/
                <span className="text-foreground">{username}</span>. It&apos;s
                unique to you and can only be changed once every 14 days.
              </Description>
            </div>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Your username" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
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
