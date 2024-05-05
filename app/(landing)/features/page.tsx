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

const features = [
  {
    title: "SEO Optimized",
    description:
      "Boost your online presence with our SEO optimized bio link tool. Reach more people and increase your visibility on search engines.",
    icon: Search,
  },
  {
    title: "Icon Library",
    description:
      "Access a vast library of icons to customize your bio link pages. Choose from a variety of icons to perfectly match your brand or personality.",
    icon: Heart,
  },
  {
    title: "GIF & Video Background",
    description:
      "Make your bio link pages stand out with engaging GIF and video backgrounds. Capture your visitors' attention and leave a lasting impression.",
    icon: Video,
  },
  {
    title: "Layouts",
    description:
      "Choose from a selection of beautifully designed layouts to showcase your content. Whether it's a grid, list, or carousel, we have the perfect layout for you.",
    icon: Layout,
  },
  {
    title: "Dark Mode",
    description:
      "Reduce eye strain and enhance user experience with our dark mode feature. Switch seamlessly between light and dark themes for optimal readability.",
    icon: Moon,
  },
  {
    title: "Gradient Background",
    description:
      "Add depth and dimension to your bio link pages with customizable gradient backgrounds. Create visually stunning effects that captivate your audience.",
    icon: Layers,
  },
];

export default function Page() {
  return (
    <IndustrialBackground>
      <Container variant="landing" page>
        <Heading className="bg-gradient-to-b from-indigo-100 to-white bg-clip-text text-center text-transparent">
          Features
        </Heading>
        <p className="mx-auto mb-12 max-w-prose text-center text-slate-300">
          Discover the powerful features that make linkinbio.at the best bio
          link tool for personal and professional use.
        </p>
        <div className="mx-auto w-full max-w-screen-xl space-y-6">
          <div className="space-y-8 lg:grid lg:grid-cols-5 lg:gap-8 lg:space-y-0">
            <div className="col-span-3">
              <ButtonCustomizer />
            </div>
            <div className="col-span-2">
              <ProfileCustomizer />
            </div>
          </div>
          <div className="w-full gap-6 space-y-8 lg:grid lg:grid-cols-5 lg:space-y-0">
            <div className="flex w-full flex-col gap-6 sm:flex-row lg:col-span-2 lg:flex-col">
              <EmbedShowcase />
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
                <p className="mt-2 text-sm text-slate-300/80">
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
