import * as React from "react";
import * as z from "zod";

import { Link } from "@/lib/types";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { EyeIcon, PencilIcon, TrashIcon, GripVerticalIcon } from "lucide-react";

export const linkSchema = z.object({
  subject: z
    .string()
    .min(2, {
      message: "Subject must be at least 2 characters.",
    })
    .max(30, {
      message: "Subject cannot exceed 100 characters.",
    }),
  contact_info: z
    .string()
    .min(2, {
      message: "Contact information must be at least 2 characters.",
    })
    .max(50, {
      message: "Contact information cannot exceed 100 characters.",
    }),
});

export type LinkFormValues = z.infer<typeof linkSchema>;

export function LinkItem({ item }: { item: Link }) {
  const [loading, setLoading] = React.useState(false);
  const [editing, setEditing] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const form = useForm<LinkFormValues>({
    resolver: zodResolver(linkSchema),
    defaultValues: {
      contact_info: "",
      subject: "",
    },
  });

  return (
    <div className="group rounded-lg bg-secondary">
      <div className="flex items-center">
        <GripVerticalIcon className="ml-2 size-4 text-muted-foreground" />
        <div className="w-full p-4">
          <div className="flex items-center justify-between gap-8">
            <div className="text-sm text-foreground">{item.title}</div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <button>
                <PencilIcon className="size-4" />
              </button>
              <button>
                <EyeIcon className="size-4" />
              </button>
              <button className="">
                <TrashIcon className="size-0 duration-300 group-hover:size-4" />
              </button>
            </div>
          </div>
          <div className="mt-1 text-xs text-muted-foreground">{item.url}</div>
        </div>
      </div>
    </div>
  );
}
