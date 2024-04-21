import React from "react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function ButtonForm() {
  return (
    <div className="rounded-lg bg-secondary p-4">
      <h2 className="mb-2 font-semibold">Buttons</h2>
      <div className="mb-4 space-y-2">
        <Label>Background</Label>
        <div className="rounded-lg border bg-input p-2">Inter</div>
      </div>
    </div>
  );
}
