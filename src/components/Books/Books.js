import React from "react";
import BookTile from "@components/BookTile";

import styles from "./Books.module.scss";

export default function Books({ books }) {
  return (
    <ul className={styles.Books}>
      {books.map((book) => (
        <li className={styles.Item} key={book}>
          <BookTile />
        </li>
      ))}
    </ul>
  );
}

Books.defaultProps = {
  books: [1, 2, 3, 4],
};
