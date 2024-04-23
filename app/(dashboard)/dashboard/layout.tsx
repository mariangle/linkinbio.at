import { Navbar } from "@/components/dashboard/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col gap-4 bg-background sm:flex-row">
      <Navbar />
      <div className="w-full">{children}</div>
    </div>
  );
}
