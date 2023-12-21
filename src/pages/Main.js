import SectionHero from "../components/Sections/Hero";
import SectionTestimonial from "../components/Sections/Testimonials";
import SectionSlider from "../components/Sections/Contexts";
import ContainerCard from "../components/Sections/Features";
import Containersectionfeature1 from "../components/Containersectionfeature1";
import Containersectionfeature2 from "../components/Containersectionfeature2";
import ChooseYourContainer from "../components/ChooseYourContainer";
import SportContainer from "../components/SportContainer";
import FormFooter from "../components/FormFooter";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <SectionHero sectionZIndex="10" />
      <SectionTestimonial sectionZIndex="9" />
      <SectionSlider sectionZIndex="8"/>
      <ContainerCard />
      <Containersectionfeature1
        texth1light="Official"
        texth1bold="Partners"
        textp="Elevate your organization's presence and create mutually beneficial partnerships with the Official Partners feature. ROSA provides dedicated spaces for sponsors and partners to showcase their brand through images, banners, and videos, allowing you to monetize your app and deliver value to your supporters. Attract potential sponsors and enhance your app's visual appeal with this powerful feature."
        imagemockup="/imagemockup@2x.png"
        containersectionfeature1BoxSizing="border-box"
        containersectionfeature1ZIndex="6"
        texth1lightMargin="0"
        texth1boldMargin="0"
        textpMargin="0"
      />
      <Containersectionfeature2
        imagemockup="/imagemockup31@2x.png"
        texth1light="Documents"
        texth1bold="Selection"
        containersectionfeature2BoxSizing="border-box"
        containersectionfeature2ZIndex="5"
        texth1lightMargin="0"
        texth1boldMargin="0"
        textpMargin="0"
      />
      <Containersectionfeature1
        texth1light="Manage"
        texth1bold="Competitions"
        textp="Effortlessly orchestrate diverse competitions within your sporting organization using the Manage Competitions feature. ROSA offers a versatile platform that allows you to create and customize competitions with distinct rules, ensuring precision and alignment with the specific needs of each event. Whether it's men's and women's competitions or various sporting disciplines, ROSA empowers you to manage them all seamlessly, enhancing the efficiency and accuracy of your organization's operations."
        imagemockup="/imagemockup41@2x.png"
        containersectionfeature1BoxSizing="border-box"
        containersectionfeature1ZIndex="4"
        texth1lightMargin="0"
        texth1boldMargin="0"
        textpMargin="0"
      />
      <Containersectionfeature2
        imagemockup="/imagemockup51@2x.png"
        texth1light="Featured"
        texth1bold="Resources"
        containersectionfeature2BoxSizing="border-box"
        containersectionfeature2ZIndex="3"
        texth1lightMargin="0"
        texth1boldMargin="0"
        textpMargin="0"
      />
      <ChooseYourContainer />
      <SportContainer />
      <FormFooter />
    </div>
  );
};

export default Main;
