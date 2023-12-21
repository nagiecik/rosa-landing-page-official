import { useMemo } from "react";
import DistributionVertical1 from "./Elements/SectionHeader";
import styles from "./Containersectionfeature2.module.css";

const Containersectionfeature2 = ({
  imagemockup,
  texth1light,
  texth1bold,
  containersectionfeature2BoxSizing,
  containersectionfeature2ZIndex,
  texth1lightMargin,
  texth1boldMargin,
  textpMargin,
}) => {
  const containersectionfeature2Style = useMemo(() => {
    return {
      boxSizing: containersectionfeature2BoxSizing,
      zIndex: containersectionfeature2ZIndex,
    };
  }, [containersectionfeature2BoxSizing, containersectionfeature2ZIndex]);

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

  const textp4Style = useMemo(() => {
    return {
      margin: textpMargin,
    };
  }, [textpMargin]);

  return (
    <div
      className={styles.containersectionfeature2}
      style={containersectionfeature2Style}
    >
      <img className={styles.imagemockupIcon} alt="" src={imagemockup} />
      <div className={styles.containerarticlefeature}>
        <DistributionVertical1
          secondaryText="Documents"
          primaryText="Selection"
          showPrimaryText
          showSecondaryText
          distributionVerticalAlignSelf="stretch"
          distributionVerticalGap="var(--gap-24) var(--gap-24) var(--gap-24)"
          texth1lightColor="#181f4e"
          texth1lightMargin="unset"
          texth1boldColor="#181f4e"
          texth1boldMargin="unset"
        />
        <div className={styles.textp} style={textp4Style}>
          treamline access to crucial resources with the Documents Selection
          feature. Organize and display a wide range of file types, from PDFs to
          documents, within dedicated sections of your app. Whether it's
          competition rules, equipment specifications, or instructional
          materials, ROSA empowers your organization to provide a comprehensive
          library of documents, making it easy for users to find and download
          the information they need, enhancing their engagement and knowledge.
        </div>
      </div>
    </div>
  );
};

export default Containersectionfeature2;
