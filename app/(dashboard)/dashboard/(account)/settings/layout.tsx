import { SecondaryNav } from "@/components/dashboard/secondary-nav";
import { settingsLinks } from "@/lib/constants/nav-links";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="md:max-w-screen-md">
      <SecondaryNav items={settingsLinks} />
      {children}
    </div>
  );
}
