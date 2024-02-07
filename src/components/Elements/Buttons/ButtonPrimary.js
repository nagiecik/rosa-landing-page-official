import React from "react";
import { motion } from "framer-motion";
import {
  getMotionProperties,
  easeFast,
  easeSlow,
} from "../../../utils/motionUtils";
import styles from "./ButtonPrimary.module.css";
import { radius } from "../../../utils/radiusUtils";

const ButtonPrimary = ({
  altIconLeftText,
  altIconRightText,
  buttonDisplayMode,
  buttonLink,
  buttonText,
  iconLeftURL,
  iconRightURL,
  showButtonText,
  showIconLeft,
  showIconRight,
}) => {
  const buttonStyle = {
    display: buttonDisplayMode,
    ...radius({ x: 16, y: 4 }),
  };

  const buttonMotion = {
    rest: {
      backgroundColor: "var(--on-surface-accent-active)",
      transition: easeFast,
      ...radius({ x: 16, y: 4 }),
    },

    hover: {
      backgroundColor: "var(--surface-primary)",
      transition: easeFast,
      ...radius({ x: 32, y: 8 }),
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
        <a href={buttonLink} target="_blank" rel="noopener noreferrer">
          <p className={styles.textButton}>{buttonText}</p>
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
