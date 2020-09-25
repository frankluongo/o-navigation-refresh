import React from "react";

import styles from "./NavLink.module.scss";

export default function NavLink({ children, ...props }) {
  return (
    <a className={styles.NavLink} {...props}>
      {children}
    </a>
  );
}
