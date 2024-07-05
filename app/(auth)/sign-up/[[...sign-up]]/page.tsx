import AuthPage from "@/app/(auth)/auth-page";

export default function Page({
  searchParams,
}: {
  searchParams?: {
    username?: string;
  };
}) {
  return <AuthPage variant="sign-up" username={searchParams?.username} />;
}
