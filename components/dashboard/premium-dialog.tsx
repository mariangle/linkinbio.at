import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { siteConfig } from "@/lib/metadata";

export function PremiumDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upgrade to Premium</DialogTitle>
          <DialogDescription>
            Unlock advanced customization options for your biolink page and get
            access to premium features for just €14.99 for a lifetime license.
            Ensure you use the same email for payment as your account.
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-2 sm:flex-col">
          <Link
            href={siteConfig.paymentLink}
            className={cn(buttonVariants({ variant: "default" }), "w-full")}
          >
            I understand, upgrade to premium
          </Link>
          <Link
            href="/pricing"
            className={cn(buttonVariants({ variant: "secondary" }), "w-full")}
          >
            View pricing and features
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
