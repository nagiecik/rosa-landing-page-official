import { useMemo } from "react";
import styles from "./Containerdivlinkscolumn.module.css";

const Containerdivlinkscolumn = ({
  text = "Menu",
  textlabel,
  textlabel1,
  showLink1 = true,
  showLink3 = true,
  showLink4 = true,
  showLink2 = true,
  showLink5 = true,
  texth5boldMargin,
  texth5boldFontWeight,
  link1TextDecoration,
  link2TextDecoration,
  link3TextDecoration,
  link4TextDecoration,
  link5TextDecoration,
}) => {
  const texth5boldStyle = useMemo(() => {
    return {
      margin: texth5boldMargin,
      fontWeight: texth5boldFontWeight,
    };
  }, [texth5boldMargin, texth5boldFontWeight]);

  const link1Style = useMemo(() => {
    return {
      textDecoration: link1TextDecoration,
    };
  }, [link1TextDecoration]);

  const link2Style = useMemo(() => {
    return {
      textDecoration: link2TextDecoration,
    };
  }, [link2TextDecoration]);

  const link3Style = useMemo(() => {
    return {
      textDecoration: link3TextDecoration,
    };
  }, [link3TextDecoration]);

  const link4Style = useMemo(() => {
    return {
      textDecoration: link4TextDecoration,
    };
  }, [link4TextDecoration]);

  const link5Style = useMemo(() => {
    return {
      textDecoration: link5TextDecoration,
    };
  }, [link5TextDecoration]);

  return (
    <div className={styles.containerdivlinkscolumn}>
      <b className={styles.texth5bold} style={texth5boldStyle}>
        {text}
      </b>
      {showLink1 && (
        <div className={styles.link1} style={link1Style}>
          <div className={styles.textlabel}>{textlabel}</div>
        </div>
      )}
      {showLink2 && (
        <div className={styles.link1} style={link2Style}>
          <div className={styles.textlabel}>{textlabel1}</div>
        </div>
      )}
      {showLink3 && (
        <div className={styles.link1} style={link3Style}>
          <div className={styles.textlabel}>USE CASES</div>
        </div>
      )}
      {showLink4 && (
        <div className={styles.link1} style={link4Style}>
          <div className={styles.textlabel}>TESTIMONIALS</div>
        </div>
      )}
      {showLink5 && (
        <div className={styles.link1} style={link5Style}>
          <div className={styles.textlabel}>PRICING</div>
        </div>
      )}
    </div>
  );
};

export default Containerdivlinkscolumn;
