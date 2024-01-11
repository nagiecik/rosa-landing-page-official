import { useState, useEffect, useMemo } from "react";
import NavbarLink from "./NavbarLink";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import useMediaQuery from "../../../utils/useMediaQuery";
import { motion } from "framer-motion";
import styles from "./Nav.module.css";

const navbarData = [
  { linkText: "Start", linkURL: "#start" },
  { linkText: "Testimonials", linkURL: "#testimonials" },
  { linkText: "Context", linkURL: "#context" },
  { linkText: "Features", linkURL: "#features" },
  { linkText: "Use Cases", linkURL: "#use_cases" },
  { linkText: "Pricing", linkURL: "#pricing" },
];

const Nav = ({ logoURL, sectionZIndex }) => {
  const desktopSmall = useMediaQuery("(max-width: 1024px)");

  const [navbarActive, setNavbarActive] = useState(false);

  const handleScroll = () => {
    setNavbarActive(window.scrollY >= 64);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const containerSectionStyle = useMemo(() => {
    return {
      zIndex: sectionZIndex,
    };
  }, [sectionZIndex]);

  const easeSlow = {
    duration: 2,
    ease: [0.15, 0.85, 0.47, 0.97],
  };

  return (
    <motion.nav
      initial={{ opacity: 0, transform: `translate(0, -40px)` }}
      whileInView={{ opacity: 1, transform: `translate(0, 0)` }}
      transition={easeSlow}
      viewport={{ once: true }}
      className={`${styles.containerNav} ${
        navbarActive && styles.containerNavActive
      }`}
      style={containerSectionStyle}
    >
      <div className={styles.containerSection}>
        <a href=".">
          <img className={styles.imageLogo} alt="ROSA logotype" src={logoURL} />
        </a>
        {!desktopSmall && (
          <div className={styles.containerContent}>
            {navbarData.map((data, index) => (
              <NavbarLink
                key={index}
                linkText={data.linkText}
                linkURL={data.linkURL}
              />
            ))}
          </div>
        )}
        <ButtonPrimary
          buttonText="Get your app"
          showButtonText={true}
          iconLeftURL="/icons/arrow.left.svg"
          iconRightURL="/icons/arrow.right.svg"
          showIconLeft={false}
          showIconRight={true}
          altTextIconRight="Icon Arrow Right"
          buttonLink="mailto:hello@rosa.zone"
        />
      </div>
    </motion.nav>
  );
};

export default Nav;
