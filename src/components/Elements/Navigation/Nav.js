import { useState, useEffect, useMemo } from "react";
import NavbarLink from "./NavbarLink";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import useMediaQuery from "../../../utils/useMediaQuery";
import { motion } from "framer-motion";
import styles from "./Nav.module.css";
import { easeSlow, getMotionProperties } from "../../../utils/motionUtils";

const navbarData = [
  { linkText: "Start here", linkURL: "#start_here" },
  { linkText: "For Whom", linkURL: "#for_whom" },
  { linkText: "For What", linkURL: "#for_what" },
  { linkText: "Showcases", linkURL: "#showcases" },
  { linkText: "Features", linkURL: "#features" },
  { linkText: "Pricing", linkURL: "#pricing" },
];

const Nav = ({ logoURL, sectionZIndex }) => {
  const tabletHorizontal = useMediaQuery("(max-width: 1024px)");

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

  const motionNav = getMotionProperties("0, -40px", "0, 0", easeSlow);

  return (
    <motion.nav
      {...motionNav}
      className={`${styles.containerNav} ${
        navbarActive && styles.containerNavActive
      }`}
      style={containerSectionStyle}
    >
      <div className={styles.containerSection}>
        <a href=".">
          <img className={styles.imageLogo} alt="ROSA logotype" src={logoURL} />
        </a>
        {!tabletHorizontal && (
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
