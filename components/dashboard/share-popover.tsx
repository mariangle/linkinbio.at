import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Copy } from "lucide-react";

export function SharePopover({
  username = "",
  children,
}: {
  username: string;
  children: React.ReactNode;
}) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`https://linkinbio.at/${username}`);
    toast.success("Link copied to clipboard");
  };

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
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
