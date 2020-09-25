import React from "react";

import Logo from "@components/Logo";

import { IconHome, IconList, IconCalendar, IconGear } from "@icons";

import styles from "./Navigation.module.scss";
import NavLink from "./NavLink";

const links = [
  { url: "/", Icon: IconHome },
  { url: "/", Icon: IconList },
  { url: "/", Icon: IconCalendar },
  { url: "/", Icon: IconGear },
];

export default function Navigation({ className }) {
  return (
    <aside className={`${styles.Aside} ${className}`}>
      <nav className={styles.Nav}>
        <Logo className={styles.Logo} />
        {links.map((link, i) => (
          <NavLink href={link.url} key={i}>
            <link.Icon className={styles.LinkIcon} />
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
