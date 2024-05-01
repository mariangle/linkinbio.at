"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import * as React from "react";
import * as z from "zod";
import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useMounted } from "@/hooks/use-mounted";

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

export function UsernameDialog({ isOpen }: { isOpen: boolean }) {
  const [defaultOpen, setDefaultOpen] = React.useState(isOpen);
  const [loading, setLoading] = React.useState(false);

  const isMounted = useMounted();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });
  if (!isMounted) return null;

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
        setDefaultOpen(false);
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
    <Dialog open={defaultOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Welcome onboard 🎉</DialogTitle>
          <DialogDescription>
            Let&apos;s add a username to your profile to make it unique. You can
            change it later if you like, but for now, let&apos;s get started.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Your username" {...field} />
                  </FormControl>
                  <FormDescription>
                    Your link will be available at linkinbio.at/{field.value}.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button
                type="submit"
                variant="foreground"
                className="mt-4"
                loading={loading}
              >
                Save Username
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
