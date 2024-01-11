import { useMemo, useState, useEffect } from "react";
import ContextText from "../Elements/Contents/ContentText";
import CardContext from "../Elements/Cards/CardContext";
import { motion } from "framer-motion";
import styles from "./Contexts.module.css";

const Contexts = ({ sectionZIndex }) => {
  const ContextsData = [
    {
      img: "/mockups/contextMockup-1.png",
      alt: "Image Context 1",
      number: "01",
      title: "Partner Content",
      text: "Elevate brand reach with ROSA's Partner Content. Showcase exclusive insights, promotions, and behind-the-scenes access, creating an immersive experience for your audience",
    },
    {
      img: "/mockups/contextMockup-2.png",
      alt: "Image Context 2",
      number: "02",
      title: "Equipment",
      text: "Elevate sales with ROSA's Equipment feature, providing detailed info on sports gear. Position your brand as the go-to for top-quality equipment.",
    },
    {
      img: "/mockups/contextMockup-3.png",
      alt: "Image Context 1",
      number: "03",
      title: "Competitions",
      text: "Maximize visibility with ROSA's Competitions. Sponsor or promote events, connect with fans through real-time updates, and be synonymous with the thrill of sports competitions.",
    },
    {
      img: "/mockups/contextMockup-4.png",
      alt: "Image Context 2",
      number: "04",
      title: "Internal Regulations",
      text: "Align with integrity through ROSA's Regulations. Support fair play by promoting understanding of internal rules, reinforcing your brand's dedication to the core values of each sport.",
    },
  ];

  const [selectedContext, setSelectedContext] = useState(ContextsData[0]);

  const handleCardClick = (context) => {
    setSelectedContext(context);
  };

  const sectionStyle = useMemo(() => {
    return {
      zIndex: sectionZIndex,
    };
  }, [sectionZIndex]);

  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 430px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 430px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  const easeFast = {
    duration: 1,
    ease: [0.15, 0.85, 0.47, 0.97],
  };

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
    <section
      id="context"
      className={styles.containerSection}
      style={sectionStyle}
    >
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
          textHeaderLight="Context"
          textHeaderLightWeight="var(--font-thin)"
          showTextHeaderBold={true}
          textHeaderBold="Selection"
          textHeaderBoldWeight="var(--font-semibold)"
          showTextParagraph={true}
          textParagraph="ROSA (Rules Of Sports App) stands out as a groundbreaking tool, fundamentally reshaping the way you manage, update, and seamlessly distribute the rules governing your sport."
          textParagraphColor="var(--surface-primary)"
        />
      </motion.div>

      <motion.div
        variants={cardContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={styles.containerContent}
      >
        {!matches && selectedContext ? (
          <img
            className={styles.imageLeft}
            alt={selectedContext.alt}
            src={selectedContext.img}
          />
        ) : null}
        <div className={styles.containerCards}>
          {ContextsData.map((context, index) => (
            <motion.div
              key={index}
              variants={cardItem}
              style={{ display: "flex" }}
            >
              <CardContext
                key={index}
                onClick={() => handleCardClick(context)}
                imageUrl={`/${context.img}.png`}
                textNumber={context.number}
                textTitle={context.title}
                textParagraph={context.text}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contexts;
