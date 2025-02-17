import type { Metadata } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";
import "./globals.css";
import { MSWProvider } from "@/lib/MSWComponent";
import AuthSession from "@/lib/AuthSession";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.ttf",
  display: "swap",
  weight: "45 920",
});

export const metadata: Metadata = {
  title: "X. 무슨 일이 일어나고 있나요? / X",
  description:
    "뉴스 속보와 엔터테인먼트부터 스포츠와 정치까지, 실시간 코멘터리와 함께 이야기의 전말을 확인해 보세요.",
};

if (
  process.env.NEXT_RUNTIME === "nodejs" &&
  process.env.NODE_ENV !== "production" &&
  process.env.NEXT_PUBLIC_MSW_ENABLED !== "false"
) {
  import("@/mocks/http").then(({ server }) => {
    server.listen();
  });
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pretendard.className}>
        <MSWProvider>
          <AuthSession>{children}</AuthSession>
        </MSWProvider>
      </body>
    </html>
  );
}
