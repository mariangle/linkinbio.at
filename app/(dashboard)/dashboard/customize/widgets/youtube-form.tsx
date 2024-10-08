"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FaYoutube } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useBiolinkPreviewStore } from "@/lib/store";
import { Switch } from "@/components/ui/switch";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { YoutubeFormSchema, YoutubeFormValues } from "@/lib/validations";
import { useForm } from "react-hook-form";
import { useFormSubmit } from "@/hooks/use-form-action";
import { zodResolver } from "@hookform/resolvers/zod";
import { ModuleButton } from "@/components/dashboard/module-button";
import { FormContainer, FormContent } from "@/components/dashboard/form";
import { YoutubeOptions as YoutubeData } from "@/lib/types";

export function YoutubeForm({ data }: { data?: YoutubeData }) {
  const { biolink, setBiolink } = useBiolinkPreviewStore();
  const [expanded, setExpanded] = React.useState(false);

  const form = useForm<YoutubeFormValues>({
    resolver: zodResolver(YoutubeFormSchema),
    defaultValues: {
      videoId: data?.videoId || "",
      enabled: data?.enabled || false,
    },
  });

  const { loading, dirty, submit } = useFormSubmit<YoutubeFormValues>({
    initialData: data,
    formValues: form.getValues(),
    endpoint: "/api/manage/widgets/youtube",
  });

  React.useEffect(() => {
    form.watch((value) => {
      if (biolink) {
        setBiolink({
          ...biolink,
          widgets: {
            ...biolink.widgets,
            youtube: {
              enabled: value.enabled ?? false,
              videoId: value.videoId || "",
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
        data && !expanded && data.enabled && "bg-red-600 text-white",
      )}
    >
      <FormContent>
        <div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex w-full items-center justify-between"
          >
            <div className="flex items-center gap-2 font-semibold">
              <FaYoutube className="size-5 text-red-500" />
              Youtube
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
                      name="videoId"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center gap-3 space-y-0 rounded-md">
                          <FormControl>
                            <Input placeholder="Enter Video ID" {...field} />
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
                              className="data-[state=checked]:bg-red-600 data-[state=unchecked]:bg-neutral-700"
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
                      variant="youtube"
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
