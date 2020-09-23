import React from "react";

import Header from "@components/Header";
import Navigation from "@components/Navigation";

import styles from "./Layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.Wrapper}>
      <Navigation className={styles.Nav} />
      <Header className={styles.Header} />
      <main className={styles.Main}>{children}</main>
    </div>
  );
}
