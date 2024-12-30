import * as styles from "./explore.css";
import SearchForm from "../_components/SearchForm";
import TrendSection from "./_components/TrendSection";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.formZone}>
        <SearchForm />
      </div>
      <div className={styles.trend}>
        <h3 className={styles.trendTitle}>나를 위한 트렌드</h3>
        <TrendSection />
      </div>
    </main>
  );
}
