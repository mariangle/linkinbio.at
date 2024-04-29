"use client";

import * as React from "react";

import * as z from "zod";
import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { User } from "@/lib/types";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";
import { ImagePicker } from "@/components/image-picker";
import { ProfilePicture } from "@/components/biolink/profile-picture";
import {
  Form,
  FormControl,
  FormDescription,
  FormLabel,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const FormSchema = z.object({
  title: z.string().max(20, {
    message: "Title must be at most 20 characters.",
  }),
  bio: z.string().max(160, {
    message: "Bio must be at most 160 characters.",
  }),
  image: z.string().url(),
  occupation: z.string().max(20, {
    message: "Occupation must be at most 20 characters.",
  }),
  location: z.string().max(20, {
    message: "Location must be at most 20 characters.",
  }),
});

export function ProfileForm({
  data,
}: {
  data: {
    title?: string;
    bio?: string;
    image?: string;
    occupation?: string;
    location?: string;
  };
}) {
  const { biolink, setBiolink } = useBiolinkPreview();
  const [loading, setLoading] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: data.title ?? "",
      bio: data.bio ?? "",
      image: data.image ?? "",
      occupation: data.occupation ?? "",
      location: data.location ?? "",
    },
  });

  const titleWatch = form.watch("title");
  const bioWatch = form.watch("bio");
  const imageWatch = form.watch("image");
  const occupationWatch = form.watch("occupation");
  const locationWatch = form.watch("location");

  React.useEffect(() => {
    if (!biolink) return;

    setBiolink({
      ...biolink,
      user: {
        ...biolink.user,
        title: form.getValues("title"),
        bio: form.getValues("bio"),
        image: form.getValues("image"),
        occupation: form.getValues("occupation"),
        location: form.getValues("location"),
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [titleWatch, bioWatch, imageWatch, occupationWatch, locationWatch]);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setLoading(true);
      const res = await fetch("/api/biolink/manage/profile", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const { message, ok } = await res.json();

      if (ok) {
        toast.success(message);
      } else {
        toast.error(message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="relative h-fit w-fit">
          <ProfilePicture src={form.getValues("image")} className="size-20" />
          <ImagePicker
            url={form.getValues("image")}
            setUrl={(url) => {
              form.setValue("image", url || "");
            }}
            open={dialogOpen}
            setOpen={setDialogOpen}
          >
            <button className="absolute bottom-0 right-0 grid place-content-center rounded-full bg-primary p-1.5">
              <Pencil className="size-3 text-white" />
            </button>
          </ImagePicker>
        </div>
        <div className="my-4 space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profile Title</FormLabel>
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
          <Button type="submit" loading={loading}>
            Save Changes
          </Button>
        </div>
      </form>
    </Form>
  );
}
