import React from "react";

import styles from "./Indicators.module.scss";

export default function Indicator({ icon }) {
  const { Icon, label, indicatorColor, iconColor } = icon;
  return (
    <div
      className={styles.Indicator}
      aria-label={label}
      style={{ backgroundColor: indicatorColor }}
    >
      <Icon className={styles.Icon} style={{ fill: iconColor }} />
    </div>
  );
}
