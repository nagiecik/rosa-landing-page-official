import { useMemo } from "react";
import styles from "./BulletCheckmark.module.css";

const BulletCheckmark = ({ imageIconURL, textBullet, textBulletColor }) => {
  return (
    <div className={styles.containerContent}>
      <img
        className={styles.imageIcon}
        alt="Icon Checkmark"
        src={imageIconURL}
      />
      <div className={styles.textBullet} style={{ color: textBulletColor }}>
        {textBullet}
      </div>
    </div>
  );
};

export default BulletCheckmark;
