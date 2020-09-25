import React from "react";

import styles from "./Video.module.scss";

export default function Video({ fpo, showFpo }) {
  const backgroundImage = showFpo ? `url(${fpo})` : "";
  return <div className={styles.Video} style={{ backgroundImage }}></div>;
}

Video.defaultProps = {
  fpo: "https://www.fillmurray.com/1030/580",
  showFpo: true,
};
