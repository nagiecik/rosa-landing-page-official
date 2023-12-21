import { useMemo } from "react";
import SectionTextContent from "../Elements/SectionTextContent";
import CardContext from "../Elements/CardContext";
import styles from "./Contexts.module.css";

const ContextContainer = ({ sectionZIndex }) => {
  const sectionSliderStyle = useMemo(() => {
    return {
      zIndex: sectionZIndex,
    };
  }, [sectionZIndex]);
  return (
    <section id="features" className={styles.containerSection} style={sectionSliderStyle}>
      <SectionTextContent
        sectionTextContentZIndex="0"
        textParagraph="ROSA (Rules Of Sports App) is a gamechanger in the way you manage, update and distribute the rules of your sport."
        textParagraphColor="var(--surface-primary)"
      />
      <div className={styles.containerSlider}>
          <CardContext
            textNumber="01."
            textTitle="Context #1"
            textParagraph="Simply download and install ROSA to unlock a world of sport-specific rules and regulations at your fingertips."
          />
          <CardContext
            textNumber="02."
            textTitle="Context #2"
            textParagraph="Simply download and install ROSA to unlock a world of sport-specific rules and regulations at your fingertips."
          />
          <CardContext
            textNumber="03."
            textTitle="Context #3"
            textParagraph="Simply download and install ROSA to unlock a world of sport-specific rules and regulations at your fingertips."
          />
          <CardContext
            textNumber="04."
            textTitle="Context #4"
            textParagraph="Simply download and install ROSA to unlock a world of sport-specific rules and regulations at your fingertips."
            cardBackgroundColor="var(--surface-secondary)"
            cardBorder="1px solid var(--surface-primary)"
          />

      </div>
      <img className={styles.imageMockup} alt="" src="/contextMockup.png" />
    </section>
  );
};

export default ContextContainer;
