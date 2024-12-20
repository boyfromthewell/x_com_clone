import BackButton from "../_components/BackButton";
import Post from "../_components/Post";
import SearchForm from "../_components/SearchForm";
import Tab from "./_components/Tab";
import * as styles from "./search.css";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string; f?: string; pf?: string }>;
}) {
  const { q } = await searchParams;

  return (
    <main className={styles.main}>
      <div className={styles.searchTop}>
        <div className={styles.searchZone}>
          <div className={styles.buttonZone}>
            <BackButton />
          </div>
          <div className={styles.formZone}>
            <SearchForm q={q} />
          </div>
        </div>
        <Tab q={q} />
      </div>
      <div className={styles.list}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        {/*<SearchResult searchParams={searchParams} />*/}
      </div>
    </main>
  );
}
