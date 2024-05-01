"use client";

import * as React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useFormSubmit } from "@/hooks/use-form-submit";
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
import { TopIconsFormSchema, TopIconsFormValues } from "@/lib/validations";

export function TopIconForm({
  data,
  modified,
}: {
  data: {
    shadow: boolean;
    style?: string;
  };
  modified?: boolean;
}) {
  const { biolink, setBiolink } = useBiolinkPreview();

  const form = useForm<TopIconsFormValues>({
    resolver: zodResolver(TopIconsFormSchema),
    defaultValues: {
      shadow: data.shadow,
      style: data.style,
    },
  });

  React.useEffect(() => {
    form.watch((value) => {
      if (biolink) {
        setBiolink({
          ...biolink,
          config: {
            ...biolink.config,
            topIcon: {
              shadow: value.shadow ?? data.shadow,
              style: value.style as TopIconStyle | undefined,
            },
          },
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.watch, biolink]);

  const { loading, dirty, submit } = useFormSubmit<TopIconsFormValues>({
    initialData: data,
    formValues: form.getValues(),
    endpoint: "/api/manage/top-icons",
    modified,
  });

  const onSubmit = async () => {
    await submit();
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
            <Button disabled={!dirty} loading={loading}>
              Save Changes
            </Button>
          </FormFooter>
        </FormContainer>
      </form>
    </Form>
  );
}
