import DistributionVertical1 from "./DistributionVertical1";
import styles from "./SportContainer.module.css";

const SportContainer = () => {
  return (
    <section className={styles.containersectionstores}>
      <div className={styles.containerdivcontent}>
        <img
          className={styles.imagemockup2Icon}
          alt=""
          src="/imagemockup211@2x.png"
        />
        <img
          className={styles.imagemockup1Icon}
          alt=""
          src="/imagemockup111@2x.png"
        />
        <div className={styles.containerdivarticle}>
          <DistributionVertical1
            secondaryText="Make Sport"
            primaryText="Rules Moves"
            showPrimaryText
            showSecondaryText
            distributionVerticalAlignSelf="unset"
            distributionVerticalGap="var(--spacing-12)"
            texth1lightColor="#fff"
            texth1lightMargin="0"
            texth1boldColor="#fff"
            texth1boldMargin="0"
          />
          <p className={styles.textp}>
            Join the multitude of organizations that have placed their trust in
            us. With ROSA, empower your organization to create a custom rule app
            using our ready-made solution.
          </p>
          <div className={styles.containerdivbuttons}>
            <img
              className={styles.imagegoogleplayIcon}
              alt=""
              src="/imagegoogleplay11@2x.png"
            />
            <img
              className={styles.imagegoogleplayIcon}
              alt=""
              src="/imageappstore11@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportContainer;
