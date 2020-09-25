import React from "react";

import styles from "./Avatar.module.scss";

export default function Avatar({ src }) {
  return (
    <a className={styles.Avatar} aria-label="User Profile" href="/">
      <img className={styles.Image} src={src} alt="User Profile" />
    </a>
  );
}

Avatar.defaultProps = {
  src: "https://placekitten.com/200/200",
};
