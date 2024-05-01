"use client";

import * as React from "react";
import * as z from "zod";
import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { TopIconStyle } from "@/lib/types";
import { topIconStyles } from "@/lib/constants/top-icon-styles";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";
import { Checkbox } from "@/components/ui/checkbox";

const FormSchema = z.object({
  shadow: z.boolean(),
  style: z.string(),
});

export function TopIconForm({
  data,
  customized,
}: {
  data: {
    shadow: boolean;
    style?: string;
  };
  customized?: boolean;
}) {
  const [hasCustomized, setHasCustomized] = React.useState(customized);
  const { biolink, setBiolink } = useBiolinkPreview();
  const [loading, setLoading] = React.useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      shadow: data.shadow,
      style: data.style ?? undefined,
    },
  });

  const shadowWatch = form.watch("shadow");
  const stylewatch = form.watch("style");

  React.useEffect(() => {
    if (!biolink) return;

    setBiolink({
      ...biolink,
      config: {
        ...biolink.config,
        topIcon: {
          shadow: form.getValues("shadow"),
          style: form.getValues("style") as TopIconStyle | undefined,
        },
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shadowWatch, stylewatch]);

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      setLoading(true);
      const res = await fetch("/api/manage/top-icons", {
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
            <FormHeading>Top Icons</FormHeading>
            <FormSwitch
              title="Shadow"
              description="Add a drop shadow to the top icons."
            >
              <FormField
                control={form.control}
                name="shadow"
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
            <FormField
              control={form.control}
              name="style"
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
                      {topIconStyles.map((item, index) => (
                        <SelectItem key={index} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                      <SelectItem value="none">None</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FormContent>
          <FormFooter>
            <Button loading={loading} variant="foreground">
              Save
            </Button>
          </FormFooter>
        </FormContainer>
      </form>
    </Form>
  );
}
