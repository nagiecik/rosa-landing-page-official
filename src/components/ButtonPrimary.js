import { useMemo } from "react";
import styles from "./ButtonPrimary.module.css";
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
  buttonWidth,
}) => {
  const buttonTextControl = useMemo(() => {
    return {
      color: buttonTextColor,
      fontSize: buttonFontTextSize,
      lineHeight: buttonTextLineHeight,
      fontWeight: buttonTextFontWeight,
      width: buttonWidth,
    };
  }, [
    buttonTextColor,
    buttonFontTextSize,
    buttonTextLineHeight,
    buttonTextFontWeight,
  ]);

  const [ref, hovering] = useHover();

  const backgroundColor = hovering
    ? `var(--surface-primary)`
    : "var(--on-surface-accent-active)";

  return (
    <div ref={ref} className={styles.button} style={{ backgroundColor }}>
      {showIconLeft && (
        <img
          className={styles.buttonIcon}
          alt={altTextIconLeft}
          src={iconLeft}
        />
      )}
      <p className={styles.text} style={buttonTextControl}>
        {buttonText}
      </p>
      {showIconRight && (
        <img
          className={styles.buttonIcon}
          alt={altTextIconRight}
          src={iconRight}
        />
      )}
    </div>
  );
};

export default Button;
