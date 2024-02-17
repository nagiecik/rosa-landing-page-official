import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { easeSlow, getMotionProperties } from "../../../utils/motionUtils";
import useMediaQuery from "../../../utils/useMediaQuery";
import NavMenu from "./NavMenu";
import NavbarLink from "./NavbarLink";
import ButtonSecondary from "../Buttons/ButtonSecondary";
import styles from "./Nav.module.css";

const navbarData = [
  { linkText: "Start here", linkURL: "#start_here" },
  { linkText: "For Whom", linkURL: "#for_whom" },
  { linkText: "For What", linkURL: "#for_what" },
  { linkText: "Showcases", linkURL: "#showcases" },
  { linkText: "Features", linkURL: "#features" },
  { linkText: "Pricing", linkURL: "#pricing" },
];

const Nav = ({ sectionZIndex }) => {
  const tabletHorizontal = useMediaQuery("(max-width: 1024px)");
  const mobile = useMediaQuery("(max-width: 430px)");

  const [navbarActive, setNavbarActive] = useState(false);
  const [logoURL, setLogoURL] = useState("/logoROSA.svg");
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (mobile) {
        return;
      }

      const currentScrollY = window.scrollY;

      if (currentScrollY > 80 && !navbarActive) {
        setNavbarActive(true);
      } else if (currentScrollY <= 80 && navbarActive) {
        setNavbarActive(false);
      }

      setPrevScrollY(currentScrollY);
      setLogoURL(navbarActive ? "/logoROSADark.svg" : "/logoROSA.svg");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbarActive, prevScrollY, mobile]);

  const [overlayOpen, setOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setOverlayOpen(!overlayOpen);
    if (!overlayOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  };

  const closeOverlay = () => {
    setOverlayOpen(false);
    document.body.style.overflow = "visible";
  };

  const containerSectionStyle = useMemo(() => {
    return {
      zIndex: sectionZIndex,
    };
  }, [sectionZIndex]);

  const motionNav = getMotionProperties("0, -40px", "0, 0", easeSlow);

  return (
    <>
      <motion.nav
        {...motionNav}
        className={`${styles.containerNav} ${
          navbarActive && styles.containerNavActive
        }`}
        style={containerSectionStyle}
      >
        <div className={styles.containerSection}>
          <a
            href="."
            style={{
              height: tabletHorizontal ? "24px" : "32px",
            }}
          >
            <img
              className={styles.imageLogo}
              alt="ROSA logotype"
              src={logoURL}
            />
          </a>
          {!tabletHorizontal && (
            <div className={styles.containerContent}>
              {navbarData.map((data, index) => (
                <NavbarLink
                  key={index}
                  linkText={data.linkText}
                  linkURL={data.linkURL}
                  color={
                    navbarActive
                      ? "var(--surface-secondary)"
                      : "var(--surface-primary)"
                  }
                />
              ))}
            </div>
          )}
          {!tabletHorizontal && (
            <ButtonSecondary
              showButtonText={true}
              buttonSecondaryText="Get your app"
              buttonSecondaryLink="https://outlook.office365.com/owa/calendar/RulesofSportsAppROSAteam@mamf.pl/bookings/"
              radiusX="16"
              radiusY="4"
              radiusXHover="32"
              radiusYHover="8"
            />
          )}
        </div>
        {tabletHorizontal && (
          <div
            className={`${styles.containerMenu} ${
              overlayOpen ? styles.active : ""
            }`}
            id="toggle"
            onClick={toggleOverlay}
          >
            <span className={styles.containerMenuTop}></span>
            <span className={styles.containerMenuMiddle}></span>
            <span className={styles.containerMenuBottom}></span>
          </div>
        )}
      </motion.nav>
      <NavMenu
        isOpen={overlayOpen}
        closeOverlay={closeOverlay}
        navbarData={navbarData}
      />
    </>
  );
};

export default Nav;
