import React from "react";
import { motion } from "framer-motion";
import {
  getMotionProperties,
  easeFast,
  easeSlow,
} from "../../../utils/motionUtils";
import styles from "./ButtonSecondary.module.css";
import { radius } from "../../../utils/radiusUtils";

const ButtonSecondary = ({
  altIconLeftText,
  altIconRightText,
  buttonDisplayMode,
  buttonSecondaryLink,
  buttonSecondaryText,
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
      ...radius({ x: radiusX, y: radiusY }),
      transition: easeFast,
    },

    hover: {
      backgroundColor: "var(--surface-secondary)",
      ...radius({ x: radiusXHover, y: radiusYHover }),
      transition: easeFast,
    },
  };

  const motionIcon = {
    rest: {
      rotate: "0deg",
      transition: easeFast,
    },

    hover: {
      rotate: "-45deg",
      transition: easeFast,
    },
  };

  const motionText = {
    rest: {
      color: "var(--surface-secondary)",
      transition: easeFast,
    },

    hover: {
      color: "var(--surface-primary)",
      transition: easeFast,
    },
  };

  return (
    <motion.div
      variants={buttonMotion}
      initial="rest"
      whileHover="hover"
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
        <a href={buttonSecondaryLink} target="_blank" rel="noopener noreferrer">
          <motion.p variants={motionText} className={styles.textButton}>
            {buttonSecondaryText}
          </motion.p>
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

export default ButtonSecondary;
