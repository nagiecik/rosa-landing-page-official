import { useMemo } from "react";
import styles from "./NavbarLink.module.css";

const NavbarLink = ({ linkText = "Link Text", linkCursor, linkURL }) => {
  return (
    <div className={styles.linkState}>
      <a href={linkURL}>
        <div data-replace={linkText} className={styles.linkText}>
          <span>{linkText}</span>
        </div>
      </a>
    </div>
  );
};

export default NavbarLink;
