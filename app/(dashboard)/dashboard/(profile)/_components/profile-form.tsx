"use client";

import * as React from "react";

import * as z from "zod";
import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ColorPicker } from "@/components/color-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormHeading,
  FormContainer,
  FormFooter,
  FormContent,
  FormSwitch,
} from "@/components/dashboard/form";
import {
  Form,
  FormControl,
  FormLabel,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { fonts } from "@/lib/constants/fonts";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";
import { Font } from "@/lib/types/enums";

const FormSchema = z.object({
  titleColor: z.string(),
  titleFont: z.string(),
  invertTextColor: z.boolean(),
  hideUsername: z.boolean(),
});

export function TitleForm({
  data,
  customized,
}: {
  data: {
    titleFont: Font;
    titleColor: string;
    invertTextColor: boolean;
    hideUsername: boolean;
  };
  customized?: boolean;
}) {
  const { biolink, setBiolink } = useBiolinkPreview();
  const [loading, setLoading] = React.useState(false);
  const [hasCustomized, setHasCustomized] = React.useState(customized);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      titleColor: data.titleColor,
      titleFont: data.titleFont,
      invertTextColor: data.invertTextColor,
      hideUsername: data.hideUsername,
    },
  });

  const invertTextColorWatch = form.watch("invertTextColor");
  const hideUsernameWatch = form.watch("hideUsername");
  const colorWatch = form.watch("titleColor");
  const fontWatch = form.watch("titleFont");

  React.useEffect(() => {
    if (!biolink) return;

    setBiolink({
      ...biolink,
      config: {
        ...biolink.config,
        profile: {
          ...biolink.config.profile,
          title: {
            color: form.getValues("titleColor"),
            font: form.getValues("titleFont") as Font,
          },
          invertTextColor: form.getValues("invertTextColor"),
          hideUsername: form.getValues("hideUsername"),
        },
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [invertTextColorWatch, hideUsernameWatch, colorWatch, fontWatch]);

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      setLoading(true);
      const res = await fetch("/api/manage/profile", {
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
            <FormHeading>Title</FormHeading>
            <div className="mt-2 flex items-center gap-4">
              <div className="space-y-2">
                <Label>Color</Label>
                <ColorPicker
                  color={form.getValues("titleColor")}
                  setColor={(color) => {
                    form.setValue("titleColor", color);
                  }}
                />
              </div>
              <FormField
                control={form.control}
                name="titleFont"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Style</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a top icon style" />
                      </SelectTrigger>
                      <SelectContent>
                        {fonts.map((item, index) => (
                          <SelectItem key={index} value={item.value}>
                            {item.name}
                          </SelectItem>
                        ))}
                        <SelectItem value="none">None</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormSwitch
              title="Invert Text Color"
              description="Toggle to manually invert the text color based on the background."
            >
              <FormField
                control={form.control}
                name="invertTextColor"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center gap-3 space-y-0 rounded-md">
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </FormSwitch>
            <FormSwitch
              title="Hide Username"
              description="Toggle to not display the username. You need a profile title to hide the username."
            >
              <FormField
                control={form.control}
                name="hideUsername"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center gap-3 space-y-0 rounded-md">
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </FormSwitch>
          </FormContent>
          <FormFooter>
            <Button loading={loading}>Reset</Button>
          </FormFooter>
        </FormContainer>
      </form>
    </Form>
  );
}
