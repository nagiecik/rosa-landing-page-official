import React from "react";
import styles from "./ButtonApple.module.css";

const ButtonApple = ({}) => (
  <a href="https://apps.apple.com/pl/app/rosa-rules-of-sports-app/id1622562179">
    <img
      className={styles.containerButton}
      alt="App Store Button"
      src="./../buttonAppStore.svg"
    />
  </a>
);
export default ButtonApple;
