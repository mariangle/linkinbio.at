import { UsernameForm } from "./username-form";
import { DeleteAccountForm } from "./delete-account-form";
import { getCachedBiolink } from "@/server/actions/get-biolink";
import { PageWithPreview } from "@/components/dashboard/page";
import { UpgradeToPremiumBanner } from "@/components/dashboard/premium-feature";

export default async function Settings() {
  const biolink = await getCachedBiolink();

  if (!biolink) return null;

  return (
    <PageWithPreview>
      {!biolink.user.premium && <UpgradeToPremiumBanner />}
      <UsernameForm username={biolink.user.username} />
      <DeleteAccountForm />
    </PageWithPreview>
  );
}
