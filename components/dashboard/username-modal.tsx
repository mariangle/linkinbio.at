"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import * as React from "react";
import { useFormSubmit } from "@/hooks/use-form-submit";
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
import { UserFormSchema, UserFormValues } from "@/lib/validations";

export function UsernameDialog({ isOpen }: { isOpen: boolean }) {
  const [defaultOpen, setDefaultOpen] = React.useState(isOpen);

  const isMounted = useMounted();
  const form = useForm<UserFormValues>({
    resolver: zodResolver(UserFormSchema),
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

  if (!isMounted) return null;

  async function onSubmit() {
    await submit();
    setDefaultOpen(false);
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
            <div className="mt-4 flex justify-end">
              <Button type="submit" loading={loading} disabled={!dirty}>
                Save Username
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
