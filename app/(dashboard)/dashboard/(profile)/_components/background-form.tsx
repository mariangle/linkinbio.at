"use client";

import * as React from "react";
import * as z from "zod";

import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { ColorPicker } from "@/components/color-picker";
import { BackgroundOptions } from "@/lib/types";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";
import {
  FormHeading,
  FormContainer,
  FormFooter,
  FormContent,
} from "@/components/dashboard/form";
import { Button } from "@/components/ui/button";
import { ImagePicker } from "@/components/image-picker";
import { Image as ImageIcon } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const FormSchema = z.object({
  color: z.string(),
  url: z.string().optional(),
});

export function BackgroundForm({
  data,
  customized,
}: {
  data: {
    color: string;
    url?: string;
  };
  customized?: boolean;
}) {
  const [hasCustomized, setHasCustomized] = React.useState(customized);
  const { biolink, setBiolink } = useBiolinkPreview();
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      color: data.color,
      url: data.url ?? undefined,
    },
  });

  const colorWatch = form.watch("color");
  const urlWatch = form.watch("url");

  React.useEffect(() => {
    if (!biolink) return;

    setBiolink({
      ...biolink,
      config: {
        ...biolink.config,
        background: {
          color: form.getValues("color"),
          url: form.getValues("url"),
        },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorWatch, urlWatch]);

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      setLoading(true);
      const res = await fetch("/api/manage/background", {
        method: hasCustomized ? "PATCH" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const { message, ok } = await res.json();

      if (ok) {
        toast.success(message);
        setHasCustomized(true);
      } else {
        toast.error(message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormContainer>
          <FormContent>
            <FormHeading>Background</FormHeading>
            <div className="space-y-2">
              <ImagePicker
                url={form.getValues("url")}
                setUrl={(url) => {
                  form.setValue("url", url || "");
                }}
                open={dialogOpen}
                setOpen={setDialogOpen}
              >
                <button className="flex w-full items-center gap-2 rounded-lg border bg-input px-2 py-3">
                  <ImageIcon className="size-5 text-muted-foreground" />
                  <div className="truncate whitespace-nowrap text-sm">
                    {form.getValues("url") || "Add a background image"}
                  </div>
                </button>
              </ImagePicker>
              <div className="text-sm text-muted-foreground">
                The image will serve as either a cover photo or override the
                background color, depending on the layout.
              </div>
            </div>
            <div className="space-y-2">
              <Label>Background Color</Label>
              <ColorPicker
                color={form.getValues("color")}
                setColor={(color) => form.setValue("color", color)}
              />
            </div>
          </FormContent>
          <FormFooter>
            <Button loading={loading}>Save</Button>
          </FormFooter>
        </FormContainer>
      </form>
    </Form>
  );
}
