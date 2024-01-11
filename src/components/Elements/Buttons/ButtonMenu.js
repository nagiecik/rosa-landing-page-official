import React from "react";
import styles from "./ButtonMenu.module.css";

const Button = ({ iconURL, altIconText }) => (
  <div className={styles.containerButton}>
    <img className={styles.icon} alt={altIconText} src={iconURL} />
  </div>
);

export default Button;
