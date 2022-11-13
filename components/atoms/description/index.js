import { createStyleClass } from "../../../utils/common";

import styles from "./style.module.scss";

const Description = ({ children, variant = "" }) => {
  return (
    <p
      className={createStyleClass(
        styles.description,
        styles[variant] || variant
      )}
    >
      {children}
    </p>
  );
};

export default Description;
