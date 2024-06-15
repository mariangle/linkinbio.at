"use client";

import * as React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useFormSubmit } from "@/hooks/use-form-action";
import { useBiolinkPreviewStore } from "@/lib/store";

import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Pencil } from "lucide-react";
import { ImagePicker } from "@/components/image-picker";
import { ProfilePicture } from "@/components/biolink/profile-picture";
import { FormActions } from "@/components/dashboard/form";
import {
  Form,
  FormControl,
  FormLabel,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { ProfileFormSchema, ProfileFormValues } from "@/lib/validations";
import type { User as UserData } from "@/lib/types";
import { Button } from "@/components/ui/button";

export function ProfileForm({ data }: { data: UserData }) {
  const { biolink, setBiolink } = useBiolinkPreviewStore();

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(ProfileFormSchema),
    defaultValues: {
      title: data.title,
      bio: data.bio,
      image: data.image,
      occupation: data.occupation,
      location: data.location,
    },
  });

  const { loading, dirty, submit } = useFormSubmit<ProfileFormValues>({
    initialData: data,
    formValues: form.getValues(),
    endpoint: "/api/manage/profile",
  });

  React.useEffect(() => {
    form.watch((value) => {
      if (biolink) {
        setBiolink({
          ...biolink,
          user: {
            ...biolink.user,
            title: value.title,
            bio: value.bio,
            image: value.image,
            occupation: value.occupation,
            location: value.location,
          },
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.watch, biolink]);

  async function onSubmit() {
    await submit();
  }

  function onCancel() {
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="relative flex h-fit w-full flex-row gap-4">
          <ProfilePicture src={form.getValues("image")} className="size-20" />
          <div className="flex w-full flex-col gap-4">
            <ImagePicker
              url={form.getValues("image")}
              setUrl={(url) => {
                form.setValue("image", url || "");
              }}
            >
              <Button className="w-full rounded-full" type="button">
                Change
              </Button>
            </ImagePicker>
            <Button
              variant="secondary"
              type="button"
              className="w-full rounded-full"
              onClick={() => {
                form.setValue("image", "");
              }}
            >
              Remove
            </Button>
          </div>
        </div>
        <div className="my-4 space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Your title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea placeholder="Your bio" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="occupation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Occupation</FormLabel>
                  <FormControl>
                    <Input placeholder="Your occupation" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="Your location" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-end">
            <FormActions loading={loading} cancel={onCancel} dirty={dirty} />
          </div>
        </div>
      </form>
    </Form>
  );
}
