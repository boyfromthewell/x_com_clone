import Image from "next/image";
import Link from "next/link";
import xLogo from "../../../public/xlogo.png";
import * as styles from "./main.css";

export default function Main() {
  return (
    <>
      <div className={styles.left}>
        <Image src={xLogo} alt="logo" width={408} height={464} />
      </div>
      <div className={styles.right}>
        <h1 className={styles.rightH1}>지금 일어나고 있는일</h1>
        <h2 className={styles.rightH2}>지금 가입하세요.</h2>
        <Link href="/i/flow/signup" className={styles.signup}>
          계정 만들기
        </Link>
        <h3 className={styles.rightH3}>이미 트위터에 가입하셨나요?</h3>
        <Link href="/login" className={styles.login}>
          로그인
        </Link>
      </div>
    </>
  );
}
