"use client";
import { useRouter } from "next/navigation";
import Main from "../_components/Main";
import { useSession } from "next-auth/react";

export default function Page() {
  const router = useRouter();
  const { data: session } = useSession();

  if (session?.user) {
    router.replace("/home");
    return null;
  }

  router.replace("/i/flow/login");
  return <Main />;
}
