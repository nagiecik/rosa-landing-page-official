import React from "react";
import styles from "./ButtonScroll.module.css";
import { motion } from "framer-motion";
import {
  getInfinityRotationProperties,
  getHoverProperties,
  easeFast,
} from "../../../utils/motionUtils";

const ButtonScroll = ({
  linkScrollURL,
  imageScrollURL,
  imageScrollAlt,
  iconScrollURL,
  iconScrollAlt,
}) => {
  const motionRotation = getInfinityRotationProperties(
    "0deg",
    "360deg",
    Infinity,
    "linear",
    8
  );

  const motionCircle = {
    rest: {
      scale: 1,
      transition: easeFast,
    },
    hover: {
      scale: 1.1,
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
    <motion.a
      variants={motionCircle}
      initial="rest"
      whileHover="hover"
      animate="rest"
      href={linkScrollURL}
      className={styles.containerButton}
    >
      <motion.img
        {...motionRotation}
        className={styles.imageScroll}
        alt={imageScrollAlt}
        src={imageScrollURL}
      />
      <motion.img
        variants={motionIcon}
        className={styles.iconScroll}
        alt={iconScrollAlt}
        src={iconScrollURL}
      />
    </motion.a>
  );
};

export default ButtonScroll;
