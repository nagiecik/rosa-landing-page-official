import { useMemo } from "react";
import styles from "./ButtonPrimary.module.css";

const Button = ({
  buttonText,
  showButtonText,
  iconLeft,
  iconRight,
  showIconLeft,
  showIconRight,
  altTextIconLeft,
  altTextIconRight,
  buttonWidth,
  buttonDisplayMode,
}) => {
  const buttonTextStyle = useMemo(() => {
    return {
      width: buttonWidth,
      display: buttonDisplayMode,
    };
  }, [buttonWidth, buttonDisplayMode]);

  return (
    <div className={styles.button} style={buttonTextStyle}>
      {showIconLeft && (
        <img
          className={styles.buttonIcon}
          alt={altTextIconLeft}
          src={iconLeft}
        />
      )}
      {showButtonText && <p className={styles.buttonText}>{buttonText}</p>}
      {showIconRight && (
        <img
          className={styles.buttonIconRight}
          alt={altTextIconRight}
          src={iconRight}
        />
      )}
    </div>
  );
};

export default Button;
