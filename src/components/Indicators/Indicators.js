import React from "react";

import styles from "./Indicators.module.scss";

import { IconDNA, IconComputer } from "@icons";
import Indicator from "./Indicator";

export default function Indicators({ icons }) {
  console.log(icons);
  return (
    <ul className={styles.Indicators}>
      {icons.map((icon, i) => (
        <li className={styles.IndicatorLi} key={i}>
          <Indicator icon={icon} />
        </li>
      ))}
    </ul>
  );
}

Indicators.defaultProps = {
  icons: [
    {
      label: "DNA",
      Icon: IconDNA,
      indicatorColor: "#dcf2e8",
      iconColor: "#3d8e64",
    },
    {
      label: "Desktop",
      Icon: IconComputer,
      indicatorColor: "#ffe8eb",
      iconColor: "#e2384e",
    },
  ],
};
