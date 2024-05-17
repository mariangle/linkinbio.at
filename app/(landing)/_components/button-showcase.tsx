"use client";

import * as React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/biolink/button";
import { ButtonsFormSchema, ButtonsFormValues } from "@/lib/validations";
import { ButtonCustomizerSheet } from "@/components/button-customizer-sheet";

export function ButtonCustomizer() {
  const form = useForm<ButtonsFormValues>({
    resolver: zodResolver(ButtonsFormSchema),
    defaultValues: {
      shadowSolid: true,
      shadowSpreadRadius: 5,
      shadowColor: "#3730a3",
      textColor: "#FFFFFF",
      textHidden: false,
      borderColor: "#4338ca",
      borderRadius: 0,
      borderWidth: 0,
      backgroundColor: "#4f46e5",
      backgroundOpacity: 1,
      backgroundBlur: 0,
      backgroundSocialColor: false,
      iconHidden: false,
      iconShadow: true,
      iconSocialColor: false,
    },
  });

  return (
    <Form {...form}>
      <ButtonCustomizerSheet form={form}>
        <div className="cursor-pointer">
          <div className="pointer-events-none mx-auto max-w-[200px]">
            <Button
              item={{
                id: "1",
                url: "https://fake.com",
                order: 0,
                archived: false,
                title: "Customize me",
                isTopIcon: false,
                iconId: 47,
              }}
              config={{
                text: {
                  color: form.watch("textColor"),
                  hidden: form.watch("textHidden"),
                },
                shadow: {
                  solid: form.watch("shadowSolid"),
                  spreadRadius: form.watch("shadowSpreadRadius"),
                  color: form.watch("shadowColor"),
                },
                background: {
                  color: form.watch("backgroundColor"),
                  opacity: form.watch("backgroundOpacity"),
                  blur: form.watch("backgroundBlur"),
                  socialColor: form.watch("backgroundSocialColor"),
                },
                border: {
                  radius: form.watch("borderRadius"),
                  width: form.watch("borderWidth"),
                  color: form.watch("borderColor"),
                },
                icon: {
                  hidden: form.watch("iconHidden"),
                  shadow: form.watch("iconShadow"),
                  socialColor: form.watch("iconSocialColor"),
                },
              }}
            />
          </div>
        </div>
      </ButtonCustomizerSheet>
    </Form>
  );
}
