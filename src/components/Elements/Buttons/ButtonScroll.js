import React from "react";
import styles from "./ButtonScroll.module.css";
import { motion } from "framer-motion";

const ButtonScroll = ({
  linkScrollURL,
  imageScrollURL,
  imageScrollAlt,
  iconScrollURL,
  iconScrollAlt,
  motionConfig = {
    initial: { rotate: "0deg" },
    animate: { rotate: "360deg" },
    transition: { repeat: Infinity, ease: "linear", duration: 8 },
  },
}) => {
  return (
    <a href={linkScrollURL} className={styles.containerButton}>
      <motion.img
        {...motionConfig}
        className={styles.imageScroll}
        alt={imageScrollAlt}
        src={imageScrollURL}
      />
      <img
        className={styles.iconScroll}
        alt={iconScrollAlt}
        src={iconScrollURL}
      />
    </a>
  );
};

export default ButtonScroll;
