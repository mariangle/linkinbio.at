import { ButtonOptions } from "@/lib/types";
import { Button } from "@/components/biolink/button";
import Image from "next/image";

const buttonTemplates: ButtonOptions[] = [
  {
    shadow: {
      solid: false,
      spreadRadius: 0,
      color: "#000000",
    },
    text: {
      color: "#FFFFFF",
      hidden: true,
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
    icon: {
      hidden: false,
      shadow: false,
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
      color: "#000000",
      hidden: false,
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
    icon: {
      hidden: false,
      shadow: false,
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
      color: "#FFFFFF",
      hidden: false,
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
    icon: {
      hidden: true,
      shadow: false,
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
      color: "#FFFFFF",
      hidden: false,
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
    icon: {
      hidden: false,
      shadow: false,
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
      color: "#FFFFFF",
      hidden: true,
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
    icon: {
      hidden: false,
      shadow: false,
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
      color: "#FFFFFF",
      hidden: true,
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
    icon: {
      hidden: false,
      shadow: false,
      socialColor: true,
    },
  },
];

export function ButtonTemplates({
  onSelect,
}: {
  onSelect: (button: ButtonOptions) => void;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <Image
        src="/background.png"
        unoptimized
        alt="awddwa"
        width={500}
        height={100}
        className="absolute inset-x-0 h-full w-full object-cover"
      ></Image>
      <div className="relative grid grid-cols-1 gap-8 p-4 sm:grid-cols-2 lg:grid-cols-3">
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
                  title: "Facebook",
                  url: "https://facebook.com/username",
                  isTopIcon: false,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
