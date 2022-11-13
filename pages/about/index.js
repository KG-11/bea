import Head from "next/head";

import Description from "../../components/atoms/description";

import Navbar from "../../components/molecules/navbar";
import Brand from "../../components/molecules/brand";

import styles from "./style.module.scss";

export default function Home() {
  return (
    <div className={"container"}>
      <Head>
        <title>beatnyk | about</title>
        <meta name="description" content="Sound Designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"main"}>
        <Navbar />
        <Brand />
        <div className={styles["info-container"]}>
          <Description variant="xsmall">
            beatnyk is an idea of a non-conformist embracing a journey to find
            one’s sound.
          </Description>
          <Description variant="xsmall">
            in a state of constant flux, a student of the art in practice.
            beatnyk's work primarily revolves around reimaging sound design and
            music as a narrative medium, in a consistent attempt to unlearn and
            relearn the processes involved to construct a creative practice.
            experiments to study lead to working with other forms of media,
            either through practice or through collaborations.
          </Description>
        </div>
      </main>

      <footer className={"footer"}></footer>
    </div>
  );
}
