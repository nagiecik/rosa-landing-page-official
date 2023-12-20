import { useMemo } from "react";
import styles from "./ContainerdivcardContext.module.css";

const ContainerdivcardContext = ({
  textlabelnumber,
  texth5,
  textp,
  containerdivcardContextBackgroundColor,
  containerdivcardContextBorder,
  containerdivnumberBackgroundColor,
  textlabelnumberColor,
  texth5Color,
  texth5Margin,
  texth5FontWeight,
  textpColor,
  textpMargin,
}) => {
  const containerdivcardContextStyle = useMemo(() => {
    return {
      backgroundColor: containerdivcardContextBackgroundColor,
      border: containerdivcardContextBorder,
    };
  }, [containerdivcardContextBackgroundColor, containerdivcardContextBorder]);

  const containerdivnumberStyle = useMemo(() => {
    return {
      backgroundColor: containerdivnumberBackgroundColor,
    };
  }, [containerdivnumberBackgroundColor]);

  const textlabelnumberStyle = useMemo(() => {
    return {
      color: textlabelnumberColor,
    };
  }, [textlabelnumberColor]);

  const texth5Style = useMemo(() => {
    return {
      color: texth5Color,
      margin: texth5Margin,
      fontWeight: texth5FontWeight,
    };
  }, [texth5Color, texth5Margin, texth5FontWeight]);

  const textp1Style = useMemo(() => {
    return {
      color: textpColor,
      margin: textpMargin,
    };
  }, [textpColor, textpMargin]);

  return (
    <div
      className={styles.containerdivcardContext}
      style={containerdivcardContextStyle}
    >
      <div
        className={styles.containerdivnumber}
        style={containerdivnumberStyle}
      >
        <div className={styles.textlabelnumber} style={textlabelnumberStyle}>
          {textlabelnumber}
        </div>
      </div>
      <div className={styles.containerdivtext}>
        <b className={styles.texth5} style={texth5Style}>
          {texth5}
        </b>
        <div className={styles.textp} style={textp1Style}>
          {textp}
        </div>
      </div>
    </div>
  );
};

export default ContainerdivcardContext;
