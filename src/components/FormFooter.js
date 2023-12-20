import DistributionVertical from "./DistributionVertical";
import ImagedividerIcon from "./ImagedividerIcon";
import Containerdivlinkscolumn from "./Containerdivlinkscolumn";
import styles from "./FormFooter.module.css";

const FormFooter = () => {
  return (
    <footer className={styles.containerfooter}>
      <header className={styles.containerheaderfooter}>
        <DistributionVertical
          secondaryText="Interested in working with us?"
          primaryText="hello@rosa.zone"
          showPrimaryText
          showSecondaryText
          distributionVerticalFlex="1"
          texth2lightColor="#fff"
          texth2lightMargin="0"
          texth2boldColor="#fff"
          texth2boldTextDecoration="underline"
          texth2boldMargin="0"
        />
        <img
          className={styles.imagescrollUpIcon}
          alt=""
          src="/imagescrollup@2x.png"
        />
      </header>
      <ImagedividerIcon
        imageDimensions="/imagedivider21@2x.png"
        propAlignSelf="stretch"
        propMaxWidth="100%"
        propOverflow="hidden"
      />
      <div className={styles.containerdivcontent}>
        <img
          className={styles.imagelogoIcon}
          alt=""
          src="/imagelogo11@2x.png"
        />
        <div className={styles.containerdivlinks}>
          <Containerdivlinkscolumn
            text="Menu"
            textlabel="START"
            textlabel1="FEATURES"
            showLink1
            showLink3
            showLink4
            showLink2
            showLink5
            texth5boldMargin="0"
            texth5boldFontWeight="700"
            link1TextDecoration="none"
            link2TextDecoration="none"
            link3TextDecoration="none"
            link4TextDecoration="none"
            link5TextDecoration="none"
          />
          <Containerdivlinkscolumn
            text="Support"
            textlabel="PRIVACY POLICY"
            textlabel1={`TERMS & CONDITIONS`}
            showLink1
            showLink3={false}
            showLink4={false}
            showLink2
            showLink5={false}
            texth5boldMargin="0"
            texth5boldFontWeight="700"
            link1TextDecoration="none"
            link2TextDecoration="none"
            link3TextDecoration="unset"
            link4TextDecoration="unset"
            link5TextDecoration="unset"
          />
        </div>
      </div>
      <div className={styles.containerdivcopyright}>
        <p className={styles.textp}>©2023 All rights reserved</p>
      </div>
    </footer>
  );
};

export default FormFooter;
