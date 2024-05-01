"use client";

import * as React from "react";
import { Image as ImageIcon } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useFormSubmit } from "@/hooks/use-form-submit";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";

import { Label } from "@/components/ui/label";
import { ColorPicker } from "@/components/color-picker";
import {
  FormHeading,
  FormContainer,
  FormFooter,
  FormContent,
} from "@/components/dashboard/form";
import { Button } from "@/components/ui/button";
import { ImagePicker } from "@/components/image-picker";
import { BackgroundFormSchema, BackgroundFormValues } from "@/lib/validations";
import { Form } from "@/components/ui/form";

export function BackgroundForm({
  data,
  modified,
}: {
  data: {
    color: string;
    url?: string;
  };
  modified?: boolean;
}) {
  const { biolink, setBiolink } = useBiolinkPreview();
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const form = useForm<BackgroundFormValues>({
    resolver: zodResolver(BackgroundFormSchema),
    defaultValues: {
      color: data.color,
      url: data.url,
    },
  });

  const { loading, dirty, submit } = useFormSubmit<BackgroundFormValues>({
    initialData: data,
    formValues: form.getValues(),
    endpoint: "/api/manage/background",
    modified,
  });

  React.useEffect(() => {
    form.watch((value) => {
      if (biolink) {
        setBiolink({
          ...biolink,
          config: {
            ...biolink.config,
            background: {
              color: value.color || data.color,
              url: value.url,
            },
          },
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.watch, biolink]);

  const onSubmit = async () => {
    await submit();
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
            <Button loading={loading} disabled={!dirty}>
              Save
            </Button>
          </FormFooter>
        </FormContainer>
      </form>
    </Form>
  );
}
