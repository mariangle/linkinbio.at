"use client";

import * as React from "react";

import * as z from "zod";
import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { XIcon, PlusIcon } from "lucide-react";
import { IconPicker } from "@/components/icon-picker";
import { Checkbox } from "@/components/ui/checkbox";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";
import {
  FormHeading,
  FormContainer,
  FormFooter,
  FormContent,
} from "@/components/dashboard/form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  title: z.string().max(20, {
    message: "Title must be at most 20 characters.",
  }),
  url: z.string().url(),
  isTopIcon: z.boolean().default(false),
  iconId: z.number().optional(),
});

export function NewLinkForm() {
  const router = useRouter();
  const { biolink, setBiolink } = useBiolinkPreview();
  const [loading, setLoading] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      url: "",
      isTopIcon: false,
    },
  });

  if (!isOpen) {
    return (
      <div className="flex max-w-xs items-center justify-start gap-2">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-full rounded-full"
          size="lg"
        >
          <PlusIcon className="mr-2 size-4 text-gray-300" />
          Add Link
        </Button>
      </div>
    );
  }

  const add = async (data: z.infer<typeof FormSchema>) => {
    try {
      setLoading(true);
      const res = await fetch("/api/biolink/manage/links", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const { message, ok, data: newLink } = await res.json();

      if (ok) {
        toast.success(message);

        if (!biolink) return;

        setBiolink({
          ...biolink,
          links: [...biolink.links, newLink],
        });

        router.refresh();
        cancel();
      } else {
        toast.error(message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const cancel = () => {
    setIsOpen(false);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(add)}>
        <FormContainer>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-2 top-2 rounded-full border bg-secondary p-1"
          >
            <XIcon className="size-3" />
          </button>
          <FormContent>
            <FormHeading>New Link</FormHeading>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div>
                  <IconPicker
                    iconId={form.watch("iconId")}
                    setIconId={(iconId) => {
                      form.setValue("iconId", iconId);
                      alert("Icon ID: " + iconId);
                    }}
                  />
                </div>
                <div className="w-full space-y-2">
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
              </div>
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
          </FormContent>
          <FormFooter>
            <Button type="button" onClick={cancel} variant="secondary">
              Cancel
            </Button>
            <Button loading={loading}>Add</Button>
          </FormFooter>
        </FormContainer>
      </form>
    </Form>
  );
}
