import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Share2, Copy } from "lucide-react";

export function SharePopover({ username = "" }) {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`https://linkinbio.at/${username}`);
      toast.success("Link copied to clipboard");
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="bg-glass border-glass flex items-center rounded-lg border px-3 py-1.5">
          <Share2 className="mr-2.5 size-4" />
          Share
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 space-y-4">
        <Label>Share your biolink</Label>
        <div className="flex items-center gap-2">
          <Input value={`https://linkinbio.at/${username}`} readOnly />
          <Button variant="outline" onClick={copyToClipboard}>
            <Copy className="size-4" />
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
