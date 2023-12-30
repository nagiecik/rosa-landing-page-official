import SectionHero from "../components/Sections/Hero";
import SectionTestimonial from "../components/Sections/Testimonials";
import SectionContexts from "../components/Sections/Contexts";
import SectionFeatures from "../components/Sections/Features";
import SectionFeatureLeft from "../components/FeatureLeft";
import SectionFeatureRight from "../components/FeatureRight";
import SectionPricing from "../components/Pricing";
import SectionSummary from "../components/Summary";
import SectionFooter from "../components/FormFooter";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <SectionHero sectionZIndex="10" />
      <SectionTestimonial sectionZIndex="9" />
      <SectionContexts sectionZIndex="8" />
      <SectionFeatures sectionZIndex="7" />
      <SectionFeatureLeft
        sectionZIndex="6"
        firstText="Official"
        firstTextColor="var(--surface-secondary)"
        firstTextWeight="var(--font-thin)"
        secondText="Partners"
        secondTextColor="var(--surface-secondary)"
        secondTextWeight="var(--font-bold)"
        textParagraph="Elevate your organization's presence and create mutually beneficial partnerships with the Official Partners feature. ROSA provides dedicated spaces for sponsors and partners to showcase their brand through images, banners, and videos, allowing you to monetize your app and deliver value to your supporters. Attract potential sponsors and enhance your app's visual appeal with this powerful feature."
        imageMockupURL="/featureMockup-1.png"
        sectionWidth="100%"
      />
      <SectionFeatureRight
        sectionZIndex="5"
        firstText="Documents"
        firstTextColor="var(--surface-secondary)"
        firstTextWeight="var(--font-thin)"
        secondText="Selection"
        secondTextColor="var(--surface-secondary)"
        secondTextWeight="var(--font-bold)"
        textParagraph="Streamline access to crucial resources with the Documents Selection feature. Organize and display a wide range of file types, from PDFs to documents, within dedicated sections of your app. Whether it's competition rules, equipment specifications, or instructional materials, ROSA empowers your organization to provide a comprehensive library of documents, making it easy for users to find and download the information they need, enhancing their engagement and knowledge."
        imageMockupURL="/featureMockup-2.png"
        sectionWidth="100%"
      />
      <SectionFeatureLeft
        sectionZIndex="4"
        firstText="Manage"
        firstTextColor="var(--surface-secondary)"
        firstTextWeight="var(--font-thin)"
        secondText="Competitions"
        secondTextColor="var(--surface-secondary)"
        secondTextWeight="var(--font-bold)"
        textParagraph="Elevate your organization's presence and create mutually beneficial partnerships with the Official Partners feature. ROSA provides dedicated spaces for sponsors and partners to showcase their brand through images, banners, and videos, allowing you to monetize your app and deliver value to your supporters. Attract potential sponsors and enhance your app's visual appeal with this powerful feature."
        imageMockupURL="/featureMockup-3.png"
        sectionWidth="100%"
      />
      <SectionFeatureRight
        sectionZIndex="3"
        firstText="Featured"
        firstTextColor="var(--surface-secondary)"
        firstTextWeight="var(--font-thin)"
        secondText="Resources"
        secondTextColor="var(--surface-secondary)"
        secondTextWeight="var(--font-bold)"
        textParagraph="Effortlessly orchestrate diverse competitions within your sporting organization using the Manage Competitions feature. ROSA offers a versatile platform that allows you to create and customize competitions with distinct rules, ensuring precision and alignment with the specific needs of each event. Whether it's men's and women's competitions or various sporting disciplines, ROSA empowers you to manage them all seamlessly, enhancing the efficiency and accuracy of your organization's operations."
        imageMockupURL="/featureMockup-4.png"
        sectionWidth="100%"
      />
      <SectionPricing />
      <SectionSummary
        buttonAppStore="/buttonAppStore.svg"
        buttonGooglePlay="/buttonGooglePlay.svg"
      />
      <SectionFooter />
    </div>
  );
};

export default Main;
