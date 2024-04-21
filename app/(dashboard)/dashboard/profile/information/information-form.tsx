"use client";

import * as React from "react";
import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export const contactSchema = z.object({
  subject: z
    .string()
    .min(2, {
      message: "Subject must be at least 2 characters.",
    })
    .max(30, {
      message: "Subject cannot exceed 100 characters.",
    }),
  contact_info: z
    .string()
    .min(2, {
      message: "Contact information must be at least 2 characters.",
    })
    .max(50, {
      message: "Contact information cannot exceed 100 characters.",
    }),
  message: z
    .string()
    .min(20, {
      message: "Message must be at least 20 characters.",
    })
    .max(500, {
      message: "Message cannot exceed 500 characters.",
    }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
export function InformationForm() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      contact_info: "",
      message: "",
      subject: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      form.reset();
    } catch (e) {
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 rounded-lg border p-4"
      >
        <div className="flex flex-col gap-4 md:flex-row">
          <div>
            <div className="size-16 rounded-full bg-red-500"></div>
          </div>
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Profile Image URL</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="h-px w-full bg-border"></div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profile Title</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="shadcn"
                  {...field}
                  rows={3}
                  className="bg-secondary"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={loading}
          size="lg"
          className="w-full rounded-full"
        >
          Save Changes
        </Button>
      </form>
    </Form>
  );
}
