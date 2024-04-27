"use client";

import * as React from "react";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ColorPicker } from "@/components/color-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormHeading,
  FormContainer,
  FormFooter,
  FormContent,
  FormSwitch,
} from "@/components/dashboard/form";
import { Button } from "@/components/ui/button";
import { TitleOptions } from "@/types";
import { fonts } from "@/constants/fonts";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";

export function TitleForm() {
  const { biolink, updateBiolink, loading } = useBiolinkPreview();
  const [titleOptions, setTitleOptions] = React.useState<TitleOptions>({
    font: "inter",
    color: "#aw23ad",
  });

  const [invertTextColor, setInvertTextColor] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (!biolink) return;

    updateBiolink({
      ...biolink,
      config: {
        ...biolink.config,
        invertTextColor: invertTextColor,
        title: titleOptions,
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [titleOptions, invertTextColor]);

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <FormContainer>
      <FormContent>
        <FormHeading>Title</FormHeading>
        <div className="mt-2 flex items-center gap-4">
          <div className="space-y-2">
            <Label>Color</Label>
            <ColorPicker
              small
              color={titleOptions.color}
              setColor={(color) =>
                setTitleOptions({
                  ...titleOptions,
                  color,
                })
              }
            />
          </div>
          <div className="w-full space-y-2">
            <Label>Font</Label>
            <div className="flex items-center gap-2">
              <Select
                defaultValue={titleOptions.font}
                onValueChange={(font) =>
                  setTitleOptions({
                    ...titleOptions,
                    font,
                  })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Font" />
                </SelectTrigger>
                <SelectContent>
                  {fonts.map((item, index) => (
                    <SelectItem
                      key={index}
                      value={item.value}
                      className={item.display}
                    >
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <FormSwitch
          title="Invert Text Color"
          description="Toggle to manually invert the text color based on the background."
        >
          <Switch
            checked={invertTextColor}
            onCheckedChange={() => setInvertTextColor(!invertTextColor)}
          />
        </FormSwitch>
      </FormContent>
      <FormFooter>
        <Button>Reset</Button>
      </FormFooter>
    </FormContainer>
  );
}
