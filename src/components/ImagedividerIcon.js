import { useMemo } from "react";
import styles from "./ImagedividerIcon.module.css";

const ImagedividerIcon = ({
  imageDimensions,
  propAlignSelf,
  propMaxWidth,
  propOverflow,
  propWidth,
}) => {
  const imagedividerIconStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      maxWidth: propMaxWidth,
      overflow: propOverflow,
      width: propWidth,
    };
  }, [propAlignSelf, propMaxWidth, propOverflow, propWidth]);

  return (
    <img
      className={styles.imagedividerIcon}
      alt=""
      src={imageDimensions}
      style={imagedividerIconStyle}
    />
  );
};

export default ImagedividerIcon;
