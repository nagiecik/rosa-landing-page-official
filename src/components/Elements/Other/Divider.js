import React from "react";
import styles from "./Divider.module.css";

const Divider = ({ dividerBorder, dividerWidth }) => (
  <hr
    className={styles.containerContent}
    style={React.useMemo(
      () => ({ border: dividerBorder, width: dividerWidth }),
      [dividerBorder, dividerWidth]
    )}
  />
);

export default Divider;
