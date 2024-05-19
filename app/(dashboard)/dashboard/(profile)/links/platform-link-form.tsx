"use client";

import * as React from "react";
import { PlatformLink } from "@/lib/types";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { constructPlatformUrl } from "@/lib/utils/construct-link";

import {
  PencilIcon,
  TrashIcon,
  GripVerticalIcon,
  XIcon,
  CheckIcon,
} from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  PlatformLinkFormSchema,
  PlatformLinkFormValues,
} from "@/lib/validations";
import { useFormSubmit } from "@/hooks/use-form-action";
import { getIconByProvider } from "@/lib/utils/icon";

export function PlatformLinkForm({ item }: { item: PlatformLink }) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [isDeleted, setIsDeleted] = React.useState(false);
  const [data, setData] = React.useState<PlatformLink>(item);

  const form = useForm<PlatformLinkFormValues>({
    resolver: zodResolver(PlatformLinkFormSchema),
    defaultValues: {
      username: data.username,
      provider: data.provider,
    },
  });

  const { loading, dirty, submit, remove } =
    useFormSubmit<PlatformLinkFormValues>({
      initialData: {
        username: data.username,
        provider: data.provider,
      },
      formValues: form.getValues(),
      endpoint: `/api/manage/links/platform/${data.id}`,
    });

  if (isDeleted) {
    return null;
  }

  const clear = () => {
    setIsEditing(false);
    form.reset();
  };

  const onSubmit = async () => {
    await submit();
    setIsEditing(false);
    setData({
      ...data,
      username: form.getValues("username"),
      provider: form.getValues("provider") as string,
    });
  };

  const removeLink = async () => {
    await remove();
    setIsDeleted(true);
  };

  const Icon = getIconByProvider(data.provider);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="border-glass bg-glass group rounded-lg border">
          <div className="flex items-center">
            <GripVerticalIcon className="ml-2 size-4 text-muted-foreground" />
            <div className="flex w-full items-center justify-between gap-4 p-4">
              <div className="rounded-full bg-foreground p-1 text-background">
                <Icon />
              </div>
              <div className="flex w-full items-center justify-between gap-4">
                {isEditing ? (
                  <div className="w-full space-y-1.5">
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Username" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                ) : (
                  <div>
                    <div className="text-xs text-muted-foreground">
                      {constructPlatformUrl({
                        provider: form.getValues("provider")!,
                        username: form.getValues("username"),
                      })}
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-2 text-muted-foreground">
                  {isEditing ? (
                    <div className="flex items-center gap-2">
                      <button type="button" onClick={clear}>
                        <XIcon className="size-4" />
                      </button>
                      <button disabled={loading || !dirty}>
                        <CheckIcon className="size-4" />
                      </button>
                    </div>
                  ) : (
                    <button type="button" onClick={() => setIsEditing(true)}>
                      <PencilIcon className="size-4" />
                    </button>
                  )}
                  {!isEditing && (
                    <>
                      <button type="button" onClick={removeLink}>
                        <TrashIcon className="size-0 duration-300 group-hover:size-4" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
