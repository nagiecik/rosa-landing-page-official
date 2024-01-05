import { useMemo } from "react";
import styles from "./NavbarLink.module.css";

const NavbarLink = ({
  linkText = "Link Text",
  linkFlex,
  linkCursor,
  linkURL,
}) => {
  const linkCursorStyle = useMemo(() => {
    return {
      cursor: linkCursor,
    };
  }, [linkCursor]);
  const linkFlexStyle = useMemo(() => {
    return {
      flex: linkFlex,
    };
  }, [linkFlex]);

  return (
    <div className={styles.linkState} style={linkFlexStyle}>
      <a href={linkURL}>
        <div
          data-replace={linkText}
          className={styles.linkText}
          style={linkCursorStyle}
        >
          <span>{linkText}</span>
        </div>
      </a>
    </div>
  );
};

export default NavbarLink;
