import { Header } from "./_components/header";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#0B363C] text-[#E3FFCC]">
      <Header />
      {children}
    </div>
  );
}
