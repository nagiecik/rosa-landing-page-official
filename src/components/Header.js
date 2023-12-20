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
          />
          <NavbarLink
            linkText="Features"
            flexShrinkGrow="1"
            textDecoration="none"
            cursor="pointer"
          />
          <NavbarLink
            linkText="Use Cases"
            flexShrinkGrow="1"
            textDecoration="none"
            cursor="pointer"
          />
          <NavbarLink
            linkText="Testimonials"
            flexShrinkGrow="1"
            textDecoration="none"
            cursor="pointer"
          />
          <NavbarLink
            linkText="Pricing"
            flexShrinkGrow="1"
            textDecoration="none"
            cursor="pointer"
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
      <Button
        iconarrowleft="/iconarrowleft.svg"
        buttonText="Get your app"
        iconarrowright="/iconarrowright.svg"
        showIconarrowleft={false}
        showIconarrowright={false}
        buttonFill="#fab300"
        buttonTextColor="#181f4e"
        typeFillStateEnabledSizeAlignSelf="unset"
        typeFillStateEnabledSizeBorder="unset"
        typeFillStateEnabledSizeBoxSizing="border-box"
        typeFillStateEnabledSizeCursor="pointer"
        textstrongFontSize="16px"
        textstrongLineHeight="32px"
        textstrongFontWeight="700"
        textstrongDisplay="inline-block"
      />
    </nav>
  );
};

export default Header;
