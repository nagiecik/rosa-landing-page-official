import SectionTextContent from "../Elements/SectionTextContent";
import CardFeature from "../Elements/CardFeature";
import styles from "./Features.module.css";

const Features = () => {
  return (
    <section id="features" className={styles.containerFeatures}>
      <SectionTextContent
        sectionTextContentZIndex="0"
        firstText="All Provided"
        firstTextWeight="var(--font-thin)"
        firstTextColor="var(--surface-secondary)"
        secondText="Features"
        secondTextWeight="var(--font-semibold)"
        secondTextColor="var(--surface-secondary)"
        textParagraph="Doing your best to get the message across globally, most often you work with PDF files and printouts. They are difficult to personalize and user-unfriendly. It would be nice to make tracking changes, giving feedback and browsing easier, and mobile-optimised."
        textParagraphColor="var(--surface-secondary)"
      />
      <div className={styles.containerGridCards}>
        <CardFeature
          imageIconUrl="/icons/questionmark.app.svg"
          textNumber="01"
          textTitle="Competition regulations"
          textParagraph="well-organised regulations, easy to upload and access"
        />
        <CardFeature
          imageIconUrl="/icons/questionmark.app.svg"
          textNumber="02"
          textTitle="Competition regulations"
          textParagraph="well-organised regulations, easy to upload and access"
        />
        <CardFeature
          imageIconUrl="/icons/questionmark.app.svg"
          textNumber="03"
          textTitle="Competition regulations"
          textParagraph="well-organised regulations, easy to upload and access"
        />
        <CardFeature
          imageIconUrl="/icons/questionmark.app.svg"
          textNumber="04"
          textTitle="Competition regulations"
          textParagraph="well-organised regulations, easy to upload and access"
        />
        <CardFeature
          imageIconUrl="/icons/questionmark.app.svg"
          textNumber="05"
          textTitle="Competition regulations"
          textParagraph="well-organised regulations, easy to upload and access"
        />
        <CardFeature
          imageIconUrl="/icons/questionmark.app.svg"
          textNumber="06"
          textTitle="Competition regulations"
          textParagraph="well-organised regulations, easy to upload and access"
        />
        <CardFeature
          imageIconUrl="/icons/questionmark.app.svg"
          textNumber="07"
          textTitle="Competition regulations"
          textParagraph="well-organised regulations, easy to upload and access"
        />
        <CardFeature
          imageIconUrl="/icons/questionmark.app.svg"
          textNumber="08"
          textTitle="Competition regulations"
          textParagraph="well-organised regulations, easy to upload and access"
        />
      </div>
    </section>
  );
};

export default Features;
