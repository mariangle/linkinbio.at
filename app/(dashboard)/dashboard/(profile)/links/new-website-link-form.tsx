"use client";

import * as React from "react";

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
import {
  WebsiteLinkFormSchema,
  WebsiteLinkFormValues,
} from "@/lib/validations";
import { useFormSubmit } from "@/hooks/use-form-action";

export function NewWebsiteLinkForm({ close }: { close: () => void }) {
  const router = useRouter();

  const form = useForm<WebsiteLinkFormValues>({
    resolver: zodResolver(WebsiteLinkFormSchema),
    defaultValues: {
      url: "",
    },
  });

  const { loading, dirty, submit } = useFormSubmit<WebsiteLinkFormValues>({
    initialData: {
      url: "",
    },
    formValues: form.getValues(),
    endpoint: "/api/manage/links/website",
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
            name="url"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="URL" {...field} />
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
