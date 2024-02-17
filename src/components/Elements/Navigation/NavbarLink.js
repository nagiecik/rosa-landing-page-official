import useMediaQuery from "../../../utils/useMediaQuery";
import styles from "./NavbarLink.module.css";

const NavbarLink = ({ linkText = "Link Text", linkCursor, linkURL, color }) => {
  const tabletHorizontal = useMediaQuery("(max-width: 1024px)");

  return (
    <div className={styles.linkState}>
      {!tabletHorizontal && (
        <a href={linkURL}>
          <div
            data-replace={linkText}
            className={styles.linkText}
            style={{ color: color }}
          >
            <span>{linkText}</span>
          </div>
        </a>
      )}
      {tabletHorizontal && (
        <a href={linkURL}>
          <div
            data-replace={linkText}
            className={styles.linkMobile}
            style={{ color: color }}
          >
            <span>{linkText}</span>
          </div>
        </a>
      )}
    </div>
  );
};

export default NavbarLink;
