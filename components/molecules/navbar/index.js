import { motion } from "framer-motion";

import styles from "./style.module.scss";

const linkHover = {
  // borderBottom: "1px solid #222222",
  // borderBottomLeftRadius: "1px",
  // borderBottomRightRadius: "1px",
  scale: 1.2,
};

const Navbar = () => {
  return (
    <motion.div className={styles.navbar}>
      <motion.a
        className={`${styles.link} ${styles["nav-link"]}`}
        href="/about"
        whileHover={linkHover}
        transition={{ duration: 0.3, type: "spring" }}
      >
        <span> About</span>
      </motion.a>
      <motion.a
        className={`${styles.link} ${styles["nav-link"]}`}
        href="/portfolio"
        whileHover={linkHover}
        transition={{ duration: 0.3, type: "spring" }}
      >
        <span>Portfolio</span>
      </motion.a>
      <motion.a
        className={`${styles.link} ${styles["nav-link"]}`}
        href="https://www.subscribepage.com/sounddesignworkshop"
        target="_blank"
        whileHover={linkHover}
        transition={{ duration: 0.3, type: "spring" }}
      >
        <span> Learn</span>
      </motion.a>
    </motion.div>
  );
};

export default Navbar;
