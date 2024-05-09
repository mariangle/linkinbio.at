import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/typography";
import { IndustrialBackground } from "@/components/ui/industrial-background";
import { ButtonCustomizer } from "../_components/button-showcase";
import { EmbedShowcase } from "../_components/embed-showcase";
import { ProfileCustomizer } from "../_components/profile-showcase";
import { TopIconShowcase } from "../_components/top-icons-showcase";
import { WeatherEffectCustomizer } from "../_components/weather-effect-customizer";
import { DashboardShowcase } from "../_components/dashboard-showcase";
import { Search, Heart, Video, Layout, Moon, Layers } from "lucide-react";
import { EnableDarkTheme } from "../_components/enable-dark-theme";

const features = [
  {
    title: "SEO Optimized",
    description:
      "Improve your search engine ranking and visibility with SEO optimized bio link pages.",
    icon: Search,
  },
  {
    title: "Icon Library",
    description:
      "Access a vast library of icons to customize your links to your liking.",
    icon: Heart,
  },
  {
    title: "GIF & Video Background",
    description:
      "Capture your visitors' attention and leave a lasting impression with GIF and video backgrounds.",
    icon: Video,
  },
  {
    title: "Layouts",
    description:
      "Choose from a selection of beautifully designed layouts to fit your aesthetic.",
    icon: Layout,
  },
  {
    title: "Dark Mode",
    description: "Reduce eye strain with dark mode feature.",
    icon: Moon,
  },
  {
    title: "Gradient Background",
    description:
      "Add depth and dimension to your bio link pages with customizable gradient backgrounds.",
    icon: Layers,
  },
];

export default function Page() {
  return (
    <IndustrialBackground>
      <EnableDarkTheme />
      <Container variant="landing" page>
        <Heading className="bg-gradient-to-b from-indigo-100 to-white bg-clip-text text-center text-transparent">
          Features
        </Heading>
        <p className="mx-auto mb-12 max-w-prose text-center text-slate-300">
          All essential features you need to create a stunning bio link page.
        </p>
        <div className="mx-auto w-full max-w-screen-xl space-y-6">
          <div className="space-y-8 lg:grid lg:grid-cols-5 lg:gap-8 lg:space-y-0">
            <div className="col-span-3">
              <EmbedShowcase />
            </div>
            <div className="col-span-2">
              <ProfileCustomizer />
            </div>
          </div>
          <div className="w-full gap-6 space-y-8 lg:grid lg:grid-cols-5 lg:space-y-0">
            <div className="flex w-full flex-col gap-6 sm:flex-row lg:col-span-2 lg:flex-col">
              <ButtonCustomizer />
              <WeatherEffectCustomizer />
            </div>
            <div className="col-span-3 space-y-8">
              <DashboardShowcase />
              <TopIconShowcase />
            </div>
          </div>
        </div>
        <div className="mx-auto my-24 max-w-screen-xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index}>
                <div className="flex items-center gap-2">
                  <feature.icon className="size-4 text-primary" />
                  <h3 className="text-sm font-medium text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm text-slate-300/80 md:max-w-xs">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </IndustrialBackground>
  );
}
