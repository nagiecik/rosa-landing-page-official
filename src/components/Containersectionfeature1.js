import { useMemo } from "react";
import DistributionVertical1 from "./DistributionVertical1";
import styles from "./Containersectionfeature1.module.css";

const Containersectionfeature1 = ({
  texth1light,
  texth1bold,
  textp,
  imagemockup,
  containersectionfeature1BoxSizing,
  containersectionfeature1ZIndex,
  texth1lightMargin,
  texth1boldMargin,
  textpMargin,
}) => {
  const containersectionfeature1Style = useMemo(() => {
    return {
      boxSizing: containersectionfeature1BoxSizing,
      zIndex: containersectionfeature1ZIndex,
    };
  }, [containersectionfeature1BoxSizing, containersectionfeature1ZIndex]);

  const texth1lightStyle = useMemo(() => {
    return {
      margin: texth1lightMargin,
    };
  }, [texth1lightMargin]);

  const texth1boldStyle = useMemo(() => {
    return {
      margin: texth1boldMargin,
    };
  }, [texth1boldMargin]);

  const textp3Style = useMemo(() => {
    return {
      margin: textpMargin,
    };
  }, [textpMargin]);

  return (
    <div
      className={styles.containersectionfeature1}
      style={containersectionfeature1Style}
    >
      <div className={styles.containerarticlefeature}>
        <DistributionVertical1
          secondaryText="Official"
          primaryText="Partners"
          showPrimaryText
          showSecondaryText
          distributionVerticalAlignSelf="stretch"
          distributionVerticalGap="var(--spacing-24) var(--spacing-24) var(--spacing-24)"
          texth1lightColor="#181f4e"
          texth1lightMargin="unset"
          texth1boldColor="#181f4e"
          texth1boldMargin="unset"
        />
        <div className={styles.textp} style={textp3Style}>
          {textp}
        </div>
      </div>
      <img className={styles.imagemockupIcon} alt="" src={imagemockup} />
    </div>
  );
};

export default Containersectionfeature1;
