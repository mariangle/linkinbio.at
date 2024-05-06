"use client";

import * as React from "react";
import { PlatformLink } from "@/lib/types";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { constructPlatformUrl } from "@/lib/utils/construct-link";

import {
  EyeIcon,
  EyeOffIcon,
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
import { useFormSubmit } from "@/hooks/use-form-submit";
import { getIconByProvider } from "@/lib/utils/icon";
import { toast } from "sonner";

export function PlatformLinkForm({ item }: { item: PlatformLink }) {
  const router = useRouter();
  const [isEditing, setIsEditing] = React.useState(false);
  const [archived, setArchived] = React.useState(item.archived);

  const form = useForm<PlatformLinkFormValues>({
    resolver: zodResolver(PlatformLinkFormSchema),
    defaultValues: {
      username: item.username,
      title: item.title,
      isTopIcon: item.isTopIcon,
      provider: item.provider,
    },
  });

  const { loading, dirty, submit, remove } =
    useFormSubmit<PlatformLinkFormValues>({
      initialData: {
        username: item.username,
        title: item.title,
        archived,
        isTopIcon: item.isTopIcon,
        provider: item.provider,
      },
      formValues: { ...form.getValues(), archived },
      endpoint: `/api/manage/links/platform/${item.id}`,
      modified: true,
    });

  const clear = () => {
    setIsEditing(false);
    form.reset();
  };

  const onSubmit = async () => {
    await submit();
    router.refresh();
  };

  const removeLink = async () => {
    await remove();
    router.refresh();
  };

  const Icon = getIconByProvider(item.provider);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="border-glass bg-glass-secondary group rounded-lg border">
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
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Title" {...field} />
                          </FormControl>
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
                            <Input placeholder="Username" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                ) : (
                  <div>
                    <div className="text-sm text-foreground">
                      {form.getValues("title")}
                    </div>
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
                      <button
                        type="button"
                        onClick={async () => {
                          setArchived(!archived);
                          toast("Not implemented");
                        }}
                      >
                        {archived ? (
                          <EyeOffIcon className="size-4" />
                        ) : (
                          <EyeIcon className="size-4" />
                        )}
                      </button>
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
