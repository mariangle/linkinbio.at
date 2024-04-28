"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import {
  FormHeading,
  FormContainer,
  FormFooter,
  FormContent,
  FormDescription,
} from "@/components/dashboard/form";

export function AppearanceForm() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <FormContainer>
      <FormContent>
        <FormHeading>Appearance</FormHeading>
        <FormDescription>Choose between light and dark mode.</FormDescription>
        <div className="grid grid-cols-1 gap-6 md:max-w-2xl md:grid-cols-2">
          <div>
            <div
              role="presentation"
              className={cn(
                "items-center rounded-md border-2 border-primary p-1 dark:border-muted ",
              )}
              onClick={() => setTheme("light")}
            >
              <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
                <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                  <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
                  <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                </div>
                <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                  <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                  <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                </div>
                <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                  <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                  <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                </div>
              </div>
            </div>
            <div className="py-2 text-center">Light</div>
          </div>
          <div>
            <div
              role="presentation"
              className={cn(
                "items-center rounded-md border-2 border-muted p-1 dark:border-primary",
              )}
              onClick={() => setTheme("dark")}
            >
              <div className="space-y-2 rounded-sm bg-[#15161d] p-2">
                <div className="space-y-2 rounded-md bg-[#1c1e29] p-2 shadow-sm">
                  <div className="h-2 w-[80px] rounded-lg bg-slate-600" />
                  <div className="h-2 w-[100px] rounded-lg bg-slate-600" />
                </div>
                <div className="flex items-center space-x-2 rounded-md bg-[#1c1e29] p-2 shadow-sm">
                  <div className="h-4 w-4 rounded-full bg-slate-600" />
                  <div className="h-2 w-[100px] rounded-lg bg-slate-600" />
                </div>
                <div className="flex items-center space-x-2 rounded-md bg-[#1c1e29] p-2 shadow-sm">
                  <div className="h-4 w-4 rounded-full bg-slate-600" />
                  <div className="h-2 w-[100px] rounded-lg bg-slate-600" />
                </div>
              </div>
            </div>
            <div className="py-2 text-center">Dark</div>
          </div>
        </div>
      </FormContent>
    </FormContainer>
  );
}
