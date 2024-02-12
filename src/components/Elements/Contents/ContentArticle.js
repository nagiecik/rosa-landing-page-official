import useMediaQuery from "../../../utils/useMediaQuery";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getMotionProperties, easeSlow } from "../../../utils/motionUtils";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import styles from "./ContentArticle.module.css";

const ContentArticle = ({}) => {
  const tablet = useMediaQuery("(max-width: 768px)");
  const mobile = useMediaQuery("(max-width: 430px)");

  const motionArticle = getMotionProperties("-100px, 0", "0, 0", easeSlow);

  return (
    <motion.article {...motionArticle} className={styles.containerContent}>
      {(tablet && !mobile) || !tablet ? (
        <div className={styles.containerHeader}>
          <h1 className={styles.textHeaderLight}>Gamechanger</h1>
          {!tablet && (
            <>
              <h1 className={styles.textHeaderBold}>In The Way</h1>
              <h1 className={styles.textHeaderLight}>You Manage</h1>
            </>
          )}
          {tablet && !mobile && (
            <h1 className={styles.textHeaderBold}>In The Way You Manage</h1>
          )}
        </div>
      ) : (
        mobile && (
          <div className={styles.containerHeader}>
            <h1 className={styles.textHeaderLight}>Gamechanger</h1>
            <h1 className={styles.textHeaderBold}>In The Way</h1>
            <h1 className={styles.textHeaderLight}>You Manage</h1>
          </div>
        )
      )}

      <p className={styles.textParagraph}>
        No matter what laws and regulations you are in charge of, every sports
        organization faces similar issues: rules constantly change, they must be
        distributed, and the numerous sources and versions need to be managed.
        If we add to it the multiple tools and the necessity to communicate
        globally with a message that is both clear and always current, a
        significant challenge arises.
        <br />
        <br />
        Now imagine a solution to this problem, a true gamechanger!
      </p>
      <ButtonPrimary
        showButtonText={true}
        showIconLeft={false}
        showIconRight={true}
        altIconLeftText=""
        altIconRightText="Icon Arrow Right"
        buttonDisplayMode=""
        // buttonPrimaryLink="mailto:hello@rosa.zone"
        buttonPrimaryText="Get your App"
        buttonWidth=""
        iconLeftURL=""
        iconRightURL="/icons/arrow.right.svg"
        radiusX="16"
        radiusY="4"
        radiusXHover="32"
        radiusYHover="8"
      />
    </motion.article>
  );
};

export default ContentArticle;
