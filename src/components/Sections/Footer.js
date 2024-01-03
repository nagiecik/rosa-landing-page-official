import Divider from "../Elements/Divider";
import SectionTextContent from "../Elements/SectionTextContent";
import styles from "./Footer.module.css";
import FooterLinks from "../Elements/FooterLinks";

const FormFooter = () => {
  return (
    <footer className={styles.containerSection}>
      <div className={styles.containerContent}>
        <header className={styles.containerHeader}>
          <SectionTextContent
            firstText="Interested to join us?"
            firstTextColor="var(--surface-primary)"
            firstTextWeight="var(--font-thin)"
            showSecondText={false}
            showLinkText={true}
            linkText="hello@rosa.zone"
            linkTextColorTextColor="var(--surface-primary)"
            linkTextWeight="var(--font-semibold)"
            linkTextURL="mailto:hello.rosa@zone"
          />
          <a href="#start" className={styles.buttonScroll}>
            <img
              className={styles.imageScroll}
              alt="Scroll Up Image"
              src="/icons/scroll-up.svg"
            />
            <img
              className={styles.iconScroll}
              alt=""
              src="/icons/arrow.up.svg"
            />
          </a>
        </header>
        <Divider dividerBorder="1px solid var(--surface-primary)" />
        <div className={styles.containerBottom}>
          <img
            className={styles.imageLogo}
            alt="ROSA Logo"
            src="/imageLogoRosa.svg"
          />
          <div className={styles.containerLinks}>
            <FooterLinks
              textTitle="Menu"
              linkText1="Start"
              linkText2="Testimonials"
              linkText3="Context"
              linkText4="Features"
              linkText5="Use Cases"
              linkText6="Pricing"
              linkURL1="#start"
              linkURL2="#testimonials"
              linkURL3="#context"
              linkURL4="#features"
              linkURL5="#use_cases"
              linkURL6="#pricing"
            />
            <FooterLinks
              textTitle="Support"
              linkText1="Privacy Policy"
              linkText2="Terms & Conditions"
              linkURL1="#start"
              linkURL2="#testimonials"
              showLink3={false}
              showLink4={false}
              showLink5={false}
              showLink6={false}
            />
          </div>
        </div>
        <div className={styles.containerCopyright}>
          <p className={styles.textParagraph}>©2023 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default FormFooter;
