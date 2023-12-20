import { useMemo } from "react";
import styles from "./DistributionVertical.module.css";

const DistributionVertical = ({
  secondaryText = "All Provided",
  primaryText = "Features",
  showPrimaryText = true,
  showSecondaryText = true,
  distributionVerticalFlex,
  texth2lightColor,
  texth2lightMargin,
  texth2boldColor,
  texth2boldTextDecoration,
  texth2boldMargin,
}) => {
  const distributionVertical1Style = useMemo(() => {
    return {
      flex: distributionVerticalFlex,
    };
  }, [distributionVerticalFlex]);

  const texth2lightStyle = useMemo(() => {
    return {
      color: texth2lightColor,
      margin: texth2lightMargin,
    };
  }, [texth2lightColor, texth2lightMargin]);

  const texth2boldStyle = useMemo(() => {
    return {
      color: texth2boldColor,
      textDecoration: texth2boldTextDecoration,
      margin: texth2boldMargin,
    };
  }, [texth2boldColor, texth2boldTextDecoration, texth2boldMargin]);

  return (
    <div
      className={styles.distributionvertical}
      style={distributionVertical1Style}
    >
      {showSecondaryText && (
        <div className={styles.texth2light} style={texth2lightStyle}>
          {secondaryText}
        </div>
      )}
      {showPrimaryText && (
        <div className={styles.texth2bold} style={texth2boldStyle}>
          {primaryText}
        </div>
      )}
    </div>
  );
};

export default DistributionVertical;
