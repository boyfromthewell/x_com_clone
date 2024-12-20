import Home from "@/app/(afterLogin)/home/page";

export default function Page({
  params,
}: Promise<{ username: string; id: string; photoId: string }>) {
  return <Home />;
}
