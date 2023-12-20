import { useMemo } from "react";
import styles from "./Button.module.css";
import { useHover } from "@uidotdev/usehooks";

const Button = ({
  buttonText = "Button Text",
  iconLeft,
  iconRight,
  showIconLeft,
  showIconRight,
  buttonTextColor,
  buttonFontTextSize,
  buttonTextLineHeight,
  buttonTextFontWeight,
  altTextIconLeft,
  altTextIconRight,

}) => {
  const buttonTextControl = useMemo(() => {
    return {
      color: buttonTextColor,
      fontSize: buttonFontTextSize,
      lineHeight: buttonTextLineHeight,
      fontWeight: buttonTextFontWeight,
    };
  }, [
    buttonTextColor,
    buttonFontTextSize,
    buttonTextLineHeight,
    buttonTextFontWeight,
  ]);

  const [ref, hovering] = useHover();

  const backgroundColor = hovering
    ? `var(--colorWhite)`
    : "var(--colorAccentVivid)";

  return (
    <div
    ref={ref}
      className={styles.button}
      style={{backgroundColor}}
    >
      {showIconLeft && (
        <img className={styles.buttonIcon} alt={altTextIconLeft} src={iconLeft} />
      )}
      <p className={styles.text} style={buttonTextControl}>
        {buttonText}
      </p>
      {showIconRight && (
        <img className={styles.buttonIcon} alt={altTextIconRight} src={iconRight} />
      )}
    </div>
  );
};

export default Button;
