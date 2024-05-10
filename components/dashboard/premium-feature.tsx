import { PremiumDialog } from "./premium-dialog";
import { FaLock } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export function UpgradeToPremiumButton() {
  return (
    <PremiumDialog>
      <button className="rounded-full bg-primary px-2.5 py-1 text-xs text-white">
        Upgrade to premium
      </button>
    </PremiumDialog>
  );
}

export function UpgradeToPremiumBanner() {
  return (
    <div className="h-[150px] rounded-2xl border border-white/10 bg-indigo-900 p-6">
      <div>
        <h2 className="text-lg font-semibold text-white">Upgrade to Premium</h2>
        <p className="mb-3 mt-1 text-sm text-gray-100 dark:text-gray-300">
          Unlock advanced customization options for your biolink page and get
          access to premium features.
        </p>
        <Button className="rounded-full">Get started</Button>
      </div>
    </div>
  );
}

export function LockedPremiumIcon() {
  return (
    <div>
      <FaLock className="size-3 text-foreground/50" />
    </div>
  );
}
