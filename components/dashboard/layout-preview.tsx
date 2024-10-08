import { Layout as LayoutEnum } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Image as ImageIcon } from "lucide-react";

export function LayoutPreview({ layout }: { layout: LayoutEnum }) {
  switch (layout) {
    case LayoutEnum.Standard:
      return <StandardLayoutPreview />;
    case LayoutEnum.WithCover:
      return <WithCoverLayoutPreview />;
    case LayoutEnum.Professional:
      return <ProfessionalLayoutPreview />;
    case LayoutEnum.Glassmorphism:
      return <GlassmorphismLayout />;
    case LayoutEnum.Bold:
      return <BoldLayoutPreview />;
    case LayoutEnum.Modern:
      return <ModernLayoutPreview />;
  }
}

export function StandardLayoutPreview() {
  return (
    <LayoutPreviewWrapper>
      <div className="flex flex-col items-center justify-center gap-2">
        <ProfilePicturePreview />
        <TitlePreview />
        <BioPreview />
        <TopIconsPreview />
      </div>
      <ButtonsPreview />
    </LayoutPreviewWrapper>
  );
}

export function WithCoverLayoutPreview() {
  return (
    <LayoutPreviewWrapper>
      <CoverPreview />
      <div className="relative mt-14 flex flex-col items-center justify-center gap-2">
        <ProfilePicturePreview />
        <TitlePreview />
        <BioPreview />
        <TopIconsPreview />
      </div>
      <ButtonsPreview />
    </LayoutPreviewWrapper>
  );
}

export function ProfessionalLayoutPreview() {
  return (
    <LayoutPreviewWrapper>
      <CoverPreview className="inset-x-0 top-0 h-24 rounded-none" />
      <div className="relative mt-[58px] flex flex-col items-start justify-center gap-2">
        <div className="flex w-full items-end justify-between">
          <ProfilePicturePreview />
          <TopIconsPreview className="translate-y-4" />
        </div>
        <TitlePreview />
        <BioPreview />
      </div>
      <ButtonsPreview />
    </LayoutPreviewWrapper>
  );
}

export function GlassmorphismLayout() {
  return (
    <LayoutPreviewWrapper className="py-8">
      <div className="rounded-lg border border-white/25 bg-gradient-to-r from-white/25 to-white/50 p-4 dark:border-white/5 dark:from-black/10 dark:to-black/25">
        <div className="flex flex-col items-start justify-start gap-2">
          <ProfilePicturePreview />
          <TitlePreview />
          <BioPreview />
          <TopIconsPreview />
        </div>
        <ButtonsPreview />
      </div>
    </LayoutPreviewWrapper>
  );
}

export function BoldLayoutPreview() {
  return (
    <LayoutPreviewWrapper>
      <div className="relative flex flex-col items-start justify-center gap-2">
        <div className="flex w-full items-center gap-4">
          <ProfilePicturePreview className="size-16" />
          <TitlePreview />
        </div>
      </div>
      <BioPreview className="mt-4" />
      <TopIconsPreview />
      <ButtonsPreview />
    </LayoutPreviewWrapper>
  );
}

export function ModernLayoutPreview() {
  return (
    <LayoutPreviewWrapper className="bg-neutral-300 p-2 dark:bg-zinc-950">
      <CoverPreview className="static inset-0 rounded-none" />
      <div className="relative flex w-full flex-col items-center justify-start gap-2 rounded-lg bg-white/50 p-4 pb-10 dark:bg-neutral-900/50">
        <TitlePreview />
        <BioPreview />
        <ButtonsPreview count={2} />
      </div>
    </LayoutPreviewWrapper>
  );
}

export function TitlePreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-4 w-16 rounded-full bg-zinc-200 shadow-sm dark:bg-zinc-800",
        className,
      )}
    />
  );
}

export function CoverPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute left-4 right-4 top-4 grid h-20 place-content-center rounded-2xl bg-neutral-300 shadow-sm dark:bg-zinc-950/50",
        className,
      )}
    >
      <ImageIcon className="size-6 text-neutral-100 dark:text-[#484b57]" />
    </div>
  );
}

export function BioPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-4 w-32 rounded-lg bg-zinc-200 shadow-sm dark:bg-zinc-800",
        className,
      )}
    />
  );
}

export function TopIconsPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "mt-2 flex w-fit items-center justify-center gap-2.5",
        className,
      )}
    >
      <div className="size-5 rounded-full bg-zinc-200 shadow-sm dark:bg-zinc-800" />
      <div className="size-5 rounded-full bg-zinc-200 shadow-sm dark:bg-zinc-800" />
    </div>
  );
}

export function ProfilePicturePreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "size-10 rounded-full bg-zinc-200 shadow-sm dark:bg-zinc-800",
        className,
      )}
    />
  );
}

export function ButtonsPreview({ count = 3 }: { count?: number }) {
  return (
    <div className="mt-4 flex w-full flex-col items-center justify-center gap-3">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="h-6 w-full rounded-lg bg-zinc-200 shadow-sm dark:bg-zinc-800"
        />
      ))}
    </div>
  );
}

export function LayoutPreviewWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative h-[275px] w-[200px] overflow-hidden rounded-2xl bg-white/50 p-4 dark:bg-neutral-950/50",
        className,
      )}
    >
      {children}
    </div>
  );
}
