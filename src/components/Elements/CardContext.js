import styles from "./CardContext.module.css";

const CardContext = ({ textNumber, textTitle, textParagraph }) => {
  return (
    <div className={styles.containerCard}>
      <div className={styles.containerCardNumber}>
        <h5 className={styles.textNumber}>{textNumber}</h5>
      </div>
      <div className={styles.containerText}>
        <h6 className={styles.textTitle}>{textTitle}</h6>
        <div className={styles.textParagraph}>{textParagraph}</div>
      </div>
    </div>
  );
};

export default CardContext;
