import NavbarLink from "./NavbarLink";
import { motion, AnimatePresence } from "framer-motion";
import {
  easeFast,
  easeSlow,
  getMotionProperties,
} from "../../../utils/motionUtils";
import styles from "./NavMenu.module.css";

const NavMenu = ({ isOpen, closeOverlay, navbarData }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={easeFast}
          className={styles.containerSection}
          onClick={closeOverlay}
        >
          <motion.div
            initial={{ translateX: "50px" }}
            animate={{ translateX: "0px" }}
            transition={easeFast}
            className={styles.containerContent}
          >
            {navbarData.map((data, index) => (
              <NavbarLink
                key={index}
                linkText={data.linkText}
                linkURL={data.linkURL}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavMenu;
