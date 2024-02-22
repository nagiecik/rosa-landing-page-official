import { useState, useEffect } from "react";
import Divider from "../Elements/Other/Divider";
import ContextText from "../Elements/Contents/ContentText";
import NavFooter from "../Elements/Navigation/NavFooter";
import ButtonScroll from "../Elements/Buttons/ButtonScroll";
import { motion } from "framer-motion";
import useMediaQuery from "../../utils/useMediaQuery";
import {
  getMotionProperties,
  easeFast,
  easeSlow,
} from "../../utils/motionUtils";
import { Link } from 'react-router-dom';
import styles from "./Footer.module.css";

const navFooterData = [
  {
    textTitle: "Menu",
    links: [
      { show: true, linkText: "Start here", linkURL: "#start_here" },
      { show: true, linkText: "For Whom", linkURL: "#for_whom" },
      { show: true, linkText: "For What", linkURL: "#for_what" },
      { show: true, linkText: "Showcases", linkURL: "#showcases" },
      { show: true, linkText: "Features", linkURL: "#features" },
      { show: true, linkText: "Pricing", linkURL: "#pricing" },
    ],
  },
  {
    textTitle: "Support",
    links: [
      { show: true, linkText: "Privacy Policy", linkURL: "/privacy-policy" },
      {
        show: true,
        linkText: "Terms & Conditions",
        linkURL: "/terms",
      },
      { show: false },
      { show: false },
      { show: false },
      { show: false },
    ],
  },
];

const Footer = () => {
  const tablet = useMediaQuery("(max-width: 768px)");
  const mobile = useMediaQuery("(max-width: 430px)");

  useEffect(() => {
    window
      .matchMedia("(max-width: 430px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  const motionDefaultFast = getMotionProperties("0, 160px", "0, 0", easeFast);
  const motionSmallFast = getMotionProperties("0, 40px", "0, 0", easeFast);

  return (
    <footer className={styles.containerSection}>
      <div className={styles.containerContent}>
        <motion.header
          {...motionDefaultFast}
          className={styles.containerHeader}
        >
          {mobile && (
            <ContextText
              containerAlignItems="center"
              containerJustifyContent="center"
              sectionWidth="100%"
              showTextHeaderLight={true}
              textHeaderLight="Get your own!"
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
              textHeaderLinkURL="mailto:hello@rosa.zone"
            />
          )}
          {!mobile && (
            <ContextText
              showTextHeaderLight={true}
              textHeaderLight="Get your own!"
              textHeaderLightColor="var(--surface-primary)"
              textHeaderLightWeight="var(--font-thin)"
              showtextHeaderBold={false}
              showTextHeaderLink={true}
              textHeaderLink="hello@rosa.zone"
              textHeaderLinkColor="var(--surface-primary)"
              textHeaderLinkWeight="var(--font-semibold)"
              textHeaderLinkURL="mailto:hello@rosa.zone"
            />
          )}
          {!tablet && (
            <ButtonScroll
              linkScrollURL="#start_here"
              imageScrollURL="./icons/scroll-up.svg"
              iconScrollURL="./icons/arrow.up.svg"
            />
          )}
        </motion.header>
        <motion.div {...motionDefaultFast} className={styles.containerMotion}>
          <Divider dividerBorder="1px solid var(--surface-primary)" />
        </motion.div>
        <motion.div {...motionDefaultFast} className={styles.containerBottom}>
          <img
            className={styles.imageLogo}
            alt="ROSA Logo"
            src="/logoROSA.svg"
          />
          <div className={styles.containerLinks}>
            {navFooterData.map((data, index) => (
              <NavFooter key={index} {...data} />
            ))}
          </div>
        </motion.div>
        <motion.div {...motionSmallFast} className={styles.containerCopyright}>
          <p className={styles.textParagraph}>©2024 ROSA All rights reserved</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
