import React from "react";

import Intro from "@components/Intro";

import styles from "./Main.module.scss";

export default function Main() {
  return (
    <section className={styles.MainContent}>
      <h1>Bioinformatics</h1>
      <Intro />
    </section>
  );
}
