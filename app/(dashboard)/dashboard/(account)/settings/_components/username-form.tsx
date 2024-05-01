"use client";

import * as React from "react";
import * as z from "zod";
import { toast } from "sonner";

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
} from "@/components/dashboard/form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const FormSchema = z.object({
  username: z
    .string()
    .min(1, {
      message: "Username must be at least 1 characters.",
    })
    .max(20, {
      message: "Username must be at most 20 characters.",
    }),
});

export function UsernameForm({ username }: { username?: string }) {
  const [loading, setLoading] = React.useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: username ?? "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setLoading(true);
      const res = await fetch("/api/manage/username", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const { message, ok } = await res.json();

      if (ok) {
        toast.success(message);
      } else {
        toast.error(message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
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
                    <Input placeholder="shadcn" {...field} />
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
            <Button type="submit" variant="foreground" loading={loading}>
              Save
            </Button>
          </FormFooter>
        </FormContainer>
      </form>
    </Form>
  );
}
