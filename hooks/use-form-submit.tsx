"use client";

import * as React from "react";
import { toast } from "sonner";

export const useFormSubmit = <T extends any | Record<string, any>>({
  initialData,
  formValues,
  endpoint,
  modified: customized = true,
}: {
  initialData: T;
  formValues: T;
  endpoint: string;
  modified?: boolean;
}) => {
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [modified, setModified] = React.useState(customized);
  const [newValues, setNewValues] = React.useState<T>();

  const dirty = newValues
    ? JSON.stringify(newValues) !== JSON.stringify(formValues)
    : JSON.stringify(initialData) !== JSON.stringify(formValues);

  const submit = async () => {
    setLoading(true);

    try {
      const res = await fetch(endpoint, {
        method: modified ? "PATCH" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      const { message, ok, data } = await res.json();

      if (ok) {
        toast.success(message);
        setModified(true);
        setNewValues(formValues);
      } else {
        toast.error(message);
      }

      return data;
    } catch (e) {
      if (e instanceof Error) {
        console.error(e);
      }
    } finally {
      setLoading(false);
    }
  };

  const remove = async () => {
    setLoading(true);

    try {
      const res = await fetch(endpoint, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { message, ok, data } = await res.json();

      if (ok) {
        toast.success(message);
      } else {
        toast.error(message);
      }

      return data;
    } catch (e) {
      if (e instanceof Error) {
        console.error(e);
      }
    } finally {
      setLoading(false);
    }
  };

  const cancel = () => {
    setOpen(false);
  };

  return {
    loading,
    submit,
    remove,
    cancel,
    dirty,
    open,
    setOpen,
  };
};
