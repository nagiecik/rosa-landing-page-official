import ContextText from "../Elements/Contents/ContentText";
import CardFeature from "../Elements/Cards/CardFeature";
import { motion } from "framer-motion";
import styles from "./Features.module.css";

const Features = () => {
  const easeFast = {
    duration: 1,
    ease: [0.15, 0.85, 0.47, 0.97],
  };

  const cardFeatureData = [
    {
      imageIconUrl: "/icons/questionmark.app.svg",
      textNumber: "01",
      textTitle: "Competition regulations",
      textParagraph: "well-organised regulations, easy to upload and access",
    },
    {
      imageIconUrl: "/icons/textformat.alt.svg",
      textNumber: "02",
      textTitle: "Language Versions",
      textParagraph: "entire content available in multiple languages",
    },
    {
      imageIconUrl: "/icons/square.and.pencil.svg",
      textNumber: "03",
      textTitle: "Competition regulations",
      textParagraph: "well-organised regulations, easy to upload and access",
    },
    {
      imageIconUrl: "/icons/doc.badge.ellipsis.svg",
      textNumber: "04",
      textTitle: "Rules & Changes",
      textParagraph: "rules always up-to-date, amendments easy to track",
    },
    {
      imageIconUrl: "/icons/note.text.svg",
      textNumber: "05",
      textTitle: "Notes & Favourites",
      textParagraph:
        "highlighting passages, adding personal notes, bookmarking favourites",
    },
    {
      imageIconUrl: "/icons/person.icloud.svg",
      textNumber: "06",
      textTitle: "Marketing",
      textParagraph: "building users’ database and sending notifications",
    },
    {
      imageIconUrl: "/icons/doc.text.image.svg",
      textNumber: "07",
      textTitle: "Content features",
      textParagraph: "photo, audio, and video content available for download",
    },
    {
      imageIconUrl: "/icons/brain.head.profile.svg",
      textNumber: "08",
      textTitle: "AI Assistant",
      textParagraph: "experience seamless support with our ai assistant",
    },
  ];

  const cardContainer = {
    hidden: { opacity: 0, transform: `translate(0, 80px)` },
    show: {
      opacity: 1,
      transform: `translate(0, 0)`,
      transition: {
        duration: 1,
        ease: [0.15, 0.85, 0.47, 0.97],
        staggerChildren: 0.2,
      },
    },
  };

  const cardItem = {
    hidden: { opacity: 0, transform: `translate(0, 80px)` },
    show: {
      opacity: 1,
      transform: `translate(0, 0)`,
      transition: { duration: 1, ease: [0.15, 0.85, 0.47, 0.97] },
    },
  };

  return (
    <section id="features" className={styles.containerSection}>
      <motion.div
        initial={{ opacity: 0, transform: `translate(0, 160px)` }}
        whileInView={{ opacity: 1, transform: `translate(0, 0)` }}
        transition={easeFast}
        viewport={{ once: true }}
        className={styles.containerMotion}
      >
        <ContextText
          sectionWidth="100%"
          sectionTextContentZIndex="0"
          showTextHeaderLight={true}
          textHeaderLight="All Provided"
          textHeaderLightWeight="var(--font-thin)"
          textHeaderLightColor="var(--surface-secondary)"
          showTextHeaderBold={true}
          textHeaderBold="Features"
          textHeaderBoldWeight="var(--font-semibold)"
          textHeaderBoldColor="var(--surface-secondary)"
          showTextParagraph={true}
          textParagraph="Doing your best to get the message across globally, most often you work with PDF files and printouts. They are difficult to personalize and user-unfriendly. It would be nice to make tracking changes, giving feedback and browsing easier, and mobile-optimised."
          textParagraphColor="var(--surface-secondary)"
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
