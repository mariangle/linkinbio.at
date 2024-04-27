import { SecondaryNav } from "@/components/dashboard/secondary-nav";
import { biolinkCustomizationLinks } from "@/constants/nav-links";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SecondaryNav items={biolinkCustomizationLinks} />
      {children}
    </div>
  );
}
