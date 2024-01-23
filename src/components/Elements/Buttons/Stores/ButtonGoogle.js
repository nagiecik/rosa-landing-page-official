import React from "react";
import styles from "./ButtonGoogle.module.css";

const ButtonGoogle = ({}) => (
  <a href="https://play.google.com/store/apps/details?id=pl.mamf.rosa.example&hl=pl&gl=US">
    <img
      className={styles.containerButton}
      alt="Google Play Button"
      src="./../buttonGooglePlay.svg"
    />
  </a>
);
export default ButtonGoogle;
