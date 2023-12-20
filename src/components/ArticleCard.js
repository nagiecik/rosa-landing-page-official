import { useMemo } from "react";
import styles from "./ArticleCard.module.css";

const ArticleCard = ({
  dimensionCode,
  dimensionCodeImageUrl,
  propObjectFit,
  propObjectFit1,
  propCursor,
}) => {
  const imageappstoreIconStyle = useMemo(() => {
    return {
      objectFit: propObjectFit,
    };
  }, [propObjectFit]);

  const imagegoogleplayIconStyle = useMemo(() => {
    return {
      objectFit: propObjectFit1,
    };
  }, [propObjectFit1]);

  const textlabelStyle = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  return (
    <article className={styles.containerarticle}>
      <div className={styles.containerdivheader}>
        <h1 className={styles.texth1}>Gamechanger</h1>
        <h1 className={styles.texth11}>In The Way</h1>
        <h1 className={styles.texth1}>You Manage</h1>
      </div>
      <p className={styles.textp}>
        In the realm of sports governance, every organization encounters common
        challenges, irrespective of the specific laws and regulations they
        oversee. These challenges include the constant evolution of rules and
        the imperative to ensure their effective dissemination.
      </p>
      <div className={styles.containerdivstorebuttons}>
        <img
          className={styles.imageappstoreIcon}
          alt=""
          src={dimensionCode}
          style={imageappstoreIconStyle}
        />
        <img
          className={styles.imagegoogleplayIcon}
          alt=""
          src={dimensionCodeImageUrl}
          style={imagegoogleplayIconStyle}
        />
      </div>
      <div className={styles.containerdivrating}>
        <div className={styles.containerdivtext}>
          <label className={styles.textlabel} style={textlabelStyle}>
            Excellent
          </label>
          <b className={styles.textspan}>4.9 out of 5</b>
        </div>
        <div className={styles.containerdivstars}>
          <img
            className={styles.imageiconstar}
            alt=""
            src="/imageiconstar@2x.png"
          />
          <img
            className={styles.imageiconstar}
            alt=""
            src="/imageiconstar@2x.png"
          />
          <img
            className={styles.imageiconstar}
            alt=""
            src="/imageiconstar@2x.png"
          />
          <img
            className={styles.imageiconstar}
            alt=""
            src="/imageiconstar@2x.png"
          />
          <img
            className={styles.imageiconstar}
            alt=""
            src="/imageiconstar@2x.png"
          />
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
