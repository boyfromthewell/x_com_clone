import Trend from "./Trend";
import * as styles from "./trendSection.css";

export default function TrendSection() {
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
