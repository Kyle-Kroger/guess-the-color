import React from "react";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.wrapper}>
      <h1>Hue to Hex</h1>
    </header>
  );
}

export default Header;