import Containerheader from "./Elements/SectionTextContent";
import ContainerdivcardFeatureact from "./ContainerdivcardFeatureact";
import CardFeatureForm from "./CardFeatureForm";
import ContainerdivcardFeatureact1 from "./ContainerdivcardFeatureact1";
import styles from "./ContainerCard.module.css";

const ContainerCard = () => {
  return (
    <section className={styles.containersectionfeatures}>
      <Containerheader
        texth1light="All Provided"
        texth1bold="Features"
        textp="Doing your best to get the message across globally, most often you work with PDF files and printouts. They are difficult to personalize and user-unfriendly. It would be nice to make tracking changes, giving feedback and browsing easier, and mobile-optimised."
        containerheaderZIndex="unset"
        texth1lightColor="#181f4e"
        texth1lightMargin="0"
        texth1boldColor="#181f4e"
        texth1boldMargin="0"
        textpColor="#181f4e"
        textpMargin="0"
      />
      <div className={styles.containerdivgrid}>
        <ContainerdivcardFeatureact
          iconhouse="/iconquestionmarkapp.svg"
          numberText="01"
          titleText={`Q&A for your rules`}
          contentText="get quick answers to competition rule queries"
          showNumberText
          showTitleText
          showIcon
          showContentText
          texth6Margin="0"
          texth6FontWeight="700"
          texth6Margin1="0"
          texth6FontWeight1="700"
          textpMargin="0"
        />
        <CardFeatureForm
          languageVersionCode="02"
          contentLanguageVersions="Language versions"
          multiLanguageContent="entire content available in multiple languages"
          showTitleText
          showNumberText
          showContentText
        />
        <ContainerdivcardFeatureact1
          imageicon="/imageicon11@2x.png"
          numberText="03"
          titleText="Competition regulations"
          contentText="well-organised regulations, easy to upload and access"
          showNumberText
          showTitleText
          showContentText
        />
        <ContainerdivcardFeatureact1
          imageicon="/imageicon21@2x.png"
          numberText="04"
          titleText={`Rules & Changes`}
          contentText="rules always up-to-date, amendments easy to track"
          showNumberText
          showTitleText
          showContentText
        />
        <ContainerdivcardFeatureact1
          imageicon="/imageicon31@2x.png"
          numberText="05"
          titleText={`Notes & Favourites`}
          contentText="highlighing passages, adding personal notes, bookmarking favourites"
          showNumberText
          showTitleText
          showContentText
        />
        <ContainerdivcardFeatureact1
          imageicon="/imageicon41@2x.png"
          numberText="06"
          titleText="Marketing"
          contentText="building users’ database and sending notifications"
          showNumberText
          showTitleText
          showContentText
        />
        <ContainerdivcardFeatureact1
          imageicon="/imageicon51@2x.png"
          numberText="07"
          titleText="Content features"
          contentText="photo, audio, and video content available for download"
          showNumberText
          showTitleText
          showContentText
        />
        <ContainerdivcardFeatureact1
          imageicon="/imageicon61@2x.png"
          numberText="08"
          titleText="AI Assistant"
          contentText="experience seamless support with our ai assistant"
          showNumberText
          showTitleText
          showContentText
        />
      </div>
    </section>
  );
};

export default ContainerCard;
