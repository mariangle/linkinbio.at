export default function Page({
  params,
}: {
  params: {
    username: string;
  };
}) {
  return <div className="min-h-screen bg-red-500">{params.username}</div>;
}
