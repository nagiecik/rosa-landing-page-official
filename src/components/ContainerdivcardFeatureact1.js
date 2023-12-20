import styles from "./ContainerdivcardFeatureact1.module.css";

const ContainerdivcardFeatureact1 = ({
  imageicon,
  numberText = "08",
  titleText = "AI Assistant",
  contentText = "experience seamless support with our ai assistant",
  showNumberText = true,
  showTitleText = true,
  showContentText = true,
}) => {
  return (
    <div className={styles.containerdivcardFeatureact}>
      <img className={styles.imageicon} alt="" src={imageicon} />
      <div className={styles.containerdivtext}>
        {showNumberText && <h6 className={styles.texth6}>{numberText}</h6>}
        {showTitleText && <h6 className={styles.texth61}>{titleText}</h6>}
        {showContentText && <p className={styles.textp}>{contentText}</p>}
      </div>
    </div>
  );
};

export default ContainerdivcardFeatureact1;
