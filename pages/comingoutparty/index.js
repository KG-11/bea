import Head from "next/head";

import Navbar from "../../components/molecules/navbar";

import styles from "./style.module.scss";

export default function Home() {
  return (
    <div className={"container"}>
      <Head>
        <title>beatnyk | coming out party</title>
        <meta name="description" content="Sound Designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"main"}>
        <Navbar />
      </main>

      <footer className={"footer"}></footer>
    </div>
  );
}
