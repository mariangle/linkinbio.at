import { Heading } from "@/components/ui/typography";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full py-4 xl:flex-[3]">
      <div className="mx-auto w-full max-w-2xl">
        <Breadcrumbs />
        <Heading level="h1" className="mt-4 pb-4 text-2xl md:text-2xl" />
        {children}
      </div>
    </div>
  );
}
