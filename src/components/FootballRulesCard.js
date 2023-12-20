import { useMemo } from "react";
import ColorWhiteTypeExtended from "./ColorWhiteTypeExtended";
import styles from "./FootballRulesCard.module.css";

const FootballRulesCard = ({ dimensionCode, propWidth, propAlignSelf }) => {
  const containerdivfootballRulesStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div
      className={styles.containerdivfootballRules}
      style={containerdivfootballRulesStyle}
    >
      <div className={styles.containerdivcontent}>
        <div className={styles.containerdivheader}>
          <i className={styles.textspan}>Official</i>
          <strong className={styles.textstrong}>Football Rules</strong>
        </div>
        <div className={styles.containerdivtext}>
          <h6 className={styles.texth6}>Revolutized Our Rule Management</h6>
          <blockquote className={styles.textblockquote}>
            “After analysing and understanding the hassle of using printouts on
            the field of play, we decided to launch digitalised Laws. It was to
            give quick and easy access to the Laws, most importantly to the
            referees, both on- and offline.”
          </blockquote>
        </div>
        <div className={styles.containerdivtestimonials}>
          <div className={styles.containerdivpersonDetails}>
            <img
              className={styles.imagepersonIcon}
              alt=""
              src="/imageperson@2x.png"
            />
            <div className={styles.containerdivtext1}>
              <b className={styles.textlabel}>Lukas Brud</b>
              <i className={styles.texts}>{`The IFAB Secretary & CEO`}</i>
            </div>
          </div>
          <ColorWhiteTypeExtended
            colorWhiteTypeExtendedCol="/imagelogoifab@2x.png"
            colorWhiteTypeExtendedIcoWidth="175.1px"
            colorWhiteTypeExtendedIcoHeight="72px"
            colorWhiteTypeExtendedIcoPosition="relative"
            colorWhiteTypeExtendedIcoObjectFit="cover"
          />
        </div>
      </div>
      <img
        className={styles.imagemockup2Icon}
        alt=""
        src="/imagemockup2@2x.png"
      />
      <img
        className={styles.imagemockup1Icon}
        alt=""
        src="/imagemockup1@2x.png"
      />
    </div>
  );
};

export default FootballRulesCard;
