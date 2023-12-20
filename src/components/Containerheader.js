import { useMemo } from "react";
import DistributionVertical1 from "./DistributionVertical1";
import styles from "./Containerheader.module.css";

const Containerheader = ({
  texth1light,
  texth1bold,
  textp,
  containerheaderZIndex,
  texth1lightColor,
  texth1lightMargin,
  texth1boldColor,
  texth1boldMargin,
  textpColor,
  textpMargin,
}) => {
  const containerheaderStyle = useMemo(() => {
    return {
      zIndex: containerheaderZIndex,
    };
  }, [containerheaderZIndex]);

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

  const textpStyle = useMemo(() => {
    return {
      color: textpColor,
      margin: textpMargin,
    };
  }, [textpColor, textpMargin]);

  return (
    <div className={styles.containerheader} style={containerheaderStyle}>
      <DistributionVertical1
        secondaryText="Context"
        primaryText="Selection"
        showPrimaryText
        showSecondaryText
        distributionVerticalAlignSelf="unset"
        distributionVerticalGap="var(--gap-24) var(--gap-24) var(--gap-24)"
        texth1lightColor="#181f4e"
        texth1lightMargin="unset"
        texth1boldColor="#181f4e"
        texth1boldMargin="unset"
      />
      <div className={styles.textp} style={textpStyle}>
        {textp}
      </div>
    </div>
  );
};

export default Containerheader;
