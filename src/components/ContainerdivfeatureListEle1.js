import { useMemo } from "react";
import styles from "./ContainerdivfeatureListEle1.module.css";

const ContainerdivfeatureListEle1 = ({
  imageiconCheck,
  textspan,
  imageiconCheckObjectFit,
  textspanColor,
}) => {
  const imageiconCheckStyle = useMemo(() => {
    return {
      objectFit: imageiconCheckObjectFit,
    };
  }, [imageiconCheckObjectFit]);

  const textspanStyle = useMemo(() => {
    return {
      color: textspanColor,
    };
  }, [textspanColor]);

  return (
    <div className={styles.containerdivfeatureListEle}>
      <img
        className={styles.imageiconCheck}
        alt=""
        src={imageiconCheck}
        style={imageiconCheckStyle}
      />
      <div className={styles.textspan} style={textspanStyle}>
        {textspan}
      </div>
    </div>
  );
};

export default ContainerdivfeatureListEle1;
