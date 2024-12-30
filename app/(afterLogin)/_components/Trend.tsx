import Link from "next/link";
import * as styles from "./trend.css";
import { HashTag } from "@/model/hashtag";

interface TrendProps {
  trend: HashTag;
}

export default function Trend({ trend }: TrendProps) {
  return (
    <Link
      href={`/search?q=${encodeURIComponent(trend.title)}`}
      className={styles.container}
    >
      <div className={styles.count}>실시간트렌드</div>
      <div className={styles.title}>{trend.title}</div>
      <div className={styles.count}>{trend.count.toLocaleString()} posts</div>
    </Link>
  );
}
