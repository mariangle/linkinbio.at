"use client";

import * as React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
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
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { useFormSubmit } from "@/hooks/use-form-submit";
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
      isTopIcon: false,
      archived: false,
    },
  });

  const { loading, dirty, submit } = useFormSubmit<PlatformLinkFormValues>({
    initialData: {
      provider: "",
      username: "",
      isTopIcon: false,
      archived: false,
    },
    formValues: form.getValues(),
    endpoint: "/api/manage/links/platform",
    modified: false,
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
          <FormField
            control={form.control}
            name="isTopIcon"
            render={({ field }) => (
              <FormItem className="border-glass bg-glass flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormDescription>
                    Display this link as a top icon?
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
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
