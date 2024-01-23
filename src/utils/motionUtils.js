export const easeFast = {
  duration: 1,
  ease: [0.15, 0.85, 0.47, 0.97],
};

export const easeSlow = {
  duration: 2,
  ease: [0.15, 0.85, 0.47, 0.97],
};

export const getHoverProperties = (
  hoverScale,
  hoverRotate,
  customTransition = easeFast
) => ({
  whileHover: { scale: hoverScale, rotate: hoverRotate },
  transition: customTransition,
});

export const getInfinityRotationProperties = (
  rotationStart,
  rotationEnd,
  transitionRepeat,
  transitionEase,
  transitionDuration
) => ({
  initial: { rotate: rotationStart },
  animate: { rotate: rotationEnd },
  transition: {
    repeat: transitionRepeat,
    ease: transitionEase,
    duration: transitionDuration,
  },
});

const baseMotion = (
  translateY,
  transition = easeFast,
  staggerChildren = 0
) => ({
  hidden: { opacity: 0, transform: `translate(0, ${translateY}px)` },
  show: {
    opacity: 1,
    transform: "translate(0, 0)",
    transition: {
      ...transition,
      staggerChildren,
    },
  },
  viewport: { once: true },
});

export const getMotionProperties = (
  initialTranslate,
  whileInViewTranslate,
  customTransition = easeFast
) => ({
  initial: { opacity: 0, transform: `translate(${initialTranslate})` },
  whileInView: { opacity: 1, transform: `translate(${whileInViewTranslate})` },
  transition: customTransition,
  viewport: { once: true },
});

export const getContainerCardsProperties = (
  translateY,
  customStaggerChildren = 0.2
) => baseMotion(translateY, easeFast, customStaggerChildren);

export const getCardProperties = (translateY) =>
  baseMotion(translateY, easeFast);
