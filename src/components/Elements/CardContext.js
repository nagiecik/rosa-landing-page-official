import styles from "./CardContext.module.css";

const CardContext = ({ textNumber, textTitle, textParagraph }) => {
  return (
    <div className={styles.containerCard}>
      <div className={styles.containerCorner} href="#">
        <p className={styles.textNumber}>{textNumber}</p>
        </div>
      <div className={styles.containerText}>
        <p className={styles.textTitle}>{textTitle}</p>
        <div className={styles.textParagraph}>{textParagraph}</div>
      </div>
    </div>
  );
};

export default CardContext;
