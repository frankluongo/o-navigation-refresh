import React from "react";

import { IconSearch } from "@icons";

import styles from "./Search.module.scss";

export default function Search() {
  return (
    <form className={styles.SearchForm} onSubmit={onSubmit}>
      <div className={styles.SearchWrapper}>
        <label htmlFor="search" className="visually-hidden">
          Search
        </label>
        <IconSearch className={styles.SearchIcon} />
        <input
          className={styles.SearchInput}
          type="text"
          name="search"
          id="search"
          placeholder="Topic: Bioinformatics"
        />
      </div>
      <button className={styles.SearchButton} type="submit">
        Browse
      </button>
    </form>
  );

  function onSubmit(e) {
    e.preventDefault();
  }
}
