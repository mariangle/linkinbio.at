import {
  ShowcaseContainer,
  ShowcaseHeader,
  ShowcaseDescription,
  ShowcaseIconContainer,
} from "./showcase";
import { PencilRuler } from "lucide-react";
import { InfiniteMovingIcons } from "@/app/(dashboard)/dashboard/(profile)/_components/infinite-moving-icons";

export function TopIconShowcase() {
  return (
    <ShowcaseContainer>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-4 opacity-50">
          <InfiniteMovingIcons speed="normal" />
        </div>
        <ShowcaseIconContainer>
          <PencilRuler className="size-5 text-white" />
        </ShowcaseIconContainer>
        <ShowcaseHeader>Top Icons</ShowcaseHeader>
        <ShowcaseDescription>
          Make your links appear in the top of your biolink as icons.
        </ShowcaseDescription>
      </div>
    </ShowcaseContainer>
  );
}
