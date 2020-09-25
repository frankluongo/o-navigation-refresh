import React from "react";

import styles from "./Grid.module.scss";

export default function Grid({ children, ...props }) {
  return (
    <section className={styles.Grid} {...props}>
      {children}
    </section>
  );
}
