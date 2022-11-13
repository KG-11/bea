import { useRouter } from "next/router";

import Title from "../../../components/atoms/title";

import styles from "./style.module.scss";

const Brand = () => {
  const router = useRouter();
  return (
    <div className={styles["brand-container"]}>
      <Title
        variant="brand"
        onClick={() => router.push("/")}
        style={{ cursor: "pointer" }}
      >
        beatnyk
      </Title>
      <Title variant="small">Sound Designer</Title>
    </div>
  );
};

export default Brand;
