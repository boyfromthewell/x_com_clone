"use client";
import { usePathname } from "next/navigation";
import Trend from "./Trend";
import * as styles from "./trendSection.css";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { HashTag } from "@/model/hashtag";
import { getTrends } from "../_lib/getTrends";

export default function TrendSection() {
  const pathname = usePathname();
  const { data: session } = useSession();

  const { data } = useQuery<HashTag[]>({
    queryKey: ["trends"],
    queryFn: getTrends,
    enabled: !!session?.user,
  });

  if (pathname === "/explore") return null;

  if (session?.user) {
    return (
      <div className={styles.trendBg}>
        <div className={styles.trend}>
          <h3 className={styles.trendH3}>나를 위한 트렌드</h3>
        </div>
        {data?.map((trend, idx) => (
          <Trend trend={trend} key={`${trend.title}${idx}`} />
        ))}
      </div>
    );
  }
  return (
    <div className={styles.trendBg}>
      <div className={styles.noTrend}>트랜드를 가져올 수 없습니다.</div>
    </div>
  );
}
