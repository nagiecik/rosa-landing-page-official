import Navbar from "./Navbar";
import ArticleCard from "./ArticleCard";
import styles from "./SectionHero.module.css";

const SectionHero = () => {
  return (
    <section className={styles.containersectionhero}>
      <div className={styles.containerdiv}>
        <Navbar showContainerDivLinks showButtonMenu={false} showButtonCta />
        <div className={styles.containerdiv1}>
          <ArticleCard
            dimensionCode="/imageappstore@2x.png"
            dimensionCodeImageUrl="/imagegoogleplay@2x.png"
            propObjectFit="cover"
            propObjectFit1="cover"
            propCursor="pointer"
          />
          <img
            className={styles.imageheroIcon}
            alt=""
            src="/imagehero@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
