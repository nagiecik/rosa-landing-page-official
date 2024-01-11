export const easeFast = {
  duration: 1,
  ease: [0.15, 0.85, 0.47, 0.97],
};

export const easeSlow = {
  duration: 2,
  ease: [0.15, 0.85, 0.47, 0.97],
};

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
