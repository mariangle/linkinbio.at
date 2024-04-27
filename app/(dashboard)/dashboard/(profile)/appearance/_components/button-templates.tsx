import { ButtonOptions } from "@/types";
import { Button } from "@/components/biolink/button";
import Image from "next/image";

const buttonTemplates: ButtonOptions[] = [
  {
    shadow: {
      solid: false,
      spreadRadius: 0,
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
      socialIconColor: true,
    },
    icon: {
      hidden: false,
      shadow: false,
      socialIconColor: false,
      dropShadow: false,
    },
  },
  {
    shadow: {
      solid: false,
      spreadRadius: 0,
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
      socialIconColor: false,
    },
    icon: {
      hidden: false,
      shadow: false,
      socialIconColor: false,
      dropShadow: false,
    },
  },
  {
    shadow: {
      solid: true,
      spreadRadius: 0,
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
      socialIconColor: false,
    },
    icon: {
      hidden: true,
      shadow: false,
      socialIconColor: false,
      dropShadow: false,
    },
  },
  {
    shadow: {
      solid: false,
      spreadRadius: 10,
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
      socialIconColor: false,
    },
    icon: {
      hidden: false,
      shadow: false,
      socialIconColor: false,
      dropShadow: false,
    },
  },
  {
    shadow: {
      solid: false,
      spreadRadius: 0,
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
      socialIconColor: false,
    },
    icon: {
      hidden: false,
      shadow: false,
      socialIconColor: false,
      dropShadow: true,
    },
  },
  {
    shadow: {
      solid: false,
      spreadRadius: 0,
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
      socialIconColor: false,
    },
    icon: {
      hidden: false,
      shadow: false,
      socialIconColor: true,
      dropShadow: true,
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
        src="https://t4.ftcdn.net/jpg/04/89/68/23/360_F_489682374_ckc0OVyT6Av0NGcuYbwBSCxy62blF4CQ.jpg"
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
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
