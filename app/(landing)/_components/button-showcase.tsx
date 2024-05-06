"use client";

import * as React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import {
  ShowcaseContainer,
  ShowcaseHeader,
  ShowcaseDescription,
  ShowcaseIconContainer,
} from "./showcase";
import { Button } from "@/components/biolink/button";
import { ButtonsFormSchema, ButtonsFormValues } from "@/lib/validations";
import { ButtonCustomizerSheet } from "@/components/button-customizer-sheet";
import { Paintbrush, SlidersHorizontal } from "lucide-react";

export function ButtonCustomizer() {
  const form = useForm<ButtonsFormValues>({
    resolver: zodResolver(ButtonsFormSchema),
    defaultValues: {
      shadowSolid: true,
      shadowSpreadRadius: 0,
      shadowColor: "#FFFFFF",
      textColor: "#FFFFFF",
      textHidden: false,
      borderColor: "#000000",
      borderRadius: 5,
      borderWidth: 0,
      backgroundColor: "#FFFFFF",
      backgroundOpacity: 0.1,
      backgroundBlur: 0,
      backgroundSocialColor: false,
      iconHidden: false,
      iconShadow: true,
      iconSocialColor: true,
    },
  });

  return (
    <ShowcaseContainer>
      <Form {...form}>
        <div className="flex h-full flex-col justify-between">
          <div className="mb-6">
            <ShowcaseIconContainer>
              <Paintbrush className="size-5 text-white" />
            </ShowcaseIconContainer>
            <ShowcaseHeader>Fully customizable buttons</ShowcaseHeader>
            <ShowcaseDescription>
              No templates, just customize yourself. Try it out below.
            </ShowcaseDescription>
            <ButtonCustomizerSheet form={form}>
              <button className="border-showcase mt-4 block w-fit rounded-lg border bg-white/5 bg-gradient-to-r from-[#000010] to-blue-950/25 px-5 py-2.5 text-center text-sm text-white shadow-lg">
                <span
                  style={{
                    filter: `drop-shadow(0 0 1rem rgba(255, 255, 255, 0.5))`,
                  }}
                >
                  <SlidersHorizontal className="mr-2 inline-block size-4" />
                  Customize
                </span>
              </button>
            </ButtonCustomizerSheet>
          </div>
          <div className="border-showcase grid h-[150px] place-content-center rounded-2xl border bg-white/5 p-8">
            <div className="pointer-events-none mx-auto max-w-[200px]">
              <Button
                item={{
                  id: "1",
                  url: "https://facebook.com",
                  order: 0,
                  archived: false,
                  title: "Facebook",
                  provider: "Facebook",
                  username: "username",
                  isTopIcon: false,
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
        </div>
      </Form>
    </ShowcaseContainer>
  );
}
