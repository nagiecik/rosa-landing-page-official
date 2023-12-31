import { useMemo } from "react";
import styles from "./FooterLinks.module.css";
import NavbarLink from "./NavbarLink";

const FooterLinks = ({
  textTitle,
  showLink1 = true,
  showLink3 = true,
  showLink4 = true,
  showLink2 = true,
  showLink5 = true,
  showLink6 = true,
  linkText1,
  linkText2,
  linkText3,
  linkText4,
  linkText5,
  linkText6,
  linkURL1,
  linkURL2,
  linkURL3,
  linkURL4,
  linkURL5,
  linkURL6,
}) => {
  return (
    <div className={styles.containerContent}>
      <b className={styles.textTitle}>{textTitle}</b>
      {showLink1 && (
        <NavbarLink
          linkText={linkText1}
          flexShrinkGrow="1"
          textDecoration="none"
          cursor="pointer"
          linkUrl={linkURL1}
        />
      )}
      {showLink2 && (
        <NavbarLink
          linkText={linkText2}
          flexShrinkGrow="1"
          textDecoration="none"
          cursor="pointer"
          linkUrl={linkURL2}
        />
      )}
      {showLink3 && (
        <NavbarLink
          linkText={linkText3}
          flexShrinkGrow="1"
          textDecoration="none"
          cursor="pointer"
          linkUrl={linkURL3}
        />
      )}
      {showLink4 && (
        <NavbarLink
          linkText={linkText4}
          flexShrinkGrow="1"
          textDecoration="none"
          cursor="pointer"
          linkUrl={linkURL4}
        />
      )}
      {showLink5 && (
        <NavbarLink
          linkText={linkText5}
          flexShrinkGrow="1"
          textDecoration="none"
          cursor="pointer"
          linkURL={linkURL5}
        />
      )}
      {showLink6 && (
        <NavbarLink
          linkText={linkText6}
          flexShrinkGrow="1"
          textDecoration="none"
          cursor="pointer"
          linkURL={linkURL6}
        />
      )}
    </div>
  );
};

export default FooterLinks;
