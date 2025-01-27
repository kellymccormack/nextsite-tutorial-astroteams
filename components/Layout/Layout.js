// libs
import PropTypes from "prop-types";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from 'next/link';

// components
import { FlexContainer, ORIENTATION } from "../FlexContainer";
import { ElevenLabsLogo } from "../ElevenLabsLogo/ElevenLabsLogo";
import { SpaceCraftButton } from "../SpaceCraftButton";
// css
import styles from "../Layout.module.css";
import Image from "next/image";

export function Layout({ children: pageContent }) {
    const router = useRouter();
    const isHomePage = router.pathname === '/';

    const handleContactclick = (e) => {
        e.preventDefault();
        router.push('/contact');
    }
    const handleHomePageClick = (e, team) => {
        e.preventDefault()
        router.push(`/`)
      }

    return <div className={styles["main-container"]}>
    <Head>
        <title>Astroteams</title>
    </Head>
    
    <main className={styles.main}>
        <FlexContainer orientation={ORIENTATION.VERTICAL}>
            <ElevenLabsLogo />
            { pageContent }
        </FlexContainer>
        { isHomePage && <SpaceCraftButton onClick={handleContactclick}>contact</SpaceCraftButton> }
    </main>

    <footer className={styles.footer}>
        <Link href="/">
            <Image
                alt="logo"
                src="/logo-eleven-labs-large.png"
                objectFit="contain"
                width="150px"
                height="50px"
                priority
            />
        </Link>
        <Link href="/">Home</Link>
        <div className={styles["footer__label"]}>NextJS Demo App</div>
    </footer>

    </div>
}

Layout.propTypes = {
 // Page content
 children: PropTypes.node.isRequired,   
}