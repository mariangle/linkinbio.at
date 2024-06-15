"use client";

import * as React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Platform } from "@/lib/constants/platforms";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { useFormSubmit } from "@/hooks/use-form-action";
import {
  PlatformLinkFormSchema,
  PlatformLinkFormValues,
} from "@/lib/validations";

export function NewPlatformLinkForm({
  close,
  platform,
}: {
  close: () => void;
  platform: Platform;
}) {
  const router = useRouter();

  const form = useForm<PlatformLinkFormValues>({
    resolver: zodResolver(PlatformLinkFormSchema),
    defaultValues: {
      provider: platform.name,
      username: "",
    },
  });

  const { loading, dirty, submit } = useFormSubmit<PlatformLinkFormValues>({
    initialData: {
      provider: platform.name,
      username: "",
    },
    formValues: form.getValues(),
    endpoint: "/api/manage/links/platform",
    method: "POST",
  });

  const onSubmit = async () => {
    await submit();
    close();
    router.refresh();
  };

  const cancel = () => {
    close();
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="glassmorphism flex items-center gap-0 rounded-lg px-4">
                    <div className="flex items-center gap-2 text-sm">
                      <platform.icon />
                      {platform.baseURL ? `${platform.baseURL}` : ""}
                    </div>
                    <Input
                      variant="transparent"
                      placeholder="..."
                      {...field}
                      className="px-0"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-4 flex items-center justify-end gap-2">
          <Button type="button" onClick={cancel} variant="secondary">
            Cancel
          </Button>
          <Button loading={loading} disabled={!dirty}>
            Add Link
          </Button>
        </div>
      </form>
    </Form>
  );
}
