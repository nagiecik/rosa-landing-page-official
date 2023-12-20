import { useMemo } from "react";
import NavbarLink from "./NavbarLink";
import Button from "./Button";
import styles from "./Header.module.css";

const Header = ({
  dimensionCode,
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
    <nav className={styles.containernav2}>
      <div className={styles.containerdiv}>
        <img
          className={styles.imagelogoIcon}
          alt=""
          src={dimensionCode}
          style={imagelogoIconStyle}
        />
      </div>
      {showContainerDivLinks && (
        <div className={styles.containerdivlinks}>
          <NavbarLink
            linkText="Start"
            linkTextColor="#fff"
            linkTextCursor="pointer"
            typeNavbarStateDefaultFoFlex="1"
            typeNavbarStateDefaultFoTextDecoration="none"
          />
          <NavbarLink
            linkText="Features"
            linkTextColor="#fff"
            linkTextCursor="pointer"
            typeNavbarStateDefaultFoFlex="1"
            typeNavbarStateDefaultFoTextDecoration="none"
          />
          <NavbarLink
            linkText="Use Cases"
            linkTextColor="#fff"
            linkTextCursor="pointer"
            typeNavbarStateDefaultFoFlex="1"
            typeNavbarStateDefaultFoTextDecoration="none"
          />
          <NavbarLink
            linkText="Testimonials"
            linkTextColor="#fff"
            linkTextCursor="pointer"
            typeNavbarStateDefaultFoFlex="1"
            typeNavbarStateDefaultFoTextDecoration="none"
          />
          <NavbarLink
            linkText="Pricing"
            linkTextColor="#fff"
            linkTextCursor="pointer"
            typeNavbarStateDefaultFoFlex="1"
            typeNavbarStateDefaultFoTextDecoration="none"
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
        typeFillStateEnabledSizeCursor="unset"
        textstrongFontSize="16px"
        textstrongLineHeight="32px"
        textstrongFontWeight="700"
        textstrongDisplay="inline-block"
      />
    </nav>
  );
};

export default Header;
