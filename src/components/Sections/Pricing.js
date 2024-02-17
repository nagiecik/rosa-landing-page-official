import { useMemo } from "react";
import ContextText from "../Elements/Contents/ContentText";
import CardPricing from "../Elements/Cards/CardPricing";
import { motion } from "framer-motion";
import { easeFast, getMotionProperties } from "../../utils/motionUtils";
import useMediaQuery from "../../utils/useMediaQuery"
import styles from "./Pricing.module.css";

const Pricing = ({ sectionZIndex }) => {
  const containerPricingStyle = useMemo(() => {
    return {
      zIndex: sectionZIndex,
    };
  }, [sectionZIndex]);

  const motionContainer = getMotionProperties("0, 160px", "0, 0", easeFast);
  
  const mobile = useMediaQuery("(max-width: 430px)");
  const getWidth = () => (mobile ? "100%" : "72%");

  return (
    <section
      id="pricing"
      className={styles.containerSection}
      style={containerPricingStyle}
    >
      <motion.div {...motionContainer} className={styles.containerMotion}>
        <ContextText
          sectionWidth="100%"
          showTextHeaderLight={true}
          textHeaderLight="Choose"
          textHeaderLightColor="var(--surface-secondary)"
          textHeaderLightWeight="var(--font-thin)"
          showTextHeaderBold={true}
          textHeaderBold="Your Plan"
          textHeaderBoldColor="var(--surface-secondary)"
          textHeaderBoldWeight="var(--font-bold)"
          showTextParagraph={true}
          textParagraph="ROSA provides the tools to streamline rule management, create engaging content, and organize diverse sporting events with precision. Choose a plan that matches your organization's needs and make a lasting impression with a branded home screen, craft informative content effortlessly, and manage events seamlessly."
          textParagraphColor="var(--surface-secondary)"
          containerFlexDirection="column"
          containerAlignItems="flex-start"
          containerJustifyContent="flex-start"
          containerHeaderFlexDirection="row"
          textParagraphWidth={getWidth()}
          textParagraphMaxWidth="1520px"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, transform: `translate(0, 160px)` }}
        whileInView={{ opacity: 1, transform: `translate(0, 0)` }}
        transition={easeFast}
        viewport={{ once: true }}
        className={styles.containerContent}
      >
        <CardPricing
          cardPricingBackgroundColor="var(--surface-primary)"
          textCardTitle="National"
          textColor="var(--surface-secondary)"
          textColorAccent="var(--on-surface-accent-active)"
          textCardTitleDescription="For national sports associations in 2024, 40% off on target fee of €999/ mo, with new features still under development."
          textCardDescriptionColor="var(--on-surface-accent-inactive)"
          textCardPrice="€398"
          textCardPriceColor="var(--on-surface-accent-active)"
          dividerBorder="1px solid var(--on-surface-accent-disabled-dark)"
          dividerWidth="100%"
          textCardFeatures="Key Features"
          textBullet1="Primary context (rules/regulations of your sport)"
          textBullet2="Q&As for your rules/regulations"
          textBullet3="Custom branding"
          textBullet4="User-friendly browsing and search"
          textBullet5="Bookmarking (adding to favourites, note-taking)"
          textBulletNumberLeft1="Content/data limits"
          textBulletNumberRight1="5GB"
          textCardServices="Additional Services"
          textBulletNumberLeft2="Content entering (every 100 pages)"
          textBulletNumberRight2="€350"
          textBulletNumberLeft3="Onboarding fee"
          textBulletNumberRight3="€980"
          showButtonPrimary={false}
          buttonSecondaryText="I choose National"
          showbuttonSecondary={true}
          buttonWidth="100%"
          buttonSecondaryLink="https://outlook.office365.com/owa/calendar/RulesofSportsAppROSAteam@mamf.pl/bookings/"
          cardZIndex="2"
        />
        <CardPricing
          cardPricingBackgroundColor="var(--surface-secondary)"
          textCardTitle="International"
          textColor="var(--surface-primary)"
          textColorAccent="var(--on-surface-accent-active)"
          textCardTitleDescription="For international sports organisations in 2024, 40% off on target fee of €1999/ mo, with new features still under development."
          textCardDescriptionColor="var(--on-surface-accent-disabled-dark)"
          textCardPrice="€798"
          textCardPriceColor="var(--on-surface-accent-active)"
          dividerBorder="1px solid var(--on-surface-accent-disabled-dark)"
          dividerWidth="100%"
          textCardFeatures="Everything in National, plus"
          textBullet1="User data collection"
          textBullet2="Initial content entering (up to 300 pages)"
          textBullet3="Multi-language mobile app"
          textBullet4="Starter-pack promo materials"
          textBullet5="Dedicated customer service for admins"
          textBulletNumberLeft1="Content/data limits"
          textBulletNumberRight1="15GB"
          textCardServices="Additional Services"
          textBulletNumberLeft2="Content entering (every 100 pages)"
          textBulletNumberRight2="€350"
          textBulletNumberLeft3="Onboarding fee"
          textBulletNumberRight3="€1500"
          showButtonPrimary={true}
          showbuttonSecondary={false}
          buttonPrimaryText="I choose International"
          buttonWidth="100%"
          buttonPrimaryLink="https://outlook.office365.com/owa/calendar/RulesofSportsAppROSAteam@mamf.pl/bookings/"
          cardZIndex="1"
        />
      </motion.div>
    </section>
  );
};

export default Pricing;
