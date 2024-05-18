"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FaSoundcloud } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useBiolinkPreviewStore } from "@/stores/biolink-preview-store";
import { Switch } from "@/components/ui/switch";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { SoundcloudFormSchema, SoundcloudFormValues } from "@/lib/validations";
import { useForm } from "react-hook-form";
import { useFormSubmit } from "@/hooks/use-form-submit";
import { zodResolver } from "@hookform/resolvers/zod";
import { ModuleButton } from "@/components/dashboard/module-button";
import { FormContainer, FormContent } from "@/components/dashboard/form";

export function SoundcloudForm({
  modified,
  data,
}: {
  modified?: boolean;
  data: {
    trackId: string;
    enabled: boolean;
  };
}) {
  const { biolink, setBiolink } = useBiolinkPreviewStore();
  const [expanded, setExpanded] = React.useState(false);

  const form = useForm<SoundcloudFormValues>({
    resolver: zodResolver(SoundcloudFormSchema),
    defaultValues: {
      trackId: data.trackId,
      enabled: data.enabled,
    },
  });

  const { loading, dirty, submit, remove } =
    useFormSubmit<SoundcloudFormValues>({
      initialData: data,
      formValues: form.getValues(),
      endpoint: "/api/manage/widgets/soundcloud",
      modified,
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

  const onDelete = async () => {
    await remove();

    form.reset({
      trackId: "",
      enabled: true,
    });
  };

  return (
    <FormContainer>
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
                    <Label>Video ID</Label>
                    <FormField
                      control={form.control}
                      name="trackId"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center gap-3 space-y-0 rounded-md">
                          <FormControl>
                            <Input placeholder="Enter Video ID" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4 rounded-lg border border-orange-500/5 bg-orange-500/20 p-3">
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
                    {modified && (
                      <ModuleButton onClick={onDelete} type="button">
                        Delete
                      </ModuleButton>
                    )}
                    <ModuleButton
                      loading={loading}
                      variant="soundcloud"
                      type="submit"
                    >
                      {modified ? "Update" : "Add"}
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
