import Image from "next/image";
import {
  ShowcaseContainer,
  ShowcaseHeader,
  ShowcaseDescription,
  ShowcaseItemContainer,
  ShowcaseIconContainer,
} from "./showcase";
import { CircleDashed } from "lucide-react";

export function DashboardShowcase() {
  return (
    <ShowcaseContainer className="p-0 md:p-0">
      <div className="p-6 md:p-10">
        <ShowcaseIconContainer>
          <CircleDashed className="size-5 text-white" />
        </ShowcaseIconContainer>
        <ShowcaseHeader>Dashboard</ShowcaseHeader>
        <ShowcaseDescription>
          A dashboard that is easy to use and navigate.
        </ShowcaseDescription>
      </div>
      <div className="overflow-hidden pl-6 md:pl-10">
        <div className="bg-[#030010]">
          <Image
            src="/dashboard-light.png"
            alt="dashboard"
            width={1000}
            height={1000}
            className="border-showcase h-full w-full rounded-tl-sm border-l border-t object-cover"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 30%, transparent 90%)",
            }}
          ></Image>
        </div>
      </div>
    </ShowcaseContainer>
  );
}
