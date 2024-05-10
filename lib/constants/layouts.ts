import { Layout } from "@/lib/types/enums";

export const layouts = [
  {
    value: Layout.Standard,
    name: "Standard",
    premium: false,
  },
  {
    value: Layout.WithCover,
    name: "With Cover",
    premium: true,
  },
  {
    value: Layout.Professional,
    name: "Professional",
    premium: true,
  },
  {
    value: Layout.Glassmorphism,
    name: "Glassmorphism",
    premium: true,
  },
  {
    value: Layout.Bold,
    name: "Bold",
    premium: true,
  },
];
