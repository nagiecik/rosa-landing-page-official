import { useMemo } from "react";
import ImagedividerIcon from "./ImagedividerIcon";
import ContainerdivfeatureListEle1 from "./ContainerdivfeatureListEle1";
import ContainerdivfeatureListEle from "./ContainerdivfeatureListEle";
import Button from "./Button";
import styles from "./PricingCard.module.css";

const PricingCard = ({
  membershipType,
  discountDetails,
  price,
  imageDimensions,
  additionalFeatures,
  contextDescription,
  contentDescription,
  appDescription,
  promoMaterials,
  adminCustomerService,
  imageDescription,
  dataPlanSize,
  imageDescription2,
  priceEuro,
  description,
  subscriptionType,
  descriptionText,
  propBackgroundColor,
  propZIndex,
  propColor,
  propColor1,
  propColor2,
  propColor3,
  texth4Color,
  texth4Color1,
  texth4Color2,
  texth4Color3,
  texth4Color4,
  containerdivheaderColor,
  propColor4,
  containerdivheaderColor1,
  containerdivheaderColor2,
  containerdivpricingBorder,
  containerdivpricingBackgroundColor,
  texth4FontWeight,
}) => {
  const containerdivpricingStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      zIndex: propZIndex,
    };
  }, [propBackgroundColor, propZIndex]);

  const texth41Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const textsmallStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const texth51Style = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const textsmall1Style = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const textspanStyle = useMemo(() => {
    return {
      color: texth4Color,
    };
  }, [texth4Color]);

  const textspanStyle1 = useMemo(() => {
    return {
      color: texth4Color1,
    };
  }, [texth4Color1]);

  const textspanStyle2 = useMemo(() => {
    return {
      color: texth4Color2,
    };
  }, [texth4Color2]);

  const textspanStyle3 = useMemo(() => {
    return {
      color: texth4Color3,
    };
  }, [texth4Color3]);

  const textspanStyle4 = useMemo(() => {
    return {
      color: texth4Color4,
    };
  }, [texth4Color4]);

  const textspan1Style = useMemo(() => {
    return {
      color: containerdivheaderColor,
    };
  }, [containerdivheaderColor]);

  const textsmall2Style = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  const textspan1Style1 = useMemo(() => {
    return {
      color: containerdivheaderColor1,
    };
  }, [containerdivheaderColor1]);

  const textspan1Style2 = useMemo(() => {
    return {
      color: containerdivheaderColor2,
    };
  }, [containerdivheaderColor2]);

  const typeFillStateEnabledSizeStyle = useMemo(() => {
    return {
      border: containerdivpricingBorder,
      backgroundColor: containerdivpricingBackgroundColor,
    };
  }, [containerdivpricingBorder, containerdivpricingBackgroundColor]);

  const textstrongStyle = useMemo(() => {
    return {
      fontWeight: texth4FontWeight,
    };
  }, [texth4FontWeight]);

  return (
    <div
      className={styles.containerdivpricing}
      style={containerdivpricingStyle}
    >
      <div className={styles.containerdivheader}>
        <h4 className={styles.texth4} style={texth41Style}>
          {membershipType}
        </h4>
        <div className={styles.containerdivfeatureListEle}>
          <small className={styles.textsmall} style={textsmallStyle}>
            {discountDetails}
          </small>
        </div>
        <div className={styles.containerdivprice}>
          <h1 className={styles.texth1}>{price}</h1>
          <h5 className={styles.texth5} style={texth51Style}>
            per month
          </h5>
        </div>
      </div>
      <ImagedividerIcon
        imageDimensions="/imagedivider11@2x.png"
        propAlignSelf="unset"
        propMaxWidth="unset"
        propOverflow="unset"
        propWidth="658px"
      />
      <div className={styles.containerdivfeatures}>
        <div className={styles.containerdivfeatureListEle1}>
          <small className={styles.textsmall} style={textsmall1Style}>
            {additionalFeatures}
          </small>
        </div>
        <ContainerdivfeatureListEle1
          imageiconCheck="/imageiconcheck@2x.png"
          textspan="User data collection"
          imageiconCheckObjectFit="cover"
          textspanColor="#fff"
        />
        <ContainerdivfeatureListEle1
          imageiconCheck="/imageiconcheck@2x.png"
          textspan="Initial content entering (up to 300 pages)"
          imageiconCheckObjectFit="cover"
          textspanColor="#fff"
        />
        <ContainerdivfeatureListEle1
          imageiconCheck="/imageiconcheck@2x.png"
          textspan="Multi-language mobile app"
          imageiconCheckObjectFit="cover"
          textspanColor="#fff"
        />
        <ContainerdivfeatureListEle1
          imageiconCheck="/imageiconcheck@2x.png"
          textspan="Starter-pack promo materials"
          imageiconCheckObjectFit="cover"
          textspanColor="#fff"
        />
        <ContainerdivfeatureListEle1
          imageiconCheck="/imageiconcheck@2x.png"
          textspan="Dedicated customer service for admins"
          imageiconCheckObjectFit="cover"
          textspanColor="#fff"
        />
      </div>
      <ImagedividerIcon
        imageDimensions="/imagedivider11@2x.png"
        propAlignSelf="unset"
        propMaxWidth="unset"
        propOverflow="unset"
        propWidth="658px"
      />
      <ContainerdivfeatureListEle
        textspan="Content/data limits"
        texth4="15GB"
        textspanColor="#fff"
        texth4Margin="0"
        texth4FontWeight="700"
      />
      <ImagedividerIcon
        imageDimensions="/imagedivider11@2x.png"
        propAlignSelf="unset"
        propMaxWidth="unset"
        propOverflow="unset"
        propWidth="658px"
      />
      <div className={styles.containerdivnumbers}>
        <div className={styles.containerdivfeatureListEle1}>
          <small className={styles.textsmall} style={textsmall2Style}>
            Additional services
          </small>
        </div>
        <ContainerdivfeatureListEle
          textspan="Content entering (every 100 pages)"
          texth4="€350"
          textspanColor="#fff"
          texth4Margin="0"
          texth4FontWeight="700"
        />
        <ContainerdivfeatureListEle
          textspan="Onboarding fee"
          texth4="€1500"
          textspanColor="#fff"
          texth4Margin="0"
          texth4FontWeight="700"
        />
      </div>
      <Button
        iconarrowleft="/iconarrowleft.svg"
        buttonText="Choose International"
        iconarrowright="/iconarrowright.svg"
        showIconarrowleft={false}
        showIconarrowright={false}
        buttonFill="#fab300"
        buttonTextColor="#181f4e"
        typeFillStateEnabledSizeAlignSelf="stretch"
        typeFillStateEnabledSizeBorder="none"
        typeFillStateEnabledSizeBoxSizing="border-box"
        typeFillStateEnabledSizeCursor="pointer"
        textstrongFontSize="24px"
        textstrongLineHeight="40px"
        textstrongFontWeight="700"
        textstrongDisplay="inline-block"
      />
    </div>
  );
};

export default PricingCard;
