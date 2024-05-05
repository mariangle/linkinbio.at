"use client";

import * as React from "react";
import { Link } from "@/lib/types";

import * as z from "zod";
import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import {
  EyeIcon,
  PencilIcon,
  TrashIcon,
  GripVerticalIcon,
  XIcon,
  CheckIcon,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { IconPicker } from "@/components/icon-picker";
import { socials } from "@/lib/constants/social-links";
import { getDomain } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";
import { LinkFormValues, LinkFormSchema } from "@/lib/validations";
import { useFormSubmit } from "@/hooks/use-form-submit";

export function socialLink(url: string) {
  const social = socials.find((link) => url.includes(getDomain(link.url)));

  return social;
}

export function LinkForm({ item }: { item: Link }) {
  const router = useRouter();
  const { biolink, setBiolink } = useBiolinkPreview();
  const [isEditing, setIsEditing] = React.useState(false);

  const form = useForm<LinkFormValues>({
    resolver: zodResolver(LinkFormSchema),
    defaultValues: {
      title: item.title,
      url: item.url,
      isTopIcon: item.isTopIcon,
      iconId: item.iconId ?? undefined,
    },
  });

  const { loading, dirty, submit, remove } = useFormSubmit<LinkFormValues>({
    initialData: {
      title: "",
      url: "",
      isTopIcon: false,
    },
    formValues: form.getValues(),
    endpoint: `/api/manage/links/${item.id}`,
    modified: true,
  });

  const socialItem = socialLink(item.url);

  const clear = () => {
    setIsEditing(false);
    form.reset();
  };

  const onSubmit = async () => {
    try {
      const updatedLink = await submit();

      if (biolink) {
        const updatedLinks = biolink.links.map((link) => {
          if (link.id === updatedLink.id) {
            return updatedLink;
          }
          return link;
        });

        setBiolink({
          ...biolink,
          links: updatedLinks,
        });
      }

      setIsEditing(false);
    } catch (e) {
      console.error(e);
    }
  };

  const removeLink = async () => {
    try {
      const removedLink = await remove();

      if (biolink) {
        setBiolink({
          ...biolink,
          links: biolink.links?.filter((link) => link.id !== removedLink.id),
        });
      }

      router.refresh();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="group rounded-lg border bg-background dark:bg-secondary">
          <div className="flex items-center">
            <GripVerticalIcon className="ml-2 size-4 text-muted-foreground" />
            <div className="flex w-full items-center justify-between gap-4 p-4">
              {socialItem ? (
                <div className="flex rounded-full border border-border bg-foreground p-1">
                  <socialItem.icon className="size-4 cursor-not-allowed text-background" />
                </div>
              ) : (
                <IconPicker
                  iconId={form.watch("iconId")}
                  setIconId={(iconId) => {
                    form.setValue("iconId", iconId);
                  }}
                />
              )}
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
                    <FormField
                      control={form.control}
                      name="isTopIcon"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center gap-3 space-y-0 rounded-md">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel>Display as top icon</FormLabel>
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
                <div className="flex items-start gap-2 text-muted-foreground">
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
                      {socialItem && (
                        <button
                          type="button"
                          onClick={() => toast("not implemented yet")}
                        >
                          <EyeIcon className="size-4" />
                        </button>
                      )}
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
