import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function FontForm() {
  return (
    <div className="rounded-lg bg-secondary p-4">
      <h2 className="mb-2 font-semibold">Title Font</h2>
      <div className="mb-4 space-y-2">
        <Label>Font</Label>
        <div className="rounded-lg border bg-input p-2">Inter</div>
      </div>
      <div className="space-y-2">
        <Label>Color</Label>
        <div className="flex items-center gap-2">
          <div>
            <Input
              type="color"
              className="h-10 w-10 cursor-pointer appearance-none p-0"
            />
          </div>
          <Input className="bg-input" />
        </div>
      </div>
    </div>
  );
}
