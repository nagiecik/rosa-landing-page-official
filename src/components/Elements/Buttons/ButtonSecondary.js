import React from "react";
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
  linkTarget = "_blank", // Add a default value for link target
}) => {
  const buttonStyle = {
    width: buttonWidth,
    display: buttonDisplayMode,
  };

  return (
    <div className={styles.containerButton} style={buttonStyle}>
      {showIconLeft && (
        <img className={styles.iconLeft} alt={altTextIconLeft} src={iconLeft} />
      )}
      {showButtonText && (
        <a href={buttonLink} target={linkTarget} rel="noopener noreferrer">
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
