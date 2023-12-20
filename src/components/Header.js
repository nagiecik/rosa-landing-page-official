import { useMemo } from "react";
import NavbarLink from "./Elements/NavbarLink";
import Button from "./Button";
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
            linkUrl="#"
          />
          <NavbarLink
            linkText="Features"
            flexShrinkGrow="1"
            textDecoration="none"
            cursor="pointer"
            linkUrl="#"
          />
          <NavbarLink
            linkText="Use Cases"
            flexShrinkGrow="1"
            textDecoration="none"
            cursor="pointer"
            linkUrl="#"
          />
          <NavbarLink
            linkText="Testimonials"
            flexShrinkGrow="1"
            textDecoration="none"
            cursor="pointer"
            linkUrl="#"
          />
          <NavbarLink
            linkText="Pricing"
            flexShrinkGrow="1"
            textDecoration="none"
            cursor="pointer"
            linkUrl="#"
          />
        </div>
      )}
      {showButtonMenu && (
        <div className={styles.buttonmenu}>
          <img
            className={styles.iconline3horizontal}
            alt=""
            src="/iconline3horizontal.svg"
          />
          <b className={styles.textstrong}>Get your app</b>
          <img
            className={styles.iconline3horizontal}
            alt=""
            src="/iconarrowright.svg"
          />
        </div>
      )}
      {showButtonCta && (
      <Button
        buttonText="Get your app"
        iconLeft="/iconarrowleft.svg"
        iconRight="/iconarrowright.svg"
        showIconLeft={false}
        showIconRight={true}
        buttonTextColor="#181f4e"
        buttonFontTextSize="16px"
        buttonTextLineHeight="32px"
        buttonTextFontWeight="900"
        altTextIconRight="Icon Arrow Right"
      />)}
    </nav>
  );
};

export default Header;
