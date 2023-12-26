import { useMemo } from "react";
import styles from "./Divider.module.css";

const Divider = ({dividerBorder, dividerWidth }) => {
  const dividerStyle = useMemo(() => {
    return {
      border: dividerBorder,
      width: dividerWidth,
    };
  }, [dividerBorder, dividerWidth]);
  return <hr className={styles.divider} style={dividerStyle} />;
};

export default Divider;
