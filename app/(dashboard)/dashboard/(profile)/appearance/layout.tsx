import CustomizationNav from "@/components/dashboard/customization-nav";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <CustomizationNav />
      {children}
    </div>
  );
}
