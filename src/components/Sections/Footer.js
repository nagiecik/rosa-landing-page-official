import { useState, useEffect } from "react";
import Divider from "../Elements/Other/Divider";
import ContextText from "../Elements/Contents/ContentText";
import NavFooter from "../Elements/Navigation/NavFooter";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";

const Footer = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 430px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 430px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  const easeFast = {
    duration: 1,
    ease: [0.15, 0.85, 0.47, 0.97],
  };

  return (
    <footer className={styles.containerSection}>
      <div className={styles.containerContent}>
        <motion.header
          initial={{ opacity: 0, transform: `translate(0, 160px)` }}
          whileInView={{ opacity: 1, transform: `translate(0, 0)` }}
          transition={easeFast}
          viewport={{ once: true }}
          className={styles.containerHeader}
        >
          {matches && (
            <ContextText
              containerAlignItems="center"
              containerJustifyContent="center"
              sectionWidth="100%"
              showTextHeaderLight={true}
              textHeaderLight="Interested to join us?"
              textHeaderLightSize="var(--size-34)"
              textHeaderLightColor="var(--surface-primary)"
              textHeaderLightWeight="var(--font-thin)"
              textHeaderLightAlign="center"
              showtextHeaderBold={false}
              showTextHeaderLink={true}
              textHeaderLink="hello@rosa.zone"
              textHeaderLinkSize="var(--size-34)"
              textHeaderLinkColor="var(--surface-primary)"
              textHeaderLinkWeight="var(--font-semibold)"
              textHeaderBoldAlign="center"
              textHeaderLinkURL="mailto:hello.rosa@zone"
            />
          )}
          {!matches && (
            <ContextText
              showTextHeaderLight={true}
              textHeaderLight="Interested to join us?"
              textHeaderLightColor="var(--surface-primary)"
              textHeaderLightWeight="var(--font-thin)"
              showtextHeaderBold={false}
              showTextHeaderLink={true}
              textHeaderLink="hello@rosa.zone"
              textHeaderLinkColor="var(--surface-primary)"
              textHeaderLinkWeight="var(--font-semibold)"
              textHeaderLinkURL="mailto:hello.rosa@zone"
            />
          )}
          {!matches && (
            <a href="#start" className={styles.buttonScroll}>
              <img
                className={styles.imageScroll}
                alt="Scroll Up Image"
                src="/icons/scroll-up.svg"
              />
              <img
                className={styles.iconScroll}
                alt=""
                src="/icons/arrow.up.svg"
              />
            </a>
          )}
        </motion.header>
        <motion.div
          initial={{ opacity: 0, transform: `translate(0, 160px)` }}
          whileInView={{ opacity: 1, transform: `translate(0, 0)` }}
          transition={easeFast}
          viewport={{ once: true }}
          className={styles.containerMotion}
        >
          <Divider dividerBorder="1px solid var(--surface-primary)" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, transform: `translate(0, 160px)` }}
          whileInView={{ opacity: 1, transform: `translate(0, 0)` }}
          transition={easeFast}
          viewport={{ once: true }}
          className={styles.containerBottom}
        >
          <img
            className={styles.imageLogo}
            alt="ROSA Logo"
            src="/imageLogoRosa.svg"
          />
          <div className={styles.containerLinks}>
            <NavFooter
              textTitle="Menu"
              linkText1="Start"
              linkText2="Testimonials"
              linkText3="Context"
              linkText4="Features"
              linkText5="Use Cases"
              linkText6="Pricing"
              linkURL1="#start"
              linkURL2="#testimonials"
              linkURL3="#context"
              linkURL4="#features"
              linkURL5="#use_cases"
              linkURL6="#pricing"
            />
            <NavFooter
              textTitle="Support"
              linkText1="Privacy Policy"
              linkText2="Terms & Conditions"
              linkURL1="#start"
              linkURL2="#testimonials"
              showLink3={false}
              showLink4={false}
              showLink5={false}
              showLink6={false}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, transform: `translate(0, 40px)` }}
          whileInView={{ opacity: 1, transform: `translate(0, 0)` }}
          transition={easeFast}
          viewport={{ once: true }}
          className={styles.containerCopyright}
        >
          <p className={styles.textParagraph}>©2023 All rights reserved</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
