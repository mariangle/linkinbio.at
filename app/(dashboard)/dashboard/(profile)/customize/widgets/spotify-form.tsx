"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FaSpotify } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useBiolinkPreviewStore } from "@/lib/store";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { ContentType } from "@/lib/types";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { SpotifyFormValues, SpotifyFormSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useFormSubmit } from "@/hooks/use-form-action";
import { ModuleButton } from "@/components/dashboard/module-button";
import { FormContainer, FormContent } from "@/components/dashboard/form";
import { SpotifyOptions as SpotifyData } from "@/lib/types";

const tabs = [
  {
    name: "Track",
    value: ContentType.Track,
  },
  {
    name: "Album",
    value: ContentType.Album,
  },
  {
    name: "Playlist",
    value: ContentType.Playlist,
  },
];

export function SpotifyForm({ data }: { data?: SpotifyData }) {
  const { biolink, setBiolink } = useBiolinkPreviewStore();
  const [expanded, setExpanded] = React.useState(false);
  const [tab, setTab] = React.useState(
    tabs.find((item) => item.value === data?.type) ?? tabs[0],
  );

  const form = useForm<SpotifyFormValues>({
    resolver: zodResolver(SpotifyFormSchema),
    defaultValues: {
      contentId: data?.contentId,
      type: data?.type,
      enabled: data?.enabled ?? true,
      darkBackground: data?.darkBackground,
      compactLayout: data?.compactLayout,
    },
  });

  const { loading, submit } = useFormSubmit<SpotifyFormValues>({
    initialData: {
      contentId: data?.contentId ?? "",
      type: data?.type ?? ContentType.Track,
      enabled: data?.enabled ?? true,
      darkBackground: data?.darkBackground ?? false,
      compactLayout: data?.compactLayout ?? false,
    },
    formValues: { ...form.getValues(), type: tab.value },
    endpoint: "/api/manage/widgets/spotify",
  });

  React.useEffect(() => {
    form.watch((value) => {
      if (biolink) {
        setBiolink({
          ...biolink,
          widgets: {
            ...biolink.widgets,
            spotify: {
              contentId: value.contentId ?? "",
              type: tab.value,
              enabled: value.enabled ?? false,
              darkBackground: value.darkBackground ?? false,
              compactLayout: value.compactLayout ?? false,
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
    <FormContainer>
      <FormContent>
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              className="flex items-center gap-2 font-semibold"
              onClick={() => setExpanded(!expanded)}
            >
              <FaSpotify className="size-5 text-green-500" />
              Spotify
            </button>
          </div>
          <button onClick={() => setExpanded(!expanded)}>
            <ChevronDown
              className={cn(
                "size-5  rotate-0 duration-300",
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
                  <div className="border-glass flex w-fit items-center gap-2 rounded-md border bg-input/50 p-1 text-muted-foreground/50">
                    {tabs.map((item, index) => (
                      <button
                        key={index}
                        type="button"
                        className={cn(
                          "px-3 py-1.5 text-sm",
                          item.name === tab.name &&
                            "bg-glass-secondary rounded-lg text-foreground",
                        )}
                        onClick={() => {
                          setTab(item);
                          form.setValue("contentId", "");
                        }}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                  <div className="h-px w-full bg-gradient-to-r from-green-300/20 to-neutral-600"></div>
                  <div className="space-y-2">
                    <Label className="text-white">{tab.name} ID</Label>
                    <FormField
                      control={form.control}
                      name="contentId"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center gap-3 space-y-0 rounded-md">
                          <FormControl>
                            <Input
                              placeholder={`Enter ${tab.name} ID`}
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="text-sm">Dark Background</div>
                      <FormField
                        control={form.control}
                        name="darkBackground"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center gap-3 space-y-0 rounded-md">
                            <FormControl>
                              <Checkbox
                                className="border-green-500 data-[state=checked]:bg-green-500"
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    {tab.value !== ContentType.Track && (
                      <div className="flex items-center justify-between">
                        <div className="text-sm">Compact Layout</div>
                        <FormField
                          control={form.control}
                          name="compactLayout"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center gap-3 space-y-0 rounded-md">
                              <FormControl>
                                <Checkbox
                                  className="border-green-500 data-[state=checked]:bg-green-500"
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between gap-4 rounded-lg border border-green-500/5 bg-green-500/20 p-3">
                    <div className="text-sm font-semibold">Enable</div>
                    <FormField
                      control={form.control}
                      name="enabled"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center gap-3 space-y-0 rounded-md">
                          <FormControl>
                            <Switch
                              className="data-[state=checked]:bg-green-600 data-[state=unchecked]:bg-neutral-700"
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
                      variant="spotify"
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
