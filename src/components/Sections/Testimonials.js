import { useMemo } from "react";
import ColorWhiteTypeExtended from "../ColorWhiteTypeExtended";
import styles from "../Containersectiontestimonial.module.css";

const Containersectiontestimonial = ({ sectionZIndex }) => {
  const containersectiontestimonialStyle = useMemo(() => {
    return {
      zIndex: sectionZIndex,
    };
  }, [sectionZIndex]);
  return (
    <section
      className={styles.containerSection}
      style={containersectiontestimonialStyle}
    >
      <div className={styles.containerTestimonial}>
        <div className={styles.containerTestimonialContent}>
          <div className={styles.textHeader}>
            <i className={styles.textHeaderWhite}>Official</i>
            <i className={styles.textHeaderGreen}>Football Rules</i>
          </div>
          <div className={styles.containerQuoteContent}>
            <p className={styles.textQuoteTitle}>
              Revolutized Our Rule Management
            </p>
            <i className={styles.textQuoteContent}>
            “After analysing and understanding the hassle of using printouts on the field of play, we decided to launch digitalised Laws. It was to give quick and easy access to the Laws, most importantly to the referees, both on- and offline.”
            </i>
          </div>
          <div className={styles.containerPerson}>
            <div className={styles.containerPersonImage}>
              <img
                className={styles.imagePerson}
                alt="Lukas Brud Testimonial Image"
                src="/testimonialPersonImage.png"
              />
              <div className={styles.containerPersonDetails}>
                <p className={styles.textPersonName}>Lukas Brud</p>
                <i className={styles.textPersonOccupation}>The IFAB Secretary & CEO</i>
              </div>
            </div>
            <img
                className={styles.imageLogoIFAB}
                alt="Lukas Brud Testimonial Image"
                src="/logoIFAB.svg"
              />
          </div>
        </div>
        <img
          className={styles.imageDeviceSecondary}
          alt=""
          src="/imagemockup2@2x.png"
        />
        <img
          className={styles.imageDevicePrimary}
          alt=""
          src="/imagemockup1@2x.png"
        />
      </div>
    </section>
  );
};

export default Containersectiontestimonial;
