import React from "react";

import Layout from "@components/Layout";

import styles from "./Application.module.scss";

export default function Application() {
  return (
    <Layout>
      <div className={styles.Application}>This is the main content</div>
    </Layout>
  );
}
