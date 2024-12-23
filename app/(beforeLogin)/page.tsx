import { auth } from "@/auth";
import Main from "./_components/Main";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (session?.user) {
    redirect("/home");
  }
  return <Main />;
}
