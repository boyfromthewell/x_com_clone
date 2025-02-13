"use client";
import { useRouter } from "next/navigation";
import Main from "../_components/Main";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") return;

    if (session?.user) {
      router.replace("/home");
    } else {
      router.replace("/i/flow/login");
    }
  }, [session, status, router]);

  if (status === "loading") return null;

  return <Main />;
}
