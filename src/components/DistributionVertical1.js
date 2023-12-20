import { useMemo } from "react";
import styles from "./DistributionVertical1.module.css";

const DistributionVertical1 = ({
  secondaryText = "All Provided",
  primaryText = "Features",
  showPrimaryText = true,
  showSecondaryText = true,
  distributionVerticalAlignSelf,
  distributionVerticalGap,
  texth1lightColor,
  texth1lightMargin,
  texth1boldColor,
  texth1boldMargin,
}) => {
  const distributionVerticalStyle = useMemo(() => {
    return {
      alignSelf: distributionVerticalAlignSelf,
      gap: distributionVerticalGap,
    };
  }, [distributionVerticalAlignSelf, distributionVerticalGap]);

  const texth1lightStyle = useMemo(() => {
    return {
      color: texth1lightColor,
      margin: texth1lightMargin,
    };
  }, [texth1lightColor, texth1lightMargin]);

  const texth1boldStyle = useMemo(() => {
    return {
      color: texth1boldColor,
      margin: texth1boldMargin,
    };
  }, [texth1boldColor, texth1boldMargin]);

  return (
    <div
      className={styles.distributionvertical}
      style={distributionVerticalStyle}
    >
      {showSecondaryText && (
        <div className={styles.texth1light} style={texth1lightStyle}>
          {secondaryText}
        </div>
      )}
      {showPrimaryText && (
        <div className={styles.texth1bold} style={texth1boldStyle}>
          {primaryText}
        </div>
      )}
    </div>
  );
};

export default DistributionVertical1;
