// Libs
import PropTypes from "prop-types"
import Head from "next/head";
import { useRouter } from "next/router";

// Components
import { FlexContainer, ORIENTATION } from "../FlexContainer";
import { ElevenLabsLogo } from "../ElevenLabsLogo/ElevenLabsLogo";
import { SpaceCraftButton } from "../SpaceCraftButton";

// CSS Module
import styles from "./Layout.module.css";
import Image from "next/image";

export function Layout({ children: pageContent }) {
  const router = useRouter()
  const isHomePage = router.pathname === "/"

  const handleContactClick = (e) => {
    e.preventDefault()
    router.push("/contact")
  }

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
      { isHomePage && <SpaceCraftButton onClick={handleContactClick}>Contact</SpaceCraftButton> }
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

Layout.propTypes = {
  /**
   * Page content
  */
  children: PropTypes.node.isRequired,
}