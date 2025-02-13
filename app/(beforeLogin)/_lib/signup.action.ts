"use server";
import { signIn } from "@/auth";
import { redirect } from "next/navigation";

export const submitSignup = async (
  prevState: { message: string | null },
  formData: FormData
) => {
  if (!formData.get("id") || !(formData.get("id") as string)?.trim()) {
    return { message: "no_id" };
  }
  if (!formData.get("name") || !(formData.get("name") as string)?.trim()) {
    return { message: "no_name" };
  }
  if (
    !formData.get("password") ||
    !(formData.get("password") as string)?.trim()
  ) {
    return { message: "no_password" };
  }
  if (!formData.get("image")) {
    return { message: "no_image" };
  }
  formData.set("nickname", formData.get("name") as string);
  let shouldRedirect = false;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
      {
        method: "post",
        body: formData,
        credentials: "include",
      }
    );

    if (response.status === 403) {
      return { message: "user_exists" };
    } else if (response.status === 400) {
      return {
        message: (await response.json()).data[0],
        id: formData.get("id"),
        nickname: formData.get("nickname"),
        password: formData.get("password"),
        image: formData.get("image"),
      };
    }
    shouldRedirect = true;
    await signIn("credentials", {
      username: formData.get("id"),
      password: formData.get("password"),
      redirect: false,
    });
  } catch (err) {
    console.error(err);
    return { message: null };
  }

  if (shouldRedirect) {
    redirect("/home");
  }
  return { message: null };
};
