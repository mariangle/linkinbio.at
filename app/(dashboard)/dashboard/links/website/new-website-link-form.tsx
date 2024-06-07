"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  WebsiteLinkFormSchema,
  WebsiteLinkFormValues,
} from "@/lib/validations";
import { useFormSubmit } from "@/hooks/use-form-action";

export function NewWebsiteLinkForm() {
  const [isOpen, setIsOpen] = React.useState(false);

  const close = () => setIsOpen(false);

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
  };

  const cancel = () => {
    close();
    form.reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsOpen(true)}>
          <PlusIcon className="mr-2 size-3" />
          Add new Link
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new Link</DialogTitle>
        </DialogHeader>
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
      </DialogContent>
    </Dialog>
  );
}
