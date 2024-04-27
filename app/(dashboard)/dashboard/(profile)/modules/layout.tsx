import { SecondaryNav } from "@/components/dashboard/secondary-nav";
import { modulesLinks } from "@/constants/nav-links";

export default function ModulesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SecondaryNav items={modulesLinks} />
      {children}
    </div>
  );
}
