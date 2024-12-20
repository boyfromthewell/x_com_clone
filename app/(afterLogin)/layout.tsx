import { ReactNode } from "react";
import * as styles from "./layout.css";
import Link from "next/link";
import XLogo from "../../public/xlogo.png";
import Image from "next/image";
import NavMenu from "./_components/NavMenu";
import LogoutButton from "./_components/LogoutButton";
import TrendSection from "./_components/TrendSection";
import FollowRecommend from "./_components/FollowRecommend";
import RightSearchZone from "./_components/RightSearchZone";

export default function AfterLoginLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <div className={styles.container}>
      <header className={styles.leftSectionWrapper}>
        <section className={styles.leftSection}>
          <div className={styles.leftSectionFixed}>
            <Link className={styles.logo} href="/home">
              <div className={styles.logoFill}>
                <Image src={XLogo} alt="logo" width={40} height={40} />
              </div>
            </Link>
            <nav className={styles.leftSectionNav}>
              <ul>
                <NavMenu />
              </ul>
              <Link href="/compose/tweet" className={styles.postButton}>
                게시하기
              </Link>
            </nav>
            <LogoutButton />
          </div>
        </section>
      </header>
      <div className={styles.rightSectionWrapper}>
        <div className={styles.rightSectionInner}>
          <main className={styles.main}>{children}</main>
          <section className={styles.rightSection}>
            <RightSearchZone />
            <TrendSection />
            <div className={styles.followRecommend}>
              <h3 className={styles.followRecommendH3}>팔로우 추천</h3>
              <FollowRecommend />
              <FollowRecommend />
              <FollowRecommend />
            </div>
          </section>
        </div>
      </div>
      {modal}
    </div>
  );
}
