import { useMemo, useState, useEffect } from "react";
import ContentText from "../Elements/Contents/ContentText";
import { motion } from "framer-motion";
import {
  getMotionProperties,
  easeFast,
  easeSlow,
  getContainerCardsProperties,
  getCardProperties,
} from "../../utils/motionUtils";
import useMediaQuery from "../../utils/useMediaQuery";
import styles from "./ForWhat.module.css";

const ForWhat = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
    setActiveIndex(index);
    setActiveImageIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleClick = (index) => {
    setActiveIndex(index);
    setActiveImageIndex(index);
  };

  const motionContainer = getMotionProperties("0, 160px", "0, 0", easeFast);

  const data = [
    {
      number: "01",
      title: "Context #1 - Rules of (any) sport",
      description:
        "Use ROSA to bring the rules of your sport to your fans, referees, athletes, sports commentators, and everyone interested.",
      tags: "#governance #sportsrules #referees #judging #officiating #athletes #education #professionalsport",
      img: "/mockups/contextMockup-1.png",
      alt: "Image Context 1",
    },
    {
      number: "02",
      title: "Context #2 - Official Partner content",
      description:
        "Level up the business side of your sport and provide your partners with extra commercial content opportunities.",
      tags: "#businesspartners #partnership #sponsorship #commercialdeal #commercialcontent #sponsored",
      img: "/mockups/contextMockup-2.png",
      alt: "Image Context 2",
    },
    {
      number: "03",
      title: "Context #3 - Competitions",
      description:
        "Boost your competitions by delivering competition-specific rules and regulations when and where they’re needed most.",
      tags: "#competitions #championships #tournaments #events #competitionregulation #sportsevents",
      img: "/mockups/contextMockup-3.png",
      alt: "Image Context 3",
    },
    {
      number: "04",
      title: "Context #4 - Equipment",
      description:
        "Showcase gear and equipment to let athletes and clubs know what they should use, and fans what they can have.",
      tags: "#sportsgear #sportsequipment #officialapparel #sportskit #officiatinguniforms #refereeapparel",
      img: "/mockups/contextMockup-4.png",
      alt: "Image Context 4",
    },
    {
      number: "05",
      title: "Context #5 - Internal Regulations",
      description:
        "Use ROSA to distribute internal regulations for sports organizations working in remote teams - whether it be drafts or final versions.",
      tags: "#regulationsdistribution #internaldocuments #regulation #remoteteams #collaboration",
      img: "/mockups/contextMockup-5.png",
      alt: "Image Context 5",
    },
    {
      number: "06",
      title: "Context #6 - Custom Context",
      description:
        "Let us know what context ROSA can serve for your organization to make the updating, management, and distribution of your content quick and seamless.",
      tags: "#documentmanagement #custom #contentdistribution #video #charts #factsheets #lists #Q&A #tables",
      img: "/mockups/contextMockup-6.png",
      alt: "Image Context 6",
    },
  ];

  const images = [
    "/mockups/contextMockup-1.png",
    "/mockups/contextMockup-2.png",
    "/mockups/contextMockup-3.png",
    "/mockups/contextMockup-4.png",
    "/mockups/contextMockup-5.png",
    "/mockups/contextMockup-6.png",
  ];

  return (
    <section id="for_what" className={styles.containerSection}>
      <motion.div {...motionContainer} className={styles.containerMotion}>
        <ContentText
          showTextHeaderLight={true}
          showTextHeaderBold={true}
          showTextHeaderLink={false}
          showTextParagraph={true}
          showButtonCTA={true}
          textHeaderLight="Context"
          textHeaderLightColor="var(--surface-primary)"
          textHeaderBold="for (any) Sport"
          textHeaderBoldColor="var(--surface-primary)"
          textParagraph="ROSA is a gamechanger in the way you manage, update and distribute the rules of your sport, but it can be used for so much more! Use it for multiple ForWhat of running your sports business - commercial partner content, competition, internal regulation, or else. You decide!"
          textParagraphColor="var(--surface-primary)"
          containerFlexDirection="column"
          containerHeaderFlexDirection="row"
          textParagraphWidth="100%"
          textParagraphMaxWidth="800px"
          textParagraphAlign="center"
          buttonLink="mailto:hello@rosa.zone"
          buttonText="What's your context?"
          buttonWidth="320px"
        />
      </motion.div>
      <motion.div {...motionContainer} className={styles.containerContent}>
        <div className={styles.containerImage}>
          <div className={styles.containerMockup}>
            <img
              src="/backgrounds/backgroundContextsMockup.png"
              className={styles.containerDevice}
            />
            {images.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Image Context ${index + 1}`}
                className={styles.image}
                animate={{
                  opacity:
                    activeIndex === index || hoveredIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 40,
                  transition: easeSlow,
                }}
                initial={{ opacity: index === 0 ? 1 : 0 }}
                style={{
                  display:
                    activeIndex === index || hoveredIndex === index
                      ? "block"
                      : "none",
                }}
              />
            ))}
          </div>
        </div>
        <div className={styles.containerCards}>
          {data.map((item, index) => (
            <motion.div
              key={index}
              className={`${styles.containerCard} ${
                (hoveredIndex === index || activeIndex === index) &&
                styles.cardHovered
              }`}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleMouseLeave}
              animate={{
                height: index === activeIndex ? "204px" : "80px",
                transition: easeFast,
              }}
            >
              <div className={styles.containerCorner} href="#">
                <p className={styles.textNumber}>{item.number}</p>
              </div>
              <p className={styles.textTitle}>{item.title}</p>
              <div className={styles.containerText}>
                <p className={styles.textParagraph}>{item.description}</p>
                <p className={styles.textTags}>{item.tags}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ForWhat;
