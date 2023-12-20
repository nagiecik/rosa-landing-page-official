import { useMemo } from "react";
import styles from "./ColorWhiteTypeExtended.module.css";

const ColorWhiteTypeExtended = ({
  colorWhiteTypeExtendedCol,
  colorWhiteTypeExtendedIcoWidth,
  colorWhiteTypeExtendedIcoHeight,
  colorWhiteTypeExtendedIcoPosition,
  colorWhiteTypeExtendedIcoObjectFit,
}) => {
  const colorWhiteTypeExtendedIconStyle = useMemo(() => {
    return {
      width: colorWhiteTypeExtendedIcoWidth,
      height: colorWhiteTypeExtendedIcoHeight,
      position: colorWhiteTypeExtendedIcoPosition,
      objectFit: colorWhiteTypeExtendedIcoObjectFit,
    };
  }, [
    colorWhiteTypeExtendedIcoWidth,
    colorWhiteTypeExtendedIcoHeight,
    colorWhiteTypeExtendedIcoPosition,
    colorWhiteTypeExtendedIcoObjectFit,
  ]);

  return (
    <img
      className={styles.colorwhiteTypeextendedIcon}
      alt=""
      src={colorWhiteTypeExtendedCol}
      style={colorWhiteTypeExtendedIconStyle}
    />
  );
};

export default ColorWhiteTypeExtended;
