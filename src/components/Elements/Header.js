import { useMemo } from "react";
import NavbarLink from "../Elements/NavbarLink";
import ButtonPrimary from "../Elements/ButtonPrimary";
import styles from "./Header.module.css";

const Header = ({
  logoURL,
  showContainerDivLinks = true,
  showButtonMenu = false,
  showButtonCta = true,
}) => {
  return (
    <nav className={styles.containerNav}>
      <img
        className={styles.containerNavLogo}
        alt="ROSA logotype"
        src={logoURL}
      />
      {showContainerDivLinks && (
        <div className={styles.containerNavLinks}>
          <NavbarLink
            linkText="Start"
            flexShrinkGrow="1"
            textDecoration="none"
            cursor="pointer"
            linkURL="#start"
          />
          <NavbarLink
            linkText="Testimonials"
            flexShrinkGrow="1"
            textDecoration="none"
            cursor="pointer"
            linkURL="#testimonials"
          />
          <NavbarLink
            linkText="Context"
            flexShrinkGrow="1"
            textDecoration="none"
            cursor="pointer"
            linkURL="#context"
          />
          <NavbarLink
            linkText="Features"
            flexShrinkGrow="1"
            textDecoration="none"
            cursor="pointer"
            linkURL="#features"
          />
          <NavbarLink
            linkText="Use Cases"
            flexShrinkGrow="1"
            textDecoration="none"
            cursor="pointer"
            linkURL="#use_cases"
          />
          <NavbarLink
            linkText="Pricing"
            flexShrinkGrow="1"
            textDecoration="none"
            cursor="pointer"
            linkURL="#pricing"
          />
        </div>
      )}
      {showButtonMenu && (
        <div className={styles.containerMenuVisibility}>
          <ButtonPrimary
            showButtonText={false}
            iconLeft="/icons/menu.svg"
            showIconLeft={true}
            altTextIconLeft="Icon Menu"
          />
        </div>
      )}
      {showButtonCta && (
        <div className={styles.containerButtonVisibility}>
          <ButtonPrimary
            buttonText="Get your app"
            showButtonText={true}
            iconLeft="/icons/arrow.left.svg"
            iconRight="/icons/arrow.right.svg"
            showIconLeft={false}
            showIconRight={true}
            altTextIconRight="Icon Arrow Right"
            buttonLink="mailto:hello@rosa.zone"
          />
        </div>
      )}
    </nav>
  );
};

export default Header;
