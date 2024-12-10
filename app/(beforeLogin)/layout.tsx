import { ReactNode } from "react";
import * as styles from "@/app/(beforeLogin)/_components/main.css";

export default function Layout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <div className={styles.container}>
      {children} {modal}
    </div>
  );
}
