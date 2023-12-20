import { useMemo } from "react";
import styles from "./Button.module.css";

const Button = ({
  iconarrowleft,
  buttonText = "Button Text",
  iconarrowright,
  showIconarrowleft,
  showIconarrowright,
  buttonFill,
  buttonTextColor,
  typeFillStateEnabledSizeAlignSelf,
  typeFillStateEnabledSizeBorder,
  typeFillStateEnabledSizeBoxSizing,
  typeFillStateEnabledSizeCursor,
  textstrongFontSize,
  textstrongLineHeight,
  textstrongFontWeight,
  textstrongDisplay,
}) => {
  const typeFillStateEnabledSizeStyle = useMemo(() => {
    return {
      backgroundColor: buttonFill,
      alignSelf: typeFillStateEnabledSizeAlignSelf,
      border: typeFillStateEnabledSizeBorder,
      boxSizing: typeFillStateEnabledSizeBoxSizing,
      cursor: typeFillStateEnabledSizeCursor,
    };
  }, [
    buttonFill,
    typeFillStateEnabledSizeAlignSelf,
    typeFillStateEnabledSizeBorder,
    typeFillStateEnabledSizeBoxSizing,
    typeFillStateEnabledSizeCursor,
  ]);

  const textstrongStyle = useMemo(() => {
    return {
      color: buttonTextColor,
      fontSize: textstrongFontSize,
      lineHeight: textstrongLineHeight,
      fontWeight: textstrongFontWeight,
      display: textstrongDisplay,
    };
  }, [
    buttonTextColor,
    textstrongFontSize,
    textstrongLineHeight,
    textstrongFontWeight,
    textstrongDisplay,
  ]);

  return (
    <div
      className={styles.typefillStateenabledSize}
      style={typeFillStateEnabledSizeStyle}
    >
      {showIconarrowleft && (
        <img className={styles.iconarrowleft} alt="" src={iconarrowleft} />
      )}
      <b className={styles.textstrong} style={textstrongStyle}>
        {buttonText}
      </b>
      {showIconarrowright && (
        <img className={styles.iconarrowleft} alt="" src={iconarrowright} />
      )}
    </div>
  );
};

export default Button;
