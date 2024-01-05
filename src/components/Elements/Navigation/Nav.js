import { useState, useEffect } from "react";
import NavbarLink from "./NavbarLink";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import ButtonMenu from "../Buttons/ButtonMenu";
import styles from "./Nav.module.css";

const Nav = ({ logoURL }) => {
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 1024px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 1024px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <nav className={styles.containerSection}>
      <img className={styles.imageLogo} alt="ROSA logotype" src={logoURL} />
      {!matches && (
        <div className={styles.containerContent}>
          <NavbarLink
            linkText="Start"
            linkFlex="1"
            linkCursor="pointer"
            linkURL="#start"
          />
          <NavbarLink
            linkText="Testimonials"
            linkFlex="1"
            linkCursor="pointer"
            linkURL="#testimonials"
          />
          <NavbarLink
            linkText="Context"
            linkFlex="1"
            linkCursor="pointer"
            linkURL="#context"
          />
          <NavbarLink
            linkText="Features"
            linkFlex="1"
            linkCursor="pointer"
            linkURL="#features"
          />
          <NavbarLink
            linkText="Use Cases"
            linkFlex="1"
            linkCursor="pointer"
            linkURL="#use_cases"
          />
          <NavbarLink
            linkText="Pricing"
            linkFlex="1"
            linkCursor="pointer"
            linkURL="#pricing"
          />
        </div>
      )}
      {matches && (
        <ButtonMenu iconURL="/icons/menu.svg" altIconText="Icon Menu" />
      )}
      {!matches && (
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
      )}
    </nav>
  );
};

export default Nav;
