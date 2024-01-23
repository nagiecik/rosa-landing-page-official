import { useMemo } from "react";
import styles from "./NavFooter.module.css";
import NavbarLink from "./NavbarLink";

const NavFooter = ({ textTitle, links }) => {
  const footerLinks = useMemo(() => {
    return links.filter((link) => link.show);
  }, [links]);

  return (
    <div className={styles.containerContent}>
      <b className={styles.textTitle}>{textTitle}</b>
      {footerLinks.map((link, index) => (
        <NavbarLink
          key={index}
          linkText={link.linkText}
          linkURL={link.linkURL}
        />
      ))}
    </div>
  );
};

export default NavFooter;
