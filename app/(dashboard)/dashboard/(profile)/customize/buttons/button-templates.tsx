import { ButtonOptions, Font } from "@/lib/types";
import { Button } from "@/components/biolink/button";

const buttonTemplates: ButtonOptions[] = [
  {
    shadow: {
      solid: false,
      spreadRadius: 0,
      color: "#000000",
    },
    text: {
      hidden: false,
    },
    font: {
      family: Font.Inter,
      color: "#FFFFFF",
      shadow: false,
    },
    border: {
      color: "#000000",
      radius: 25,
      width: 0,
    },
    background: {
      color: "#000000",
      opacity: 1,
      blur: 0,
      socialColor: true,
    },
  },
  {
    shadow: {
      solid: false,
      spreadRadius: 0,
      color: "#000000",
    },
    text: {
      hidden: false,
    },
    font: {
      family: Font.Inter,
      color: "#000000",
      shadow: false,
    },
    border: {
      color: "#000000",
      radius: 0,
      width: 0,
    },
    background: {
      color: "#FFFFFF",
      opacity: 1,
      blur: 0,
      socialColor: false,
    },
  },
  {
    shadow: {
      solid: true,
      spreadRadius: 0,
      color: "#000000",
    },
    text: {
      hidden: false,
    },
    font: {
      family: Font.Inter,
      color: "#FFFFFF",
      shadow: false,
    },
    border: {
      color: "#000000",
      radius: 0,
      width: 0,
    },
    background: {
      color: "#3492eb",
      opacity: 1,
      blur: 0,
      socialColor: false,
    },
  },
  {
    shadow: {
      solid: false,
      spreadRadius: 10,
      color: "#000000",
    },
    text: {
      hidden: false,
    },
    font: {
      family: Font.Inter,
      color: "#FFFFFF",
      shadow: false,
    },
    border: {
      color: "#FFFFFF",
      radius: 25,
      width: 0,
    },
    background: {
      color: "#000000",
      opacity: 1,
      blur: 0,
      socialColor: false,
    },
  },
  {
    shadow: {
      solid: false,
      spreadRadius: 0,
      color: "#000000",
    },
    text: {
      hidden: false,
    },
    font: {
      family: Font.Inter,
      color: "#FFFFFF",
      shadow: false,
    },
    border: {
      color: "#000000",
      radius: 0,
      width: 0,
    },
    background: {
      color: "#000000",
      opacity: 0.25,
      blur: 50,
      socialColor: false,
    },
  },
  {
    shadow: {
      solid: false,
      spreadRadius: 0,
      color: "#000000",
    },
    text: {
      hidden: false,
    },
    font: {
      family: Font.Inter,
      color: "#FFFFFF",
      shadow: false,
    },
    border: {
      color: "#000000",
      radius: 0,
      width: 0,
    },
    background: {
      color: "#3f51b5",
      opacity: 0.5,
      blur: 50,
      socialColor: false,
    },
  },
];

export function ButtonTemplates({
  onSelect,
}: {
  onSelect: (button: ButtonOptions) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-8 rounded-lg bg-primary/10 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {buttonTemplates.map((button, index) => (
        <div
          onClick={() => onSelect(button)}
          role="button"
          key={index}
          className="self-center"
        >
          <div className="pointer-events-none">
            <Button
              key={index}
              config={button}
              item={{
                url: "https://facebook.com",
                archived: false,
                title: "Facebook",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
