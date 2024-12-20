"use client";
import { usePathname } from "next/navigation";
import * as styles from "./rightSearchZone.css";
import SearchForm from "./SearchForm";

export default function RightSearchZone() {
  const pathname = usePathname();
  const onChangeFollow = () => {};
  const onChangeAll = () => {};

  if (pathname === "/explore") return null;

  if (pathname === "/search")
    return (
      <div>
        <h5 className={styles.filterTitle}>검색 필터</h5>
        <div className={styles.filterSection}>
          <div>
            <label className={styles.filterSectionLabel}>사용자</label>
            <div className={styles.radio}>
              <div className={styles.radioItem}>모든 사용자</div>
              <input
                type="radio"
                name="pf"
                defaultChecked
                onChange={onChangeAll}
              />
            </div>
            <div className={styles.radio}>
              <div className={styles.radioItem}>내가 팔로우하는 사람들</div>
              <input
                type="radio"
                name="pf"
                value="on"
                onChange={onChangeFollow}
              />
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div style={{ marginBottom: 60, width: "inherit" }}>
      <SearchForm />
    </div>
  );
}
