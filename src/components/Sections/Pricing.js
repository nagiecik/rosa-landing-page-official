import { useMemo } from "react";
import ContentTextContent from "../Elements/Contents/ContentTextContent";
import CardPricing from "../Elements/Cards/CardPricing";
import styles from "./Pricing.module.css";

const Pricing = ({ sectionZIndex }) => {
  const containerPricingStyle = useMemo(() => {
    return {
      zIndex: sectionZIndex,
    };
  }, [sectionZIndex]);
  return (
    <section
      id="pricing"
      className={styles.containerSection}
      style={containerPricingStyle}
    >
      <ContentTextContent
        sectionWidth="100%"
        firstText="Choose Your"
        firstTextColor="var(--surface-secondary)"
        firstTextWeight="var(--font-thin)"
        secondText="Plan"
        secondTextColor="var(--surface-secondary)"
        secondTextWeight="var(--font-bold)"
        textParagraph="ROSA provides the tools to streamline rule management, create engaging content, and organize diverse sporting events with precision. Choose a plan that matches your organization's needs and make a lasting impression with a branded home screen, craft informative content effortlessly, and manage events seamlessly."
        textParagraphColor="var(--surface-secondary)"
      />
      <div className={styles.containerContent}>
        <CardPricing
          cardPricingBackgroundColor="var(--surface-primary)"
          textCardTitle="National"
          textColor="var(--surface-secondary)"
          textColorAccent="var(--on-surface-accent-active)"
          textCardTitleDescription="For national sports associations in 2023, 40% off on target fee of €999/ mo from 2024, with new features still under development"
          textCardDescriptionColor="var(--on-surface-accent-inactive)"
          textCardPrice="€398"
          textCardPriceColor="var(--on-surface-accent-active)"
          dividerBorder="1px solid var(--on-surface-accent-disabled-light)"
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
          buttonPrimaryText="Choose National"
          showbuttonSecondary={true}
          buttonSecondaryText="Choose National"
          buttonWidth="100%"
          buttonDisplayMode="block"
          buttonLink="mailto:hello@rosa.zone?subject=ROSA National"
        />
        <CardPricing
          cardPricingBackgroundColor="var(--surface-secondary)"
          textCardTitle="International"
          textColor="var(--surface-primary)"
          textColorAccent="var(--on-surface-accent-active)"
          textCardTitleDescription="For international sports organisations in 2023, 40% off on target fee of €1999/ mo from 2024, with new features still under development"
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
          buttonPrimaryText="Choose International"
          showbuttonSecondary={false}
          buttonSecondaryText="Choose National"
          buttonWidth="100%"
          buttonDisplayMode="block"
          buttonLink="mailto:hello@rosa.zone?subject=ROSA International"
        />
      </div>
    </section>
  );
};

export default Pricing;
