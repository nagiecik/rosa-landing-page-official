import React from "react";
import styles from "./BulletNumber.module.css";

const BulletNumber = ({ textBullet, textNumber, textBulletColor }) => {
  return (
    <div className={styles.containerContent}>
      <div className={styles.textBullet} style={{ color: textBulletColor }}>
        {textBullet}
      </div>
      <b className={styles.textNumber}>{textNumber}</b>
    </div>
  );
};

export default BulletNumber;
