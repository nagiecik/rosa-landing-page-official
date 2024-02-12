import { useMemo, useState, useEffect } from "react";
import ContextText from "../Elements/Contents/ContentText";
import { motion } from "framer-motion";
import { radius } from "../../utils/radiusUtils";
import { easeFast, getMotionProperties } from "../../utils/motionUtils";
import styles from "./Showcase.module.css";

const Showcase = ({
  sectionZIndex,
  showContentText,
  showArticleTestimonial,
  showArticle,
  buttonAppStore,
  buttonGooglePlay,
  sectionMarginTop,
  sectionID,
  containerBackgroundImage,
  imageLeftAltText,
  imageLeftURL,
  imageRightAltText,
  imageRightURL,
  ref,
  buttonGooglePlayLink,
  buttonAppStoreLink,
  containerPaddingBottom,
}) => {
  const [desktopSmall, setDesktopSmall] = useState(
    window.matchMedia("(max-width: 1024px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 1024px)")
      .addEventListener("change", (e) => setDesktopSmall(e.matches));
  }, []);

  const [tablet, setTablet] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 768px)")
      .addEventListener("change", (e) => setTablet(e.matches));
  }, []);

  const motionContainer = getMotionProperties("0, 160px", "0, 0", easeFast);

  const containerShowcaseStyle = useMemo(() => {
    return {
      zIndex: sectionZIndex,
      marginTop: sectionMarginTop,
    };
  }, [sectionZIndex, sectionMarginTop]);

  const containerContentStyle = useMemo(() => {
    return {
      backgroundImage: containerBackgroundImage,
      paddingBottom: containerPaddingBottom,
    };
  }, [containerBackgroundImage, containerPaddingBottom]);

  return (
    <section
      className={styles.containerSection}
      style={containerShowcaseStyle}
      id={sectionID}
    >
      {showContentText && (
        <motion.div {...motionContainer} className={styles.containerMotion}>
          <ContextText
            sectionWidth="100%"
            sectionTextContentZIndex="0"
            showTextHeaderLight={true}
            textHeaderLight="Our Recent"
            textHeaderLightWeight="var(--font-thin)"
            textHeaderLightColor="var(--surface-secondary)"
            showTextHeaderBold={true}
            textHeaderBold="Showcase"
            textHeaderBoldWeight="var(--font-semibold)"
            textHeaderBoldColor="var(--surface-secondary)"
            showTextParagraph={true}
            textParagraph="Recent testimonials highlight the positive impact of ROSA. Users appreciate its user-friendly design, making tasks like tracking changes, giving feedback, and browsing a seamless experience. Unlike traditional methods involving PDFs and printouts, ROSA adds a personalized touch, transforming the way users interact globally."
            textParagraphColor="var(--surface-secondary)"
          />
        </motion.div>
      )}
      <motion.div {...motionContainer} className={styles.containerMotion}>
        <div className={styles.containerContent} style={containerContentStyle}>
          {showArticleTestimonial && (
            <div className={styles.containerArticle}>
              <div className={styles.containerHeader}>
                <div className={styles.containerTextHeaders}>
                  <i className={styles.textHeaderSmall}>Official</i>
                  <i className={styles.textHeaderBig}>Football Rules</i>
                </div>
                <div className={styles.containerButtons}>
                  <a href={buttonGooglePlayLink}>
                    <img
                      className={styles.buttonGooglePlay}
                      alt="Google Play Button"
                      src={buttonGooglePlay}
                    />
                  </a>
                  <a href={buttonAppStoreLink}>
                    <img
                      className={styles.buttonAppStore}
                      alt="App Store Button"
                      src={buttonAppStore}
                    />
                  </a>
                </div>
              </div>
              <div className={styles.containerQuote}>
                <p className={styles.textQuoteTitle}>
                  Made Launching Our New App Fast and Easy
                </p>
                <i className={styles.textQuoteParagraph}>
                  “We were very happy with the speed and ease of launching our
                  new Football Rules app using ROSA/ Rules of Sports App. From
                  the very beginning, we had a clear understanding of what was
                  attainable, which made the process incredibly smooth. Our new
                  app was fully operational and accessible to our users within a
                  matter of weeks, without the need for any custom development.”
                </i>
              </div>
              <div className={styles.containerPerson}>
                <div className={styles.containerPersonImage}>
                  <img
                    className={styles.imagePerson}
                    alt="Lukas Brud The IFAB Secretary Testimonial Image"
                    src="showcase/showcase-person-image.png"
                    style={radius({
                      x: 6,
                      y: 6,
                    })}
                  />
                  <div className={styles.containerPersonDetails}>
                    <p className={styles.textPersonName}>Lukas Brud</p>
                    <i className={styles.textPersonOccupation}>
                      The IFAB Secretary & CEO
                    </i>
                  </div>
                </div>
                <img
                  className={styles.imageLogo}
                  alt="The IFAB Logotype"
                  src="/logoIFAB.svg"
                />
              </div>
            </div>
          )}

          {showArticle && (
            <div className={styles.containerArticle}>
              <ContextText
                showTextHeaderLight={true}
                textHeaderLight="Make Sports"
                textHeaderLightColor="var(--surface-primary)"
                textHeaderLightWeight="var(--font-thin)"
                showTextHeaderBold={true}
                textHeaderBold="Rules Live"
                textHeaderBoldColor="var(--surface-primary)"
                textHeaderBoldWeight="var(--font-semibold)"
              />
              <p className={styles.textParagraph}>
                Join the multitude of organizations that have placed their trust
                in us. With ROSA, empower your organization to create a custom
                rule app using our ready-made solution.
              </p>
              <div className={styles.containerDownload}>
                <div>
                  <p className={styles.textDownloadLight}>
                    Download
                    <span className={styles.textDownloadBold}>
                      The Demo App
                    </span>
                  </p>
                </div>
                <div className={styles.containerButtons}>
                  <a href={buttonGooglePlayLink}>
                    <img
                      className={styles.buttonGooglePlay}
                      alt="Google Play Button"
                      src={buttonGooglePlay}
                    />
                  </a>
                  <a href={buttonAppStoreLink}>
                    <img
                      className={styles.buttonAppStore}
                      alt="App Store Button"
                      src={buttonAppStore}
                    />
                  </a>
                </div>
              </div>
            </div>
          )}
          {!desktopSmall && (
            <img
              className={styles.imageRight}
              alt={imageRightAltText}
              src={imageRightURL}
            />
          )}
          {!tablet && (
            <img
              className={styles.imageLeft}
              alt={imageLeftAltText}
              src={imageLeftURL}
            />
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Showcase;
