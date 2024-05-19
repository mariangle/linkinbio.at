"use client";

import React from "react";

import { useFormSubmit } from "@/hooks/use-form-action";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn } from "react-hook-form";
import { useBiolinkPreviewStore } from "@/lib/store";
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

export function ButtonsForm({ data }: { data: ButtonOptions }) {
  const { biolink, setBiolink } = useBiolinkPreviewStore();

  const form = useForm<ButtonsFormValues>({
    resolver: zodResolver(ButtonsFormSchema),
    defaultValues: {
      shadowSolid: data?.shadow.solid,
      shadowSpreadRadius: data?.shadow.spreadRadius,
      shadowColor: data?.shadow.color,
      fontColor: data?.font.color,
      fontShadow: data?.font.shadow,
      textHidden: data?.text.hidden,
      borderColor: data?.border.color,
      borderRadius: data?.border.radius,
      borderWidth: data?.border.width,
      backgroundColor: data?.background.color,
      backgroundOpacity: data?.background.opacity,
      backgroundBlur: data?.background.blur,
      backgroundSocialColor: data?.background.socialColor,
    },
  });

  const { loading, dirty, submit } = useFormSubmit<ButtonsFormValues>({
    initialData: data,
    formValues: form.getValues(),
    endpoint: "/api/manage/buttons",
  });

  React.useEffect(() => {
    form.watch((value) => {
      if (biolink) {
        setBiolink({
          ...biolink,
          config: {
            ...biolink.config,
            buttons: {
              shadow: {
                solid: value.shadowSolid ?? data?.shadow.solid,
                spreadRadius:
                  value.shadowSpreadRadius ?? data?.shadow.spreadRadius,
                color: value.shadowColor ?? data?.shadow.color,
              },
              font: {
                family: data?.font.family,
                color: value.fontColor ?? data?.font.color,
                shadow: value.fontShadow ?? data?.font.shadow,
              },
              text: {
                hidden: value.textHidden ?? data?.text.hidden,
              },
              border: {
                color: value.borderColor ?? data?.border.color,
                radius: value.borderRadius ?? data?.border.radius,
                width: value.borderWidth ?? data?.border.width,
              },
              background: {
                color: value.backgroundColor ?? data?.background.color,
                opacity: value.backgroundOpacity ?? data?.background.opacity,
                blur: value.backgroundBlur ?? data?.background.blur,
                socialColor:
                  value.backgroundSocialColor ?? data?.background.socialColor,
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
    const { shadow, text, border, background, font } = button;

    form.setValue("shadowSolid", shadow.solid);
    form.setValue("shadowSpreadRadius", shadow.spreadRadius);
    form.setValue("shadowColor", shadow.color);
    form.setValue("fontColor", font.color);
    form.setValue("fontShadow", font.shadow);
    form.setValue("textHidden", text.hidden);
    form.setValue("borderColor", border.color);
    form.setValue("borderRadius", border.radius);
    form.setValue("borderWidth", border.width);
    form.setValue("backgroundColor", background.color);
    form.setValue("backgroundOpacity", background.opacity);
    form.setValue("backgroundBlur", background.blur);
    form.setValue("backgroundSocialColor", background.socialColor);
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
