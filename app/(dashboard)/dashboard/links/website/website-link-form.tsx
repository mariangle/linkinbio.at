"use client";

import Image from "next/image";
import * as React from "react";
import { WebsiteLink } from "@/lib/types";

import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormReturn, useForm } from "react-hook-form";
import {
  EyeIcon,
  PencilIcon,
  EyeOffIcon,
  TrashIcon,
  X,
  CheckIcon,
  Image as ImageIcon,
  StarIcon,
} from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  WebsiteLinkFormSchema,
  WebsiteLinkFormValues,
} from "@/lib/validations";

import { useFormSubmit } from "@/hooks/use-form-action";
import { toast } from "sonner";
import { ImagePicker } from "@/components/image-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CustomIcon } from "@/components/biolink/custom-icon";
import { isIconNameValid } from "@/lib/utils/icon-validation";

export function WebsiteLinkForm({ item }: { item: WebsiteLink }) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [isEditingThumbnail, setIsEditingThumbnail] = React.useState(false);
  const [isDeleted, setIsDeleted] = React.useState(false);
  const [data, setData] = React.useState<Partial<WebsiteLink>>(item);

  const closeEditingThumbnail = () => setIsEditingThumbnail(false);

  const form = useForm<WebsiteLinkFormValues>({
    resolver: zodResolver(WebsiteLinkFormSchema),
    defaultValues: data,
  });

  const { loading, dirty, submit, remove } =
    useFormSubmit<WebsiteLinkFormValues>({
      initialData: data,
      formValues: form.getValues(),
      endpoint: `/api/manage/links/website/${data.id}`,
    });

  if (isDeleted) {
    return null;
  }

  const clear = () => {
    setIsEditing(false);
    form.reset();
  };

  const onSubmit = async () => {
    await submit();
    setIsEditing(false);
    setData(form.getValues());
  };

  const removeLink = async () => {
    await remove();
    setIsDeleted(true);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="glassmorphism group rounded-lg">
          <div className="flex w-full items-center justify-between">
            {isEditing ? (
              <div className="flex w-full flex-col">
                <div className="flex flex-col gap-2 p-4">
                  <div className="flex w-full items-center justify-between gap-4">
                    <div className="w-full space-y-2">
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Title" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="url"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="URL" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <button type="button" onClick={clear}>
                          <X className="size-4" />
                        </button>
                        <button disabled={loading || !dirty}>
                          <CheckIcon className="size-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setIsEditingThumbnail(!isEditingThumbnail);
                      }}
                    >
                      <ImageIcon
                        className={cn(
                          "size-4 text-muted-foreground",
                          form.getValues("iconName") && "!text-primary",
                          form.getValues("imageUrl") && "!text-primary",
                        )}
                      />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        form.setValue("featured", !form.getValues("featured"));
                      }}
                    >
                      <StarIcon
                        className={cn(
                          "size-4 text-muted-foreground",
                          form.watch("featured") === true && "!text-primary",
                        )}
                      />
                    </button>
                  </div>
                </div>
                {isEditingThumbnail && (
                  <>
                    <div className="border-glass flex w-full justify-end border-t bg-primary/25 px-4 py-2">
                      <button
                        type="button"
                        onClick={() => setIsEditingThumbnail(false)}
                      >
                        <X className="size-4 text-primary" />
                      </button>
                    </div>
                    <ThumbnailTab form={form} close={closeEditingThumbnail} />
                  </>
                )}
              </div>
            ) : (
              <div className="flex w-full items-center justify-between gap-4 p-4">
                <div className="w-full">
                  <div className="max-w-full truncate text-sm text-white">
                    {form.getValues("title")}
                  </div>
                  <div className="max-w-full truncate text-xs text-muted-foreground">
                    {form.getValues("url")}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <button type="button" onClick={() => setIsEditing(true)}>
                    <PencilIcon className="size-4" />
                  </button>
                  <button
                    type="button"
                    onClick={async () => {
                      form.setValue("archived", !form.getValues("archived"));
                      toast("Not implemented");
                    }}
                  >
                    {form.watch("archived") ? (
                      <EyeOffIcon className="size-4" />
                    ) : (
                      <EyeIcon className="size-4" />
                    )}
                  </button>
                  <button type="button" onClick={removeLink}>
                    <TrashIcon className="size-0 duration-300 group-hover:size-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </form>
    </Form>
  );
}

const thumbnailOptions = [
  {
    label: "Image",
    value: "image",
  },
  {
    label: "Icon",
    value: "icon",
  },
];

function ThumbnailTab({
  form,
  close,
}: {
  form: UseFormReturn<WebsiteLinkFormValues>;
  close: () => void;
}) {
  const [tab, setTab] = React.useState<"image" | "icon">(
    form.getValues("iconName") ? "icon" : "image",
  );
  return (
    <div className="p-4">
      {!form.watch("iconName") && !form.watch("imageUrl") && (
        <ul className="mb-4 flex w-full rounded-lg bg-neutral-200 p-1 dark:bg-neutral-700">
          {thumbnailOptions.map((option, idx) => (
            <li
              key={idx}
              role="button"
              onClick={() => {
                setTab(option.value as "image" | "icon");
              }}
              className={cn(
                "w-full rounded-sm py-1.5 text-center text-xs text-muted-foreground",
                option.value === tab &&
                  "bg-neutral-50 text-foreground dark:bg-neutral-800",
              )}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
      {tab === "image" && <ImageTab form={form} />}
      {tab === "icon" && <IconTab form={form} close={close} />}
    </div>
  );
}
function ImageTab({ form }: { form: UseFormReturn<WebsiteLinkFormValues> }) {
  return (
    <div className="flex flex-col gap-2">
      {form.watch("imageUrl") ? (
        <div className="flex w-full items-center gap-4">
          <div>
            <Image
              src={form.getValues("imageUrl") ?? ""}
              width={100}
              height={100}
              alt="Thumbnail Image"
              unoptimized
              className="size-20 rounded-lg object-cover"
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <ImagePicker
              url={form.getValues("imageUrl")}
              setUrl={(url) => {
                form.setValue("imageUrl", url || "");
              }}
            >
              <Button type="button">Change</Button>
            </ImagePicker>
            <Button
              variant="secondary"
              type="button"
              onClick={() => {
                form.setValue("imageUrl", "");
              }}
            >
              Remove
            </Button>
          </div>
        </div>
      ) : (
        <>
          <ImagePicker
            url={form.getValues("imageUrl")}
            setUrl={(url) => {
              form.setValue("imageUrl", url || "");
            }}
          >
            <Button type="button">Add Image</Button>
          </ImagePicker>
        </>
      )}
    </div>
  );
}

function IconTab({
  form,
  close,
}: {
  form: UseFormReturn<WebsiteLinkFormValues>;
  close: () => void;
}) {
  const [localIconName, setLocalIconName] = React.useState<string | undefined>(
    form.getValues("iconName"),
  );
  const [isInvalid, setIsInvalid] = React.useState(false);
  const [isHowDoesItWorkOpen, setIsHowDoesItWorkOpen] = React.useState(false);

  return (
    <div>
      {isHowDoesItWorkOpen ? (
        <div className="relative mb-2 bg-emerald-900/50 p-4 text-xs text-white dark:bg-emerald-500/10">
          <button
            type="button"
            onClick={() => setIsHowDoesItWorkOpen(false)}
            className="absolute right-2 top-2"
          >
            <X className="size-4" />
          </button>
          <div className="mb-1">How does it work?</div>
          <p className="text-neutral-200">
            You have access to a variety of icons from different libraries:
            <ul className="ml-6 mt-2 list-disc">
              <li>
                Lucide icons can be found{" "}
                <a
                  href="https://react-icons.github.io/react-icons/icons/lu/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-white hover:underline focus:underline focus:outline-none"
                >
                  here
                </a>
                , starting with the prefix{" "}
                <strong className="text-white">Lu</strong>.
              </li>
              <li>
                Hero Icons are available{" "}
                <a
                  href="https://react-icons.github.io/react-icons/icons/hi/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-white hover:underline focus:underline focus:outline-none"
                >
                  here
                </a>
                , starting with the prefix{" "}
                <strong className="text-white">Hi</strong>.
              </li>
              <li>
                Font Awesome icons can be accessed{" "}
                <a
                  href="https://react-icons.github.io/react-icons/icons/fa/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-white hover:underline focus:underline focus:outline-none"
                >
                  here
                </a>
                , starting with the prefix{" "}
                <strong className="text-white">Fa</strong>.
              </li>
            </ul>
            <div className="mt-2">
              For example, you can use{" "}
              <strong className="text-white">FaHeart</strong>,{" "}
              <strong className="text-white">LuHeart</strong>, or{" "}
              <strong className="text-white">HiHeart</strong>.
            </div>
          </p>
        </div>
      ) : (
        <div className="mb-2 flex justify-end opacity-75">
          <button
            type="button"
            onClick={() => setIsHowDoesItWorkOpen(true)}
            className="text-xs underline"
          >
            How does it work?
          </button>
        </div>
      )}
      <div className="flex items-start gap-2">
        <div className="border-glass grid size-9 place-content-center rounded-lg border bg-input/50">
          <CustomIcon
            name={localIconName}
            className="static translate-x-0 translate-y-0 !text-foreground"
          />
        </div>
        <div className="w-full">
          <Input
            placeholder="Eg. FaHeart"
            value={localIconName}
            onChange={(e) => {
              setLocalIconName(e.target.value);
              setIsInvalid(false);
            }}
          />
          {isInvalid && (
            <div className="mt-2 text-xs text-destructive">
              Oops. This icon does not exist.
            </div>
          )}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-end gap-4">
        {form.getValues("iconName") && (
          <Button
            variant="secondary"
            type="button"
            onClick={() => {
              form.setValue("iconName", undefined);
              setLocalIconName("");
              setIsHowDoesItWorkOpen(false);
            }}
          >
            Remove
          </Button>
        )}
        <Button
          type="button"
          disabled={isInvalid}
          onClick={() => {
            if (!isIconNameValid(localIconName)) {
              setIsInvalid(true);
            } else {
              form.setValue("iconName", localIconName);
              close();
            }
            setIsHowDoesItWorkOpen(false);
          }}
        >
          Add
        </Button>
      </div>
    </div>
  );
}
