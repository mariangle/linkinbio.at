"use client";

import * as React from "react";

import * as z from "zod";
import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { LinkFormValues, LinkFormSchema } from "@/lib/validations";
import { useFormSubmit } from "@/hooks/use-form-submit";

export function NewLinkForm() {
  const router = useRouter();
  const { biolink, setBiolink } = useBiolinkPreview();
  const [isOpen, setIsOpen] = React.useState(false);

  const form = useForm<LinkFormValues>({
    resolver: zodResolver(LinkFormSchema),
    defaultValues: {
      title: "",
      url: "",
      isTopIcon: false,
    },
  });

  const { loading, dirty, submit } = useFormSubmit<LinkFormValues>({
    initialData: {
      title: "",
      url: "",
      isTopIcon: false,
    },
    formValues: form.getValues(),
    endpoint: "/api/manage/links",
    modified: false,
  });

  const onSubmit = async () => {
    try {
      const data = await submit();

      if (biolink) {
        setBiolink({
          ...biolink,
          links: [...biolink.links, data],
        });
      }

      router.refresh();
      cancel();
    } catch (e) {
      console.log(e);
    }
  };

  const cancel = () => {
    setIsOpen(false);
    form.reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger
        className="flex max-w-xs items-center justify-center gap-2"
        asChild
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="w-full rounded-full"
          size="lg"
        >
          <PlusIcon className="mr-2 size-4 text-gray-300" />
          Add Link
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new Link</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4">
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
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormDescription>
                        Display this link in the top icon section?
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
            <DialogFooter className="mt-4">
              <Button type="button" onClick={cancel} variant="secondary">
                Cancel
              </Button>
              <Button loading={loading} disabled={!dirty}>
                Create Link
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
