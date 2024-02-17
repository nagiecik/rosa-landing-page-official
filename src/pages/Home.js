import Nav from "../components/Elements/Navigation/Nav";
import SectionStartHere from "../components/Sections/StartHere";
import SectionForWhom from "../components/Sections/ForWhom";
import SectionForWhat from "../components/Sections/ForWhat";
import SectionShowcase from "../components/Sections/Showcase";
import SectionFeatures from "../components/Sections/Features";
import SectionPricing from "../components/Sections/Pricing";
import SectionFooter from "../components/Sections/Footer";
import useMediaQuery from "../utils/useMediaQuery";
import styles from "./Home.module.css";

const Home = () => {
  const tablet = useMediaQuery("(max-width: 1024px)");
  const desktopBig = useMediaQuery("(max-width: 1536px)");
  const desktopSmall = useMediaQuery("(max-width: 1280px)");
  const mobile = useMediaQuery("(max-width: 430px)");

  const sectionsData = [
    {
      component: SectionStartHere,
      zIndex: "7",
    },
    {
      component: SectionForWhom,
      zIndex: "6",
    },
    {
      component: SectionForWhat,
      zIndex: "5",
    },
    {
      component: SectionShowcase,
      sectionID: "showcases",
      showContentText: true,
      showArticleSummary: false,
      showArticleTestimonial: true,
      zIndex: "4",
      imageLeftAltText: "Showcase Mockup 1",
      imageLeftURL: "./mockups/showcaseMockup-1.png",
      imageRightAltText: "Showcase Mockup 2",
      imageRightURL: "./mockups/showcaseMockup-2.png",
      buttonAppStore: "/buttonAppStore.svg",
      buttonGooglePlay: "/buttonGooglePlay.svg",
      buttonGooglePlayLink:
        "https://play.google.com/store/apps/details?id=pl.mamf.rosa.example&hl=pl&gl=US",
      buttonAppStoreLink:
        "https://apps.apple.com/pl/app/rosa-rules-of-sports-app/id1622562179",
      containerPaddingBottom: mobile
        ? "var(--size-24)"
        : desktopBig
        ? "var(--size-48)"
        : "var(--size-64)",
    },
    {
      component: SectionFeatures,
      zIndex: "3",
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
      buttonGooglePlayLink:
        "https://play.google.com/store/apps/details?id=pl.mamf.rosa.example&hl=pl&gl=US",
      buttonAppStoreLink:
        "https://apps.apple.com/pl/app/rosa-rules-of-sports-app/id1622562179",
      containerPaddingBottom: mobile
        ? "var(--size-176)"
        : desktopSmall
        ? "var(--size-216)"
        : "var(--size-256)",
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
      ? "var(--size-80)"
      : desktopSmall
      ? "var(--size-0)"
      : "var(--size-80)";

  return (
    <div className={styles.home}>
      <Nav alt="ROSA logo" sectionZIndex="1001" />
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
