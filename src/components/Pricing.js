import SectionTextContent from "./Elements/SectionTextContent";
import CardPricing from "./CardPricing";
import styles from "./Pricing.module.css";

const Pricing = () => {
  return (
    <section className={styles.containersectionpricing}>
      <SectionTextContent
        firstText="Choose Your"
        firstTextColor="var(--surface-secondary)"
        firstTextWeight="var(--font-thin)"
        secondText="Plan"
        secondTextColor="var(--surface-secondary)"
        secondTextWeight="var(--font-bold)"
        textParagraph="ROSA provides the tools to streamline rule management, create engaging content, and organize diverse sporting events with precision. Choose a plan that matches your organization's needs and make a lasting impression with a branded home screen, craft informative content effortlessly, and manage events seamlessly."
        textParagraphColor="var(--surface-secondary)"
      />
      <div className={styles.containerdivcontent}>
        <CardPricing
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
          textBulletNumberRight1="15GB"
          textCardServices="Additional Services"
          textBulletNumberLeft2="Content entering (every 100 pages)"
          textBulletNumberRight2="€350"
          textBulletNumberLeft3="Onboarding fee"
          textBulletNumberRight3="€980"
        />
        <CardPricing />
      </div>
    </section>
  );
};

export default Pricing;
