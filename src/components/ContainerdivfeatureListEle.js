import { useMemo } from "react";
import styles from "./ContainerdivfeatureListEle.module.css";

const ContainerdivfeatureListEle = ({
  textspan,
  texth4,
  textspanColor,
  texth4Margin,
  texth4FontWeight,
}) => {
  const textspan1Style = useMemo(() => {
    return {
      color: textspanColor,
    };
  }, [textspanColor]);

  const texth4Style = useMemo(() => {
    return {
      margin: texth4Margin,
      fontWeight: texth4FontWeight,
    };
  }, [texth4Margin, texth4FontWeight]);

  return (
    <div className={styles.containerdivfeatureListEle}>
      <div className={styles.textspan} style={textspan1Style}>
        {textspan}
      </div>
      <b className={styles.texth4} style={texth4Style}>
        {texth4}
      </b>
    </div>
  );
};

export default ContainerdivfeatureListEle;
