import { useMemo } from "react";
import NavbarLink from "../Elements/NavbarLink";
import ButtonPrimary from "../Elements/ButtonPrimary";
import styles from "./Header.module.css";

const Header = ({
  logoURL,
  showContainerDivLinks = true,
  showButtonMenu = false,
  showButtonCta = true,
  linkObjectFit,
}) => {
  const imagelogoIconStyle = useMemo(() => {
    return {
      objectFit: linkObjectFit,
    };
  }, [linkObjectFit]);

  return (
    <nav className={styles.containerNav}>
      <img
        className={styles.containerNavLogo}
        alt="ROSA logotype"
        src={logoURL}
        style={imagelogoIconStyle}
      />
      {showContainerDivLinks && (
        <div className={styles.containerNavLinks}>
          <NavbarLink
            linkText="Start"
            flexShrinkGrow="1"
            textDecoration="none"
            cursor="pointer"
            linkUrl="#start"
          />
          <NavbarLink
            linkText="Testimonials"
            flexShrinkGrow="1"
            textDecoration="none"
            cursor="pointer"
            linkUrl="#testimonials"
          />
          <NavbarLink
            linkText="Context"
            flexShrinkGrow="1"
            textDecoration="none"
            cursor="pointer"
            linkUrl="#context"
          />
          <NavbarLink
            linkText="Features"
            flexShrinkGrow="1"
            textDecoration="none"
            cursor="pointer"
            linkUrl="#features"
          />
          <NavbarLink
            linkText="Use Cases"
            flexShrinkGrow="1"
            textDecoration="none"
            cursor="pointer"
            linkUrl="#use_cases"
          />
          <NavbarLink
            linkText="Pricing"
            flexShrinkGrow="1"
            textDecoration="none"
            cursor="pointer"
            linkUrl="#pricing"
          />
        </div>
      )}
      {showButtonMenu && (
        <div className={styles.buttonMenu}>
          <img
            className={styles.iconMenu}
            alt="Menu icon"
            src="/iconMenu.svg"
          />
        </div>
      )}
      {showButtonCta && (
        <ButtonPrimary
          buttonText="Get your app"
          iconLeft="/iconarrowleft.svg"
          iconRight="/iconarrowright.svg"
          showIconLeft={false}
          showIconRight={true}
          altTextIconRight="Icon Arrow Right"
        />
      )}
    </nav>
  );
};

export default Header;
