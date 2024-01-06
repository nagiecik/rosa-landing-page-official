import { useState, useEffect } from "react";
import Divider from "../Elements/Other/Divider";
import ContextText from "../Elements/Contents/ContentText";
import NavFooter from "../Elements/Navigation/NavFooter";
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

  return (
    <footer className={styles.containerSection}>
      <div className={styles.containerContent}>
        <header className={styles.containerHeader}>
          {matches && (
            <ContextText
              containerAlignItems="center"
              containerJustifyContent="center"
              sectionWidth="100%"
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
        </header>
        <Divider dividerBorder="1px solid var(--surface-primary)" />
        <div className={styles.containerBottom}>
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
        </div>
        <div className={styles.containerCopyright}>
          <p className={styles.textParagraph}>©2023 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
