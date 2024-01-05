import { useMemo } from "react";
import styles from "./BulletNumber.module.css";

const BulletNumber = ({ textBullet, textNumber, textBulletColor }) => {
  const textBulletStyle = useMemo(() => {
    return {
      color: textBulletColor,
    };
  }, [textBulletColor]);

  return (
    <div className={styles.containerContent}>
      <div className={styles.textBullet} style={textBulletStyle}>
        {textBullet}
      </div>
      <b className={styles.textNumber}>{textNumber}</b>
    </div>
  );
};

export default BulletNumber;
