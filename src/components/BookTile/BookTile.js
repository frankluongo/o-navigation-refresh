import React from "react";

import styles from "./BookTile.module.scss";

export default function BookTile({ url, title, image }) {
  return (
    <a
      href={url}
      className={styles.Tile}
      aria-label={title}
      style={{ backgroundImage: `url(${image})` }}
    />
  );
}

BookTile.defaultProps = {
  url: "/",
  title: "Bioinformatics",
  image: "https://placekitten.com/122/185",
};
