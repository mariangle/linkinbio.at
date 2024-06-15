import { UsernameForm } from "./username-form";
import { DeleteAccountForm } from "./delete-account-form";
import { EmailForm } from "./email-form";
import { ChangePasswordForm } from "./change-password-form";
import { getCachedBiolink } from "@/server/actions/get-biolink";
import { UpgradeToPremiumBanner } from "@/components/dashboard/premium-feature";

export default async function Settings() {
  const biolink = await getCachedBiolink();

  if (!biolink) return null;

  return (
    <>
      {!biolink.user.premium && <UpgradeToPremiumBanner />}
      <EmailForm email={biolink.user.email} />
      <ChangePasswordForm />
      <UsernameForm username={biolink.user.username} />
      <DeleteAccountForm />
    </>
  );
}
