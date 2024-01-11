import { useMemo } from "react";
import styles from "./NavFooter.module.css";
import NavbarLink from "./NavbarLink";

const NavFooter = ({ textTitle, links }) => {
  const filteredLinks = useMemo(() => {
    return links.filter((link) => link.show);
  }, [links]);

  return (
    <div className={styles.containerContent}>
      <b className={styles.textTitle}>{textTitle}</b>
      {filteredLinks.map((link, index) => (
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
