// Libs
import Head from "next/head";

// Components
import { FlexContainer, ORIENTATION } from "../FlexContainer";
import { ElevenLabsLogo } from "../ElevenLabsLogo/ElevenLabsLogo";
import { SpaceCraftButton } from "../SpaceCraftButton";

// CSS Module
import styles from "./Layout.module.css";
import Image from "next/image";

export function Layout({ children: pageContent }) {
    return <div className={styles["main-container"]}>
    <Head>
      <title>AstroTeams</title>
      <meta name="description" content="Eleven Labs Astro Teams" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <FlexContainer orientation={ORIENTATION.VERTICAL}>
        <ElevenLabsLogo />
        { pageContent }
      </FlexContainer>
      <SpaceCraftButton>Contact</SpaceCraftButton>
    </main>

    <footer className={styles.footer}>
      <Image
        alt="Eleven Labs Logo"
        src="/logo-eleven-labs-large.png"
        objectFit="contain"
        width="150px"
        height="50px"
        priority 
      />
      <div className={styles["footer__label"]}>NextJS Demo App</div>
    </footer>
  </div>
}