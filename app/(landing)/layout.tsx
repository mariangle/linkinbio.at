import { Header } from "./_components/header";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white text-black dark:bg-neutral-950 dark:text-white">
      <Header />
      {children}
    </div>
  );
}
