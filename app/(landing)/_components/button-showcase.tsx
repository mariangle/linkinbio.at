"use client";

import * as React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/biolink/button";
import { ButtonsFormSchema, ButtonsFormValues } from "@/lib/validations";
import { ButtonCustomizerSheet } from "@/components/button-customizer-sheet";
import { Font } from "@/lib/types";

export function ButtonCustomizer() {
  const form = useForm<ButtonsFormValues>({
    resolver: zodResolver(ButtonsFormSchema),
    defaultValues: {
      shadowSolid: true,
      shadowSpreadRadius: 5,
      shadowColor: "#3730a3",
      fontColor: "#FFFFFF",
      fontShadow: true,
      textHidden: false,
      borderColor: "#4338ca",
      borderRadius: 0,
      borderWidth: 0,
      backgroundColor: "#4f46e5",
      backgroundOpacity: 1,
      backgroundBlur: 0,
      backgroundSocialColor: false,
    },
  });

  return (
    <Form {...form}>
      <ButtonCustomizerSheet form={form}>
        <div className="cursor-pointer">
          <div className="pointer-events-none mx-auto max-w-[200px]">
            <Button
              item={{
                url: "https://fake.com",
                archived: false,
                title: "Customize me",
              }}
              config={{
                text: {
                  hidden: form.watch("textHidden"),
                },
                font: {
                  family: Font.Inter,
                  color: form.watch("fontColor"),
                  shadow: form.watch("fontShadow"),
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
              }}
            />
          </div>
        </div>
      </ButtonCustomizerSheet>
    </Form>
  );
}
