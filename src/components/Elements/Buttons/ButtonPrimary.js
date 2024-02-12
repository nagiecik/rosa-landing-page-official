import React from "react";
import { motion } from "framer-motion";
import {
  getMotionProperties,
  easeFast,
  easeSlow,
  easeFastMobile,
} from "../../../utils/motionUtils";
import { radius } from "../../../utils/radiusUtils";
import styles from "./ButtonPrimary.module.css";

const ButtonPrimary = ({
  altIconLeftText,
  altIconRightText,
  buttonDisplayMode,
  buttonPrimaryLink,
  buttonPrimaryText,
  iconLeftURL,
  iconRightURL,
  showButtonText,
  showIconLeft,
  showIconRight,
  buttonWidth,
  radiusX,
  radiusY,
  radiusXHover,
  radiusYHover,
}) => {
  const buttonStyle = {
    display: buttonDisplayMode,
    width: buttonWidth,
    ...radius({ x: radiusX, y: radiusY }),
  };

  const buttonMotion = {
    rest: {
      backgroundColor: "var(--on-surface-accent-active)",
      transition: easeFast,
      ...radius({ x: radiusX, y: radiusY }),
    },

    hover: {
      backgroundColor: "var(--surface-primary)",
      transition: easeFast,
      ...radius({ x: radiusXHover, y: radiusYHover }),
    },

    tap: {
      backgroundColor: "var(--surface-primary)",
      transition: easeFastMobile,
      ...radius({ x: radiusXHover, y: radiusYHover }),
    },
  };

  const motionIcon = {
    rest: {
      rotate: "0deg",
      transition: easeFast,
      fill: "var(--surface-secondary)",
    },

    hover: {
      rotate: "-45deg",
      transition: easeFast,
      fill: "var(--surface-primary)",
    },

    tap: {
      rotate: "-45deg",
      transition: easeFastMobile,
      fill: "var(--surface-primary)",
    },
  };

  return (
    <motion.div
      variants={buttonMotion}
      initial="rest"
      whileHover="hover"
      whileTap="tap" // Add whileTap here
      animate="rest"
      className={styles.containerButton}
      style={buttonStyle}
    >
      {showIconLeft && (
        <motion.img
          variants={motionIcon}
          className={styles.iconLeft}
          alt={altIconLeftText}
          src={iconLeftURL}
        />
      )}
      {showButtonText && (
        <a href={buttonPrimaryLink} target="_blank" rel="noopener noreferrer">
          <p className={styles.textButton}>{buttonPrimaryText}</p>
        </a>
      )}
      {showIconRight && (
        <motion.img
          variants={motionIcon}
          className={styles.iconRight}
          alt={altIconRightText}
          src={iconRightURL}
        />
      )}
    </motion.div>
  );
};

export default ButtonPrimary;
