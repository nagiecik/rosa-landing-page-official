import { useMemo } from "react";
import styles from "./CardContext.module.css";
import { useHover } from "@uidotdev/usehooks";

const CardContext = ({
  textNumber,
  textTitle,
  textParagraph,
}) => {

  return (
    <div
      className={styles.containerCard}
    >
      <div
        className={styles.containerCardNumber}
      >
        <h5 className={styles.textNumber}>
          {textNumber}
        </h5>
      </div>
      <div className={styles.containerText}>
        <h5 className={styles.textTitle}>
          {textTitle}
        </h5>
        <div className={styles.textParagraph}>
          {textParagraph}
        </div>
      </div>
    </div>
  );
};

export default CardContext;
