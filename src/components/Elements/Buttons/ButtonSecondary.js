import { useMemo } from "react";
import styles from "./ButtonSecondary.module.css";

const Button = ({
  buttonText,
  iconLeft,
  iconRight,
  showIconLeft,
  showIconRight,
  altTextIconLeft,
  altTextIconRight,
  buttonWidth,
  buttonDisplayMode,
  showButtonText,
  buttonLink,
}) => {
  const buttonTextStyle = useMemo(() => {
    return {
      width: buttonWidth,
      display: buttonDisplayMode,
    };
  }, [buttonWidth, buttonDisplayMode]);

  return (
    <div className={styles.containerButton} style={buttonTextStyle}>
      {showIconLeft && (
        <img
          className={styles.iconLeft}
          alt={altTextIconLeft}
          src={iconLeft}
        />
      )}
      {showButtonText && (
        <a href={buttonLink} target="_blank">
          <p className={styles.textButton}>{buttonText}</p>
        </a>
      )}
      {showIconRight && (
        <img
          className={styles.iconRight}
          alt={altTextIconRight}
          src={iconRight}
        />
      )}
    </div>
  );
};

export default Button;
