"use client";

import * as React from "react";
import { WebsiteLink } from "@/lib/types";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import {
  EyeIcon,
  PencilIcon,
  EyeOffIcon,
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
import { IconPicker } from "@/components/icon-picker";
import { Input } from "@/components/ui/input";
import {
  WebsiteLinkFormSchema,
  WebsiteLinkFormValues,
} from "@/lib/validations";
import { useFormSubmit } from "@/hooks/use-form-submit";
import { toast } from "sonner";

export function WebsiteLinkForm({ item }: { item: WebsiteLink }) {
  const router = useRouter();
  const [isEditing, setIsEditing] = React.useState(false);

  const form = useForm<WebsiteLinkFormValues>({
    resolver: zodResolver(WebsiteLinkFormSchema),
    defaultValues: {
      title: item.title,
      url: item.url,
      iconId: item.iconId,
      archived: item.archived,
    },
  });

  const { loading, dirty, submit, remove } =
    useFormSubmit<WebsiteLinkFormValues>({
      initialData: {
        title: item.title,
        url: item.url,
        iconId: item.iconId,
        archived: item.archived,
      },
      formValues: form.getValues(),
      endpoint: `/api/manage/links/website/${item.id}`,
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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="border-glass bg-glass-secondary group rounded-lg border">
          <div className="flex items-center">
            <GripVerticalIcon className="ml-2 size-4 text-muted-foreground" />
            <div className="flex w-full items-center justify-between gap-4 p-4">
              <IconPicker
                iconId={form.watch("iconId")}
                setIconId={(iconId) => {
                  if (isEditing) {
                    form.setValue("iconId", iconId);
                  } else {
                    setIsEditing(true);
                  }
                }}
              />
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
                ) : (
                  <div>
                    <div className="text-sm text-foreground">
                      {form.getValues("title")}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {form.getValues("url")}
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
                          form.setValue(
                            "archived",
                            !form.getValues("archived"),
                          );
                          toast("Not implemented");
                        }}
                      >
                        {form.watch("archived") ? (
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
