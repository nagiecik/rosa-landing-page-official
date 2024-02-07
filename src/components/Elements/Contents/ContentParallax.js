import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import styles from "./ContentParallax.module.css";

function ContentParallax({ children, baseVelocity = 100, imageURL }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(0, -25, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 3000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={styles.containerParallax}>
      <motion.div className={styles.containerScroller} style={{ x }}>
        <div className={styles.containerImage}>
          <img src={imageURL} alt="Image 1" />
          {children}
        </div>
        <div className={styles.containerImage}>
          <img src={imageURL} alt="Image 2" />
          {children}
        </div>
        <div className={styles.containerImage}>
          <img src={imageURL} alt="Image 3" />
          {children}
        </div>
        <div className={styles.containerImage}>
          <img src={imageURL} alt="Image 4" />
          {children}
        </div>
      </motion.div>
    </div>
  );
}

export default ContentParallax;
