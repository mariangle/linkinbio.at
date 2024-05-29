"use client";

import * as React from "react";
import { toast } from "sonner";

export const useFormSubmit = <T extends any | Record<string, any>>({
  initialData,
  formValues,
  endpoint,
  method = "PATCH",
}: {
  initialData?: any; // ! Sat to any for now as I use objects for initialData
  formValues: T;
  endpoint: string;
  method?: "PATCH" | "POST";
}) => {
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const dirty = true; // ! Set to true for now

  const submit = async () => {
    toast.promise(
      new Promise(async (resolve, reject) => {
        setLoading(true);

        try {
          const res = await fetch(endpoint, {
            method,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formValues),
          });

          const { message, ok, data } = await res.json();

          if (ok) {
            resolve(message);
          } else {
            reject(new Error(message));
          }
        } catch (e) {
          reject(e);
        } finally {
          setLoading(false);
        }
      }),
      {
        loading: "Loading...",
        success: (message) => {
          setLoading(false);
          return `${message}`;
        },
        error: (err) => {
          setLoading(false);
          return err.message || "Something went wrong!";
        },
      },
    );
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
