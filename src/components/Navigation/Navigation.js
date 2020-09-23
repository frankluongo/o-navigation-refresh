import React from "react";

import styles from "./Navigation.module.scss";

export default function Navigation({ className }) {
  return (
    <aside className={`${styles.Aside} ${className}`}>
      <nav className={styles.Nav}>Nav</nav>
    </aside>
  );
}
