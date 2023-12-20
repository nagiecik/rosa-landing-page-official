import { useMemo } from "react";
import styles from "./NavbarLink.module.css";

const NavbarLink = ({
  linkText = "Link Text",
  linkTextColor,
  linkTextCursor,
  typeNavbarStateDefaultFoFlex,
  typeNavbarStateDefaultFoTextDecoration,
}) => {
  const textlabel1Style = useMemo(() => {
    return {
      color: linkTextColor,
      cursor: linkTextCursor,
    };
  }, [linkTextColor, linkTextCursor]);

  const typeNavbarStateDefaultFoStyle = useMemo(() => {
    return {
      flex: typeNavbarStateDefaultFoFlex,
      textDecoration: typeNavbarStateDefaultFoTextDecoration,
    };
  }, [typeNavbarStateDefaultFoFlex, typeNavbarStateDefaultFoTextDecoration]);

  return (
    <div
      className={styles.typenavbarStatedefaultFo}
      style={typeNavbarStateDefaultFoStyle}
    >
      <div className={styles.textlabel} style={textlabel1Style}>
        {linkText}
      </div>
    </div>
  );
};

export default NavbarLink;
