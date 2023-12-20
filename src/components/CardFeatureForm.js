import styles from "./CardFeatureForm.module.css";

const CardFeatureForm = ({
  languageVersionCode = "02",
  contentLanguageVersions = "Language versions",
  multiLanguageContent = "entire content available in multiple languages",
  showTitleText = true,
  showNumberText = true,
  showContentText = true,
}) => {
  return (
    <div className={styles.containerdivcardFeatureina}>
      <img className={styles.imageicon} alt="" src="/imageicon@2x.png" />
      <div className={styles.containerdivtext}>
        {showNumberText && (
          <h6 className={styles.texth6}>{languageVersionCode}</h6>
        )}
        {showTitleText && (
          <h6 className={styles.texth61}>{contentLanguageVersions}</h6>
        )}
        {showContentText && (
          <p className={styles.textp}>{multiLanguageContent}</p>
        )}
      </div>
    </div>
  );
};

export default CardFeatureForm;
