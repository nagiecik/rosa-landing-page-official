import ContentText from "../Elements/Contents/ContentText";
import CardFeature from "../Elements/Cards/CardFeature";
import { motion } from "framer-motion";
import {
  easeFast,
  easeSlow,
  easeFastStagger,
  getMotionProperties,
} from "../../utils/motionUtils";
import styles from "./Features.module.css";
import useMediaQuery from "../../utils/useMediaQuery";

const Features = () => {
  const cardContainer = {
    hidden: { opacity: 0, transform: `translate(0, 80px)` },
    show: {
      opacity: 1,
      transform: `translate(0, 0)`,
      transition: easeFastStagger,
    },
  };

  const cardItem = {
    hidden: { opacity: 0, transform: `translate(0, 80px)` },
    show: {
      opacity: 1,
      transform: `translate(0, 0)`,
      transition: easeFast,
    },
  };

  const cardFeatureData = [
    {
      imageIconUrl: "/features/Question.svg",
      textNumber: "01",
      textTitle: "Q&A for your rules",
      textParagraph: "Get quick answers to rule and competition queries.",
    },
    {
      imageIconUrl: "/features/TextAa.svg",
      textNumber: "02",
      textTitle: "Language Versions",
      textParagraph:
        "Make your entire content available in multiple languages.",
    },
    {
      imageIconUrl: "/features/TreeStructure.svg",
      textNumber: "03",
      textTitle: "Competition regulations",
      textParagraph:
        "Manage and distribute well-organised regulations, easy to upload and access.",
    },
    {
      imageIconUrl: "/features/Swap.svg",
      textNumber: "04",
      textTitle: "Rules & Changes",
      textParagraph:
        "Make your rules always up-to-date, amendments easy to track.",
    },
    {
      imageIconUrl: "/features/Note.svg",
      textNumber: "05",
      textTitle: "Notes & Favourites",
      textParagraph:
        "Enable highlighting, adding personal notes, bookmarking favourites.",
    },
    {
      imageIconUrl: "/features/Database.svg",
      textNumber: "06",
      textTitle: "Marketing",
      textParagraph:
        "Enable building users database and sending notifications.",
    },
    {
      imageIconUrl: "/features/Images.svg",
      textNumber: "07",
      textTitle: "Content features",
      textParagraph:
        "Provide photo, audio, and video content available for download.",
    },
    {
      imageIconUrl: "/features/Brain.svg",
      textNumber: "08",
      textTitle: "AI Assistant",
      textParagraph:
        "Our ai assistant will look for answers and data within your content.",
    },
  ];

  const mobile = useMediaQuery("(max-width: 430px)");
  const getWidth = () => (mobile ? "100%" : "800px");

  const motionContainer = getMotionProperties("0, 160px", "0, 0", easeFast);

  return (
    <section id="features" className={styles.containerSection}>
      <motion.div {...motionContainer} className={styles.containerMotion}>
        <ContentText
          showTextHeaderLight={true}
          showTextHeaderBold={true}
          showTextHeaderLink={false}
          showTextParagraph={true}
          showTextBold={true}
          showButtonPrimary={false}
          showButtonSecondary={true}
          textHeaderLight="The"
          textHeaderLightColor="var(--surface-secondary)"
          textHeaderLightAlign="center"
          textHeaderBold="Features"
          textHeaderBoldColor="var(--surface-secondary)"
          textHeaderBoldAlign="center"
          textParagraph="Once you know what context(s) you need ROSA for, make use of all the features available to make your rules, partner content, competition regulations, or any other available, timely and easy to distribute and manage."
          textParagraphColor="var(--surface-secondary)"
          textParagraphWidth={getWidth()}
          textParagraphMaxWidth={getWidth()}
          textParagraphAlign="center"
          textBold="Select your homescreen design, choose your features, layout and structure."
          textBoldColor="var(--surface-secondary)"
          textBoldWidth={getWidth()}
          textBoldMaxWidth={getWidth()}
          textBoldAlign="center"
          containerWidth="100%"
          containerFlexDirection="column"
          containerAlignItems="center"
          containerHeaderAlignItems="center"
          containerHeaderJustifyContent="center"
          containerHeaderFlexDirection="row"
          buttonSecondaryLink="mailto:hello@rosa.zone"
          buttonSecondaryText="Help me choose"
        />
      </motion.div>
      <motion.div
        variants={cardContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={styles.containerContent}
      >
        {cardFeatureData.map((item, index) => (
          <motion.div key={index} variants={cardItem}>
            <CardFeature
              imageIconUrl={item.imageIconUrl}
              textNumber={item.textNumber}
              textTitle={item.textTitle}
              textParagraph={item.textParagraph}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Features;
