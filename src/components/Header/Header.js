import React from "react";

import Avatar from "@components/Avatar";
import Search from "@components/Search";

import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.HeaderSearch}>
        <Search />
      </div>
      <div className={styles.HeaderAvatar}>
        <Avatar />
      </div>
    </header>
  );
}
