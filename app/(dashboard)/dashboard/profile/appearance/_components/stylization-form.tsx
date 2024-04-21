import { Label } from "@/components/ui/label";
import React from "react";

export function StylizationForm() {
  return (
    <div className="rounded-lg bg-secondary p-4">
      <h2 className="mb-2 font-semibold">Stylzaition</h2>
      <div className="mb-4 space-y-2">
        <Label>Background</Label>
        <div className="rounded-lg border bg-input p-2">
          <div>opacity</div>
          <div>rounded coners</div>
          <div>blur</div>
        </div>
      </div>
    </div>
  );
}
