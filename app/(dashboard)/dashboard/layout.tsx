import { Navbar } from "@/components/dashboard/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col gap-4 md:flex-row">
      <Navbar />
      <div className="w-full">{children}</div>
    </div>
  );
}
