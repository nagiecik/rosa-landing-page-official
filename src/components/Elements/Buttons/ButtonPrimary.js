import React from "react";
import { motion } from "framer-motion";
import {
  getMotionProperties,
  easeFast,
  easeSlow,
} from "../../../utils/motionUtils";
import styles from "./ButtonPrimary.module.css";

const ButtonPrimary = ({
  altIconLeftText,
  altIconRightText,
  buttonDisplayMode,
  buttonLink,
  buttonText,
  buttonWidth,
  iconLeftURL,
  iconRightURL,
  showButtonText,
  showIconLeft,
  showIconRight,
}) => {
  const buttonStyle = {
    width: buttonWidth,
    display: buttonDisplayMode,
  };

  const buttonMotion = {
    rest: {
      backgroundColor: "var(--on-surface-accent-active)",
      borderRadius: "var(--size-12)",
      transition: easeFast,
    },

    hover: {
      backgroundColor: "var(--surface-primary)",
      borderRadius: "var(--size-16)",
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
