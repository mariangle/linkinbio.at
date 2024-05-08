"use client";

import React from "react";

import { useFormSubmit } from "@/hooks/use-form-submit";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn } from "react-hook-form";
import { useBiolinkPreviewStore } from "@/stores/biolink-preview-store";
import {
  FormHeading,
  FormContainer,
  FormFooter,
  FormContent,
  FormActions,
} from "@/components/dashboard/form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ButtonTemplates } from "./button-templates";
import { ButtonsFormSchema, ButtonsFormValues } from "@/lib/validations";
import { ButtonOptions } from "@/lib/types";
import { ButtonCustomizerSheet } from "@/components/button-customizer-sheet";
import { Paintbrush } from "lucide-react";

export function ButtonsForm({
  data,
  modified,
}: {
  data: {
    shadowSolid: boolean;
    shadowSpreadRadius: number;
    shadowColor: string;
    textColor: string;
    textHidden: boolean;
    borderColor: string;
    borderRadius: number;
    borderWidth: number;
    backgroundColor: string;
    backgroundOpacity: number;
    backgroundBlur: number;
    backgroundSocialColor: boolean;
    iconHidden: boolean;
    iconShadow: boolean;
    iconSocialColor: boolean;
  };
  modified?: boolean;
}) {
  const { biolink, setBiolink } = useBiolinkPreviewStore();

  const form = useForm<ButtonsFormValues>({
    resolver: zodResolver(ButtonsFormSchema),
    defaultValues: {
      shadowSolid: data.shadowSolid,
      shadowSpreadRadius: data.shadowSpreadRadius,
      shadowColor: data.shadowColor,
      textColor: data.textColor,
      textHidden: data.textHidden,
      borderColor: data.borderColor,
      borderRadius: data.borderRadius,
      borderWidth: data.borderWidth,
      backgroundColor: data.backgroundColor,
      backgroundOpacity: data.backgroundOpacity,
      backgroundBlur: data.backgroundBlur,
      backgroundSocialColor: data.backgroundSocialColor,
      iconHidden: data.iconHidden,
      iconShadow: data.iconShadow,
      iconSocialColor: data.iconSocialColor,
    },
  });

  const { loading, dirty, submit } = useFormSubmit<ButtonsFormValues>({
    initialData: data,
    formValues: form.getValues(),
    endpoint: "/api/manage/button",
    modified,
  });

  React.useEffect(() => {
    form.watch((value) => {
      if (biolink) {
        setBiolink({
          ...biolink,
          config: {
            ...biolink.config,
            button: {
              shadow: {
                solid: value.shadowSolid ?? data.shadowSolid,
                spreadRadius:
                  value.shadowSpreadRadius ?? data.shadowSpreadRadius,
                color: value.shadowColor ?? data.shadowColor,
              },
              text: {
                color: value.textColor ?? data.textColor,
                hidden: value.textHidden ?? data.textHidden,
              },
              border: {
                color: value.borderColor ?? data.borderColor,
                radius: value.borderRadius ?? data.borderRadius,
                width: value.borderWidth ?? data.borderWidth,
              },
              background: {
                color: value.backgroundColor ?? data.backgroundColor,
                opacity: value.backgroundOpacity ?? data.backgroundOpacity,
                blur: value.backgroundBlur ?? data.backgroundBlur,
                socialColor:
                  value.backgroundSocialColor ?? data.backgroundSocialColor,
              },
              icon: {
                hidden: value.iconHidden ?? data.iconHidden,
                shadow: value.iconShadow ?? data.iconShadow,
                socialColor: value.iconSocialColor ?? data.iconSocialColor,
              },
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

  const onCancel = () => {
    form.reset();
  };

  const setButtonValues = (
    button: ButtonOptions,
    form: UseFormReturn<ButtonsFormValues>,
  ) => {
    const { shadow, text, border, background, icon } = button;

    form.setValue("shadowSolid", shadow.solid);
    form.setValue("shadowSpreadRadius", shadow.spreadRadius);
    form.setValue("shadowColor", shadow.color);
    form.setValue("textColor", text.color);
    form.setValue("textHidden", text.hidden);
    form.setValue("borderColor", border.color);
    form.setValue("borderRadius", border.radius);
    form.setValue("borderWidth", border.width);
    form.setValue("backgroundColor", background.color);
    form.setValue("backgroundOpacity", background.opacity);
    form.setValue("backgroundBlur", background.blur);
    form.setValue("backgroundSocialColor", background.socialColor);
    form.setValue("iconHidden", icon.hidden);
    form.setValue("iconShadow", icon.shadow);
    form.setValue("iconSocialColor", icon.socialColor);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormContainer>
          <FormContent>
            <FormHeading>Buttons</FormHeading>
            <div className="text-sm text-muted-foreground">Templates</div>
            <ButtonTemplates
              onSelect={(button) => setButtonValues(button, form)}
            />
            <div className="text-sm text-muted-foreground">Custom</div>
            <ButtonCustomizerSheet form={form}>
              <Button size="lg" variant="secondary" className="border">
                <Paintbrush className="mr-2 size-4" />
                Customize
              </Button>
            </ButtonCustomizerSheet>
          </FormContent>
          <FormFooter>
            <FormActions loading={loading} cancel={onCancel} dirty={dirty} />
          </FormFooter>
        </FormContainer>
      </form>
    </Form>
  );
}
