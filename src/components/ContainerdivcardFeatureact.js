import { useMemo } from "react";
import styles from "./ContainerdivcardFeatureact.module.css";

const ContainerdivcardFeatureact = ({
  iconhouse,
  numberText = "01",
  titleText = "Title Text",
  contentText = "Content Text",
  showNumberText = true,
  showTitleText = true,
  showIcon = true,
  showContentText = true,
  texth6Margin,
  texth6FontWeight,
  texth6Margin1,
  texth6FontWeight1,
  textpMargin,
}) => {
  const texth61Style = useMemo(() => {
    return {
      margin: texth6Margin,
      fontWeight: texth6FontWeight,
    };
  }, [texth6Margin, texth6FontWeight]);

  const texth62Style = useMemo(() => {
    return {
      margin: texth6Margin1,
      fontWeight: texth6FontWeight1,
    };
  }, [texth6Margin1, texth6FontWeight1]);

  const textp2Style = useMemo(() => {
    return {
      margin: textpMargin,
    };
  }, [textpMargin]);

  return (
    <div className={styles.containerdivcardFeatureact}>
      <div className={styles.imageicon}>
        {showIcon && (
          <img className={styles.iconhouse} alt="" src={iconhouse} />
        )}
      </div>
      <div className={styles.containerdivtext}>
        {showNumberText && (
          <b className={styles.texth6} style={texth61Style}>
            {numberText}
          </b>
        )}
        {showTitleText && (
          <b className={styles.texth61} style={texth62Style}>
            {titleText}
          </b>
        )}
        {showContentText && (
          <div className={styles.textp} style={textp2Style}>
            {contentText}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContainerdivcardFeatureact;
