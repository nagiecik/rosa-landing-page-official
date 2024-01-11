import styles from "./CardFeature.module.css";

const CardFeature = ({
  imageIconUrl,
  textNumber = "textNumber",
  textTitle = "textTitle",
  textParagraph = "textContent",
  variants,
}) => {
  return (
    <div className={styles.containerCard}>
      <div className={styles.containerText}>
        <p className={styles.textNumber}>{textNumber}</p>
        <p className={styles.textTitle}>{textTitle}</p>
        <p className={styles.textParagraph}>{textParagraph}</p>
      </div>
      <div className={styles.containerCorner} href="#">
        <img className={styles.imageIcon} alt="" src={imageIconUrl} />
      </div>
    </div>
  );
};

export default CardFeature;
