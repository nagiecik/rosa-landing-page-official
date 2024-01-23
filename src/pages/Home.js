import Nav from "../components/Elements/Navigation/Nav";
import SectionHero from "../components/Sections/Hero";
import SectionShowcase from "../components/Sections/Showcase";
import SectionContexts from "../components/Sections/Contexts";
import SectionFeatures from "../components/Sections/Features";
import SectionFeatureLeft from "../components/Sections/FeatureLeft";
import SectionFeatureRight from "../components/Sections/FeatureRight";
import SectionPricing from "../components/Sections/Pricing";
import SectionFooter from "../components/Sections/Footer";
import useMediaQuery from "../utils/useMediaQuery";
import { motion } from "framer-motion";
import styles from "./Home.module.css";
import { easeFast, easeSlow } from "../utils/motionUtils";

const Home = () => {
  const tablet = useMediaQuery("(max-width: 769px)");

  const sectionsData = [
    {
      component: SectionHero,
      zIndex: "10",
    },
    {
      component: SectionShowcase,
      sectionID: "testimonials",
      showContentText: true,
      showArticleSummary: false,
      showArticleTestimonial: true,
      zIndex: "9",
      imageLeftAltText: "",
      imageLeftURL: "./mockups/showcaseMockup-1.png",
      imageRightAltText: "",
      imageRightURL: "./mockups/showcaseMockup-2.png",
    },
    {
      component: SectionContexts,
      zIndex: "8",
    },
    {
      component: SectionFeatures,
      zIndex: "7",
    },
    {
      component: SectionFeatureLeft,
      zIndex: "6",
      showTextHeaderLight: true,
      textHeaderLight: "Official",
      textHeaderLightColor: "var(--surface-secondary)",
      textHeaderLightWeight: "var(--font-thin)",
      showTextHeaderBold: true,
      textHeaderBold: "Partners",
      textHeaderBoldColor: "var(--surface-secondary)",
      textHeaderBoldWeight: "var(--font-bold)",
      textParagraph:
        "Elevate your organization's presence and create mutually beneficial partnerships with the Official Partners feature. ROSA provides dedicated spaces for sponsors and partners to showcase their brand through images, banners, and videos, allowing you to monetize your app and deliver value to your supporters. Attract potential sponsors and enhance your app's visual appeal with this powerful feature.",
      imageMockupURL: "./mockups/useCasesMockup-1.png",
      sectionWidth: "100%",
    },
    {
      component: SectionFeatureRight,
      zIndex: "7",
      showTextHeaderLight: true,
      textHeaderLight: "Documents",
      textHeaderLightColor: "var(--surface-secondary)",
      textHeaderLightWeight: "var(--font-thin)",
      showTextHeaderBold: true,
      textHeaderBold: "Selection",
      textHeaderBoldColor: "var(--surface-secondary)",
      textHeaderBoldWeight: "var(--font-bold)",
      textParagraph:
        "Streamline access to crucial resources with the Documents Selection feature. Organize and display a wide range of file types, from PDFs to documents, within dedicated sections of your app. Whether it's competition rules, equipment specifications, or instructional materials, ROSA empowers your organization to provide a comprehensive library of documents, making it easy for users to find and download the information they need, enhancing their engagement and knowledge.",
      imageMockupURL: "./mockups/useCasesMockup-2.png",
      sectionWidth: "100%",
    },
    {
      component: SectionFeatureLeft,
      zIndex: "8",
      showTextHeaderLight: true,
      textHeaderLight: "Manage",
      textHeaderLightColor: "var(--surface-secondary)",
      textHeaderLightWeight: "var(--font-thin)",
      showTextHeaderBold: true,
      textHeaderBold: "Competitions",
      textHeaderBoldColor: "var(--surface-secondary)",
      textHeaderBoldWeight: "var(--font-bold)",
      textParagraph:
        "Elevate your organization's presence and create mutually beneficial partnerships with the Official Partners feature. ROSA provides dedicated spaces for sponsors and partners to showcase their brand through images, banners, and videos, allowing you to monetize your app and deliver value to your supporters. Attract potential sponsors and enhance your app's visual appeal with this powerful feature.",
      imageMockupURL: "./mockups/useCasesMockup-3.png",
      sectionWidth: "100%",
    },
    {
      component: SectionFeatureRight,
      zIndex: "9",
      showTextHeaderLight: true,
      textHeaderLight: "Featured",
      textHeaderLightColor: "var(--surface-secondary)",
      textHeaderLightWeight: "var(--font-thin)",
      showTextHeaderBold: true,
      textHeaderBold: "Resources",
      textHeaderBoldColor: "var(--surface-secondary)",
      textHeaderBoldWeight: "var(--font-bold)",
      textParagraph:
        "Effortlessly orchestrate diverse competitions within your sporting organization using the Manage Competitions feature. ROSA offers a versatile platform that allows you to create and customize competitions with distinct rules, ensuring precision and alignment with the specific needs of each event. Whether it's men's and women's competitions or various sporting disciplines, ROSA empowers you to manage them all seamlessly, enhancing the efficiency and accuracy of your organization's operations.",
      imageMockupURL: "./mockups/useCasesMockup-4.png",
      sectionWidth: "100%",
    },
    {
      component: SectionPricing,
      zIndex: "2",
    },
    {
      component: SectionShowcase,
      sectionID: "summary",
      showContentText: false,
      showArticle: true,
      showArticleTestimonial: false,
      sectionZIndex: "3",
      buttonAppStore: "/buttonAppStore.svg",
      buttonGooglePlay: "/buttonGooglePlay.svg",
      containerBackgroundImage: "url(/backgrounds/backgroundSummary.png)",
      imageLeftAltText: "",
      imageLeftURL: "./mockups/showcaseMockup-3.png",
      imageRightAltText: "",
      imageRightURL: "./mockups/showcaseMockup-4.png",
    },
    {
      component: SectionFooter,
    },
  ];

  const showcaseMarginTop =
    tablet &&
    sectionsData.some(
      (section) =>
        section.component === SectionShowcase && section.sectionID === "summary"
    )
      ? "var(--size-0)"
      : "var(--size-80)";

  return (
    <div className={styles.home}>
      <Nav logoURL="/imageLogoRosa.svg" alt="ROSA logo" sectionZIndex="1000" />

      {sectionsData.map((section, index) => {
        if (
          section.component === SectionShowcase &&
          section.sectionID === "summary"
        ) {
          return (
            <SectionShowcase
              key={index}
              {...section}
              sectionMarginTop={showcaseMarginTop}
            />
          );
        }
        const Component = section.component;
        return <Component key={index} {...section} />;
      })}
    </div>
  );
};

export default Home;
