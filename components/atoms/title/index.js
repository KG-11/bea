import { createStyleClass } from "../../../utils/common";

import styles from "./style.module.scss";

const Title = ({ children, variant = "", ...props }) => {
  return (
    <h2
      className={createStyleClass(styles.title, styles[variant] || variant)}
      {...props}
    >
      {children}
    </h2>
  );
};

export default Title;
