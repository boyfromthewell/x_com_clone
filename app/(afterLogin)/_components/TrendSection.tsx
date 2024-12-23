"use client";
import { usePathname } from "next/navigation";
import Trend from "./Trend";
import * as styles from "./trendSection.css";
import { useSession } from "next-auth/react";

export default function TrendSection() {
  const pathname = usePathname();
  const { data } = useSession();
  if (pathname === "/explore") return null;
  if (data?.user) {
    return (
      <div className={styles.trendBg}>
        <div className={styles.trend}>
          <h3 className={styles.trendH3}>나를 위한 트렌드</h3>
        </div>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    );
  }
  return (
    <div className={styles.trendBg}>
      <div className={styles.noTrend}>트랜드를 가져올 수 없습니다.</div>
    </div>
  );
}
