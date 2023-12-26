import { useMemo } from "react";
import Divider from "./Divider";
import BulletCheckmark from "./BulletCheckmark";
import BulletNumber from "./BulletNumber";
import Button from "./ButtonPrimary";
import styles from "./CardPricing.module.css";

const PricingCard = ({
  textCardTitle,
  textCardTitleDescription,
  textCardPrice,
  textCardPriceColor,
  textColor,
  textCardFeatures,
  textCardServices,
  cardPricingBackgroundColor,
  textCardDescriptionColor,
  dividerBorder,
  dividerWidth,
  textBullet1,
  textBullet2,
  textBullet3,
  textBullet4,
  textBullet5,
  textBulletNumberLeft1,
  textBulletNumberRight1,
  textBulletNumberLeft2,
  textBulletNumberRight2,
  textBulletNumberLeft3,
  textBulletNumberRight3,
  textColorAccent,
  buttonWidth,
  buttonText,
  buttonTextColor,
  buttonBackground,
}) => {
  const cardPricingStyle = useMemo(() => {
    return {
      backgroundColor: cardPricingBackgroundColor,
    };
  }, [cardPricingBackgroundColor]);

  const textColorStyle = useMemo(() => {
    return {
      color: textColor,
    };
  }, [textColor]);

  const textDescriptionStyle = useMemo(() => {
    return {
      color: textCardDescriptionColor,
    };
  }, [textCardDescriptionColor]);

  const textPriceStyle = useMemo(() => {
    return {
      color: textCardPriceColor,
    };
  }, [textCardPriceColor]);

  return (
    <div className={styles.containerCard} style={cardPricingStyle}>
      <div className={styles.containerHeader}>
        <h4 style={textColorStyle}>{textCardTitle}</h4>
        <p
          className={styles.textCardTitleDescription}
          style={textDescriptionStyle}
        >
          {textCardTitleDescription}
        </p>
        <h4 className={styles.textCardPrice} style={textPriceStyle}>
          {textCardPrice}
        </h4>
        <h6 className={styles.textCardTime} style={textColorStyle}>
          per month
        </h6>
      </div>
      <Divider dividerBorder={dividerBorder} width={dividerWidth} />
      <div className={styles.containerFeatures}>
        <p
          className={styles.textCardTitleDescription}
          style={textDescriptionStyle}
        >
          {textCardFeatures}
        </p>
        <BulletCheckmark
          imageIconURL="/icons/checkmark.svg"
          textBullet={textBullet1}
          textBulletColor={textColor}
        />
        <BulletCheckmark
          imageIconURL="/icons/checkmark.svg"
          textBullet={textBullet2}
          textBulletColor={textColor}
        />
        <BulletCheckmark
          imageIconURL="/icons/checkmark.svg"
          textBullet={textBullet3}
          textBulletColor={textColor}
        />
        <BulletCheckmark
          imageIconURL="/icons/checkmark.svg"
          textBullet={textBullet4}
          textBulletColor={textColor}
        />
        <BulletCheckmark
          imageIconURL="/icons/checkmark.svg"
          textBullet={textBullet5}
          textBulletColor={textColor}
        />
      </div>
      <Divider dividerBorder={dividerBorder} width={dividerWidth} />
      <BulletNumber
        textBullet={textBulletNumberLeft1}
        textNumber={textBulletNumberRight1}
        textBulletColor={textColor}
        textNumberColor={textColorAccent}
      />
      <Divider dividerBorder={dividerBorder} width={dividerWidth} />
      <div className={styles.containerServices}>
        <p
          className={styles.textCardTitleDescription}
          style={textDescriptionStyle}
        >
          Additional services
        </p>
        <BulletNumber
          textBullet={textBulletNumberLeft2}
          textNumber={textBulletNumberRight2}
          textBulletColor={textColor}
          textNumberColor={textColorAccent}
        />
        <BulletNumber
          textBullet={textBulletNumberLeft3}
          textNumber={textBulletNumberRight3}
          textBulletColor={textColor}
          textNumberColor={textColorAccent}
        />
      </div>
      <Button />
    </div>
  );
};

export default PricingCard;
