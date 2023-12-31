import { useMemo } from "react";
import styles from "./BulletCheckmark.module.css";

const BulletCheckmark = ({ imageIconURL, textBullet, textBulletColor }) => {
  const textBulletStyle = useMemo(() => {
    return {
      color: textBulletColor,
    };
  }, [textBulletColor]);

  return (
    <div className={styles.containerContent}>
      <img
        className={styles.imageIcon}
        alt="Icon Checkmark"
        src={imageIconURL}
      />
      <div className={styles.textBullet} style={textBulletStyle}>
        {textBullet}
      </div>
    </div>
  );
};

export default BulletCheckmark;
