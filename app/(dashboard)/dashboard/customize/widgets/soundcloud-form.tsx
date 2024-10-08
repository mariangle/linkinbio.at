"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FaSoundcloud } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useBiolinkPreviewStore } from "@/lib/store";
import { Switch } from "@/components/ui/switch";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { SoundcloudFormSchema, SoundcloudFormValues } from "@/lib/validations";
import { SoundcloudOptions as SoundcloudData } from "@/lib/types";
import { useForm } from "react-hook-form";
import { useFormSubmit } from "@/hooks/use-form-action";
import { zodResolver } from "@hookform/resolvers/zod";
import { ModuleButton } from "@/components/dashboard/module-button";
import { FormContainer, FormContent } from "@/components/dashboard/form";

export function SoundcloudForm({ data }: { data?: SoundcloudData }) {
  const { biolink, setBiolink } = useBiolinkPreviewStore();
  const [expanded, setExpanded] = React.useState(false);

  const form = useForm<SoundcloudFormValues>({
    resolver: zodResolver(SoundcloudFormSchema),
    defaultValues: {
      trackId: data?.trackId,
      enabled: data?.enabled,
    },
  });

  const { loading, dirty, submit, remove } =
    useFormSubmit<SoundcloudFormValues>({
      initialData: data,
      formValues: form.getValues(),
      endpoint: "/api/manage/widgets/soundcloud",
    });

  React.useEffect(() => {
    form.watch((value) => {
      if (biolink) {
        setBiolink({
          ...biolink,
          widgets: {
            ...biolink.widgets,
            soundcloud: {
              enabled: value.enabled ?? false,
              trackId: value.trackId || "",
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
    <FormContainer
      className={cn(
        data && !expanded && data.enabled && "bg-orange-600 text-white",
      )}
    >
      <FormContent>
        <div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex w-full items-center justify-between"
          >
            <div className="flex items-center gap-2 font-semibold">
              <FaSoundcloud className="size-5 text-orange-500" />
              Soundcloud
            </div>
            <ChevronDown
              className={cn(
                "size-5 rotate-0 duration-300",
                expanded && "rotate-180",
              )}
            />
          </button>
        </div>
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Form {...form}>
                <form
                  className="mt-4 space-y-6"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <div className="space-y-2">
                    <Label>Track ID</Label>
                    <FormField
                      control={form.control}
                      name="trackId"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center gap-3 space-y-0 rounded-md">
                          <FormControl>
                            <Input placeholder="Enter Track ID" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="border-glass bg-glass flex items-center justify-between gap-4 rounded-lg border p-3">
                    <div className="text-sm font-semibold">Enable</div>
                    <FormField
                      control={form.control}
                      name="enabled"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center gap-3 space-y-0 rounded-md">
                          <FormControl>
                            <Switch
                              className="data-[state=checked]:bg-orange-600 data-[state=unchecked]:bg-neutral-700"
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex items-center justify-end gap-4">
                    <ModuleButton
                      loading={loading}
                      variant="soundcloud"
                      type="submit"
                    >
                      Update
                    </ModuleButton>
                  </div>
                </form>
              </Form>
            </motion.div>
          )}
        </AnimatePresence>
      </FormContent>
    </FormContainer>
  );
}
