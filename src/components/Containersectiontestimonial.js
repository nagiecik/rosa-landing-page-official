import { useMemo } from "react";
import ColorWhiteTypeExtended from "./ColorWhiteTypeExtended";
import styles from "./Containersectiontestimonial.module.css";

const Containersectiontestimonial = ({
  dimensionCode,
  containersectiontestimoniBoxSizing,
  containersectiontestimoniZIndex,
  texth6Margin,
  texth6FontWeight,
  textblockquoteMargin,
  containersectiontestimoniObjectFit,
}) => {
  const containersectiontestimonialStyle = useMemo(() => {
    return {
      boxSizing: containersectiontestimoniBoxSizing,
      zIndex: containersectiontestimoniZIndex,
    };
  }, [containersectiontestimoniBoxSizing, containersectiontestimoniZIndex]);

  const texth6Style = useMemo(() => {
    return {
      margin: texth6Margin,
      fontWeight: texth6FontWeight,
    };
  }, [texth6Margin, texth6FontWeight]);

  const textblockquoteStyle = useMemo(() => {
    return {
      margin: textblockquoteMargin,
    };
  }, [textblockquoteMargin]);

  const colorWhiteTypeExtendedIconStyle = useMemo(() => {
    return {
      objectFit: containersectiontestimoniObjectFit,
    };
  }, [containersectiontestimoniObjectFit]);

  return (
    <div
      className={styles.containersectiontestimonial}
      style={containersectiontestimonialStyle}
    >
      <div className={styles.containerdivfootballRules}>
        <div className={styles.containerdivcontent}>
          <div className={styles.containerdivheader}>
            <i className={styles.textspan}>Official</i>
            <i className={styles.textstrong}>Football Rules</i>
          </div>
          <div className={styles.containerdivtext}>
            <b className={styles.texth6} style={texth6Style}>
              Revolutized Our Rule Management
            </b>
            <i className={styles.textblockquote} style={textblockquoteStyle}>
              “After analysing and understanding the hassle of using printouts
              on the field of play, we decided to launch digitalised Laws. It
              was to give quick and easy access to the Laws, most importantly to
              the referees, both on- and offline.”
            </i>
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
              colorWhiteTypeExtendedCol="/imagelogoifab11.svg"
              colorWhiteTypeExtendedIcoWidth="175.1px"
              colorWhiteTypeExtendedIcoHeight="72px"
              colorWhiteTypeExtendedIcoPosition="relative"
              colorWhiteTypeExtendedIcoObjectFit="unset"
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
    </div>
  );
};

export default Containersectiontestimonial;
