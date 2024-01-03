import { useMemo } from "react";
import styles from "./NavbarLink.module.css";

const NavbarLink = ({
  linkText = "Link Text",
  flexShrinkGrow,
  textDecoration,
  cursor,
  linkURL,
}) => {
  const navbarLinkCursor = useMemo(() => {
    return {
      cursor: cursor,
    };
  }, [cursor]);
  const navbarLinkContainerStyle = useMemo(() => {
    return {
      flex: flexShrinkGrow,
      textDecoration: textDecoration,
    };
  }, [flexShrinkGrow, textDecoration]);

  return (
    <div className={styles.linkState} style={navbarLinkContainerStyle}>
      <a href={linkURL}>
        <div
          data-replace={linkText}
          className={styles.linkText}
          style={navbarLinkCursor}
        >
          <span>{linkText}</span>
        </div>
      </a>
    </div>
  );
};

export default NavbarLink;
