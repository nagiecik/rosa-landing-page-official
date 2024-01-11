import styles from "./ButtonScroll.module.css";
import { motion } from "framer-motion";

const ButtonScroll = ({
  linkScrollURL,
  imageScrollURL,
  imageScrollALT,
  iconScrollURL,
  iconScrollAlt,
}) => {
  return (
    <a href={linkScrollURL} className={styles.containerButton}>
      <motion.img
        initial={{ rotate: "0deg" }}
        animate={{ rotate: "360deg" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
        className={styles.imageScroll}
        alt={imageScrollALT}
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
