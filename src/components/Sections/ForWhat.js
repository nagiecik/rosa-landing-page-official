import { useMemo, useState, useEffect } from "react";
import ContentText from "../Elements/Contents/ContentText";
import { motion } from "framer-motion";
import {
  getMotionProperties,
  easeFast,
  easeSlow,
  getContainerCardsProperties,
  getCardProperties,
  getHoverProperties,
} from "../../utils/motionUtils";
import { radius } from "../../utils/radiusUtils";
import useMediaQuery from "../../utils/useMediaQuery";
import styles from "./ForWhat.module.css";

const ForWhat = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const desktopBig = useMediaQuery("(max-width: 1536px)");
  const desktopMacbook = useMediaQuery("(max-width: 1440px)");
  const desktopMedium = useMediaQuery("(max-width: 1366px)");
  const desktopSmall = useMediaQuery("(max-width: 1280px)");
  const tabletHorizontal = useMediaQuery("(max-width: 1024px)");
  const mobile = useMediaQuery("(max-width: 430px)");

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

  const getRadius = (currentIndex) => {
    const isHovered = hoveredIndex === currentIndex;
    const isActive = activeIndex === currentIndex;

    const borderRadiusX = isActive || isHovered ? 32 : 64;
    const borderRadiusY = isActive || isHovered ? 8 : 4;

    return {
      ...radius({ x: borderRadiusX, y: borderRadiusY }),
    };
  };

  const motionImagesHover = getHoverProperties(1.1, "5deg", easeFast);
  const motionContainer = getMotionProperties("0, 160px", "0, 0", easeFast);

  const calculateHeight = (
    element,
    isDesktopBig,
    isDesktopMacbook,
    isDesktopSmall,
    isTabletHorizontal
  ) => {
    let tagsOneLine = 180;
    let tagsTwoLine = 204;
    let tagsThreeLine = 228;

    if (
      isDesktopBig &&
      !isDesktopMacbook &&
      !isDesktopSmall &&
      !isTabletHorizontal
    ) {
      tagsOneLine = 184;
      tagsTwoLine = 208;
      tagsThreeLine = 232;
    } else if (
      isDesktopMacbook &&
      isDesktopBig &&
      !isDesktopSmall &&
      !isTabletHorizontal
    ) {
      tagsOneLine = 180;
      tagsTwoLine = 204;
      tagsThreeLine = 228;
    } else if (
      isDesktopMacbook &&
      isDesktopBig &&
      isDesktopSmall &&
      !isTabletHorizontal
    ) {
      tagsOneLine = 144;
      tagsTwoLine = 168;
      tagsThreeLine = 192;
    } else if (
      isDesktopMacbook &&
      isDesktopBig &&
      isDesktopSmall &&
      isTabletHorizontal
    ) {
      tagsOneLine = 172;
      tagsTwoLine = 192;
      tagsThreeLine = 212;
    }

    if (element) {
      const lineHeight = parseFloat(getComputedStyle(element).lineHeight);
      const numLines = element.offsetHeight / lineHeight;

      if (numLines <= 1) {
        return tagsOneLine;
      } else if (numLines === 2) {
        return tagsTwoLine;
      } else {
        return tagsThreeLine;
      }
    }

    return mobile ? tagsThreeLine : tagsOneLine;
  };

  const getDirection = () => (mobile ? "column" : "row");

  const data = [
    {
      number: "01",
      title: "Context #1 - Rules of (any) sport",
      description:
        "Use ROSA to bring the rules of your sport to your fans, referees, athletes, sports commentators, and everyone interested.",
      tags: "#governance #sportsrules #referees #judging #officiating #athletes #education #professionalsport",
      img: "/screens/screen-1.png",
      alt: "Image Context 1",
    },
    {
      number: "02",
      title: "Context #2 - Official Partner content",
      description:
        "Level up the business side of your sport and provide your partners with extra commercial content opportunities.",
      tags: "#businesspartners #partnership #sponsorship #commercialdeal #commercialcontent #sponsored",
      img: "/screens/screen-2.png",
      alt: "Image Context 2",
    },
    {
      number: "03",
      title: "Context #3 - Competitions",
      description:
        "Boost your competitions by delivering competition-specific rules and regulations when and where they’re needed most.",
      tags: "#competitions #championships #tournaments #events #competitionregulation #sportsevents",
      img: "/screens/screen-3.png",
      alt: "Image Context 3",
    },
    {
      number: "04",
      title: "Context #4 - Equipment",
      description:
        "Showcase gear and equipment to let athletes and clubs know what they should use, and fans what they can have.",
      tags: "#sportsgear #sportsequipment #officialapparel #sportskit #officiatinguniforms #refereeapparel",
      img: "/screens/screen-4.png",
      alt: "Image Context 4",
    },
    {
      number: "05",
      title: "Context #5 - Internal Regulations",
      description:
        "Use ROSA to distribute internal regulations for sports organizations working in remote teams - whether it be drafts or final versions.",
      tags: "#regulationsdistribution #internaldocuments #regulation #remoteteams #collaboration",
      img: "/screens/screen-5.png",
      alt: "Image Context 5",
    },
    {
      number: "06",
      title: "Context #6 - Custom Context",
      description:
        "Let us know what context ROSA can serve for your organization to make the updating, management, and distribution of your content quick and seamless.",
      tags: "#documentmanagement #custom #contentdistribution #video #charts #factsheets #lists #Q&A #tables",
      img: "/screens/screen-6.png",
      alt: "Image Context 6",
    },
  ];

  const images = [
    "/screens/screen-1.png",
    "/screens/screen-2.png",
    "/screens/screen-3.png",
    "/screens/screen-4.png",
    "/screens/screen-5.png",
    "/screens/screen-6.png",
  ];

  return (
    <section id="for_what" className={styles.containerSection}>
      <motion.div {...motionContainer} className={styles.containerMotion}>
        <ContentText
          showTextHeaderLight={true}
          showTextHeaderBold={true}
          showTextHeaderLink={false}
          showTextParagraph={true}
          showButtonPrimary={true}
          showButtonSecondary={false}
          textHeaderLight="Context"
          textHeaderLightColor="var(--surface-primary)"
          textHeaderBold="for (any) Sport"
          textHeaderBoldColor="var(--surface-primary)"
          textParagraph={
            <>
              ROSA is a gamechanger in the way you manage, update and distribute
              the rules of your sport, but it can be used for so much more!
              <br />
              Use it for multiple contexts of running your sports business -
              commercial partner content, competition, internal regulation, or
              else. You decide!
            </>
          }
          textParagraphColor="var(--surface-primary)"
          containerFlexDirection="column"
          containerAlignItems="center"
          containerHeaderFlexDirection={getDirection()}
          containerHeaderAlignItems="center"
          textParagraphWidth="100%"
          textParagraphMaxWidth="800px"
          textParagraphAlign="center"
          buttonPrimaryLink="mailto:hello@rosa.zone"
          buttonPrimaryText="What's your context?"
        />
      </motion.div>
      <motion.div {...motionContainer} className={styles.containerContent}>
        <div className={styles.containerImage}>
          <div
            className={styles.containerOrnamentWhite}
            style={radius({ x: 6, y: 6 })}
          ></div>
          <div
            className={styles.containerOrnamentOrange}
            style={radius({ x: 12, y: 12 })}
          ></div>
          <div
            className={styles.containerOrnamentBlue}
            style={radius({ x: 4, y: 4 })}
          ></div>
          <div className={styles.containerMockup}>
            <motion.div
              className={styles.containerMask}
              style={{
                overflowX: "hidden",
                whiteSpace: "nowrap",
                position: "relative",
              }}
            >
              {images.map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`Image Context ${index + 1}`}
                  className={styles.image}
                  style={{
                    position: "absolute",
                    top: "8px",
                    left:
                      desktopBig && !desktopMedium && !desktopSmall && !mobile
                        ? `${index * 306}px`
                        : desktopBig &&
                          desktopMedium &&
                          !desktopSmall &&
                          !mobile
                        ? `${index * 281}px`
                        : desktopBig && desktopMedium && desktopSmall && !mobile
                        ? `${index * 251}px`
                        : mobile
                        ? `${index * 219}px`
                        : `${index * 319}px`,
                    width:
                      desktopBig && !desktopMedium && !desktopSmall && !mobile
                        ? "307px"
                        : desktopBig &&
                          desktopMedium &&
                          !desktopSmall &&
                          !mobile
                        ? "282px"
                        : desktopBig && desktopMedium && desktopSmall && !mobile
                        ? "252px"
                        : mobile
                        ? "220px"
                        : "320px",
                    zIndex: activeIndex === index ? 1 : 0,
                  }}
                  animate={{
                    x:
                      desktopBig && !desktopMedium && !desktopSmall && !mobile
                        ? -(activeIndex * 306)
                        : desktopBig &&
                          desktopMedium &&
                          !desktopSmall &&
                          !mobile
                        ? -(activeIndex * 281)
                        : desktopBig && desktopMedium && desktopSmall && !mobile
                        ? -(activeIndex * 251)
                        : mobile
                        ? -(activeIndex * 219)
                        : -(activeIndex * 319),
                    transition: easeFast,
                  }}
                  initial={{ x: 0 }}
                />
              ))}
            </motion.div>
            <img
              src="/screens/device.png"
              className={styles.containerDevice}
              alt="Device"
            />
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
                height:
                  desktopBig &&
                  !desktopMacbook &&
                  !desktopSmall &&
                  !tabletHorizontal
                    ? index === activeIndex
                      ? calculateHeight(
                          document.getElementById(`tags_${index}`),
                          true,
                          false,
                          false,
                          false
                        ) + "px"
                      : "72px"
                    : desktopBig &&
                      desktopMacbook &&
                      !desktopSmall &&
                      !tabletHorizontal
                    ? index === activeIndex
                      ? calculateHeight(
                          document.getElementById(`tags_${index}`),
                          true,
                          true,
                          false,
                          false
                        ) + "px"
                      : "72px"
                    : desktopBig &&
                      desktopMacbook &&
                      desktopSmall &&
                      !tabletHorizontal
                    ? index === activeIndex
                      ? calculateHeight(
                          document.getElementById(`tags_${index}`),
                          true,
                          true,
                          true,
                          false
                        ) + "px"
                      : "64px"
                    : tabletHorizontal
                    ? index === activeIndex
                      ? calculateHeight(
                          document.getElementById(`tags_${index}`),
                          true,
                          true,
                          true,
                          true
                        ) + "px"
                      : "64px"
                    : index === activeIndex
                    ? "208px"
                    : "80px",
                transition: easeFast,
              }}
              style={getRadius(index)}
            >
              <div className={styles.containerCorner} href="#">
                <p className={styles.textNumber}>{item.number}</p>
              </div>
              <p className={styles.textTitle}>{item.title}</p>
              <div className={styles.containerText}>
                <p className={styles.textParagraph}>{item.description}</p>
                <p
                  id={`tags_${index}`}
                  ref={(el) => {
                    if (el) {
                      const height = calculateHeight(el);
                    }
                  }}
                  className={styles.textTags}
                >
                  {item.tags}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ForWhat;
