import { useMemo } from "react";
import Divider from "../Other/Divider";
import BulletCheckmark from "../Bullets/BulletCheckmark";
import BulletNumber from "../Bullets/BulletNumber";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import ButtonSecondary from "../Buttons/ButtonSecondary";
import styles from "./CardPricing.module.css";

const CardPricing = ({
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
  showButtonPrimary,
  buttonPrimaryText,
  showbuttonSecondary,
  buttonSecondaryText,
  buttonWidth,
  buttonDisplayMode,
  buttonLink,
  cardZIndex,
}) => {
  const cardPricingStyle = {
    backgroundColor: cardPricingBackgroundColor,
    zIndex: cardZIndex,
  };

  const textColorStyle = {
    color: textColor,
  };

  const textDescriptionStyle = {
    color: textCardDescriptionColor,
  };

  const textPriceStyle = {
    color: textCardPriceColor,
  };

  return (
    <div className={styles.containerCard} style={cardPricingStyle}>
      <div className={styles.containerHeader}>
        <h4 className={styles.textTitle} style={textColorStyle}>
          {textCardTitle}
        </h4>
        <p className={styles.textDescription} style={textDescriptionStyle}>
          {textCardTitleDescription}
        </p>
        <div className={styles.containerPrice}>
          <h4 className={styles.textPrice} style={textPriceStyle}>
            {textCardPrice}
          </h4>
          <div>
            <h6 className={styles.textTime} style={textColorStyle}>
              / mo
            </h6>
          </div>
        </div>
      </div>
      {showButtonPrimary && (
        <ButtonPrimary
          showButtonText={true}
          buttonText={buttonPrimaryText}
          buttonWidth={buttonWidth}
          buttonDisplayMode={buttonDisplayMode}
          buttonLink={buttonLink}
        />
      )}
      {showbuttonSecondary && (
        <ButtonSecondary
          showButtonText={true}
          buttonText={buttonSecondaryText}
          buttonWidth={buttonWidth}
          buttonDisplayMode={buttonDisplayMode}
          buttonLink={buttonLink}
        />
      )}
      <Divider dividerBorder={dividerBorder} width={dividerWidth} />
      <div className={styles.containerFeatures}>
        <p className={styles.textSubtitle} style={textDescriptionStyle}>
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
        <p className={styles.textSubtitle} style={textDescriptionStyle}>
          {textCardServices}
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
    </div>
  );
};

export default CardPricing;
