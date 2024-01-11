import React from "react";
import styles from "./ButtonPrimary.module.css";

const Button = ({
  buttonText,
  showButtonText,
  showIconLeft,
  iconLeftURL,
  altIconLeftText,
  showIconRight,
  iconRightURL,
  altIconRightText,
  buttonWidth,
  buttonDisplayMode,
  buttonLink,
}) => {
  const buttonStyle = {
    width: buttonWidth,
    display: buttonDisplayMode,
  };

  return (
    <div className={styles.containerButton} style={buttonStyle}>
      {showIconLeft && (
        <img
          className={styles.iconLeft}
          alt={altIconLeftText}
          src={iconLeftURL}
        />
      )}
      {showButtonText && (
        <a href={buttonLink} target="_blank" rel="noopener noreferrer">
          <p className={styles.textButton}>{buttonText}</p>
        </a>
      )}
      {showIconRight && (
        <img
          className={styles.iconRight}
          alt={altIconRightText}
          src={iconRightURL}
        />
      )}
    </div>
  );
};

export default Button;
