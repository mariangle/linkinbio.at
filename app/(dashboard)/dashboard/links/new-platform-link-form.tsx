"use client";

import * as React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { platforms } from "@/lib/constants/platforms";
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

export function NewPlatformLinkForm({ close }: { close: () => void }) {
  const router = useRouter();

  const form = useForm<PlatformLinkFormValues>({
    resolver: zodResolver(PlatformLinkFormSchema),
    defaultValues: {
      provider: "",
      username: "",
    },
  });

  const { loading, dirty, submit } = useFormSubmit<PlatformLinkFormValues>({
    initialData: {
      provider: "",
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
            name="provider"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {platforms.map((item, index) => (
                      <SelectItem key={index} value={item.name}>
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Username or name" {...field} />
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
