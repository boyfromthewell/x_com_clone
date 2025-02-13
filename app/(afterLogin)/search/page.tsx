import { Metadata } from "next";
import BackButton from "../_components/BackButton";
import SearchForm from "../_components/SearchForm";
import SearchResult from "./_components/SearchResult";
import Tab from "./_components/Tab";
import * as styles from "./search.css";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q: string; f?: string; pf?: string }>;
}): Promise<Metadata> {
  const { q } = await searchParams;
  return {
    title: `${q} - 검색 / X`,
    description: `${q} - 검색 / X`,
  };
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string; f?: string; pf?: string }>;
}) {
  const query = await searchParams;

  return (
    <main className={styles.main}>
      <div className={styles.searchTop}>
        <div className={styles.searchZone}>
          <div className={styles.buttonZone}>
            <BackButton />
          </div>
          <div className={styles.formZone}>
            <SearchForm q={query.q} pf={query.pf} f={query.f} />
          </div>
        </div>
        <Tab />
      </div>
      <div className={styles.list}>
        <SearchResult searchParams={query} />
      </div>
    </main>
  );
}
