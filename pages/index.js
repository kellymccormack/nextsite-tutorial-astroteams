// Libs
import Head from "next/head";

// Components
import { FlexContainer, ORIENTATION } from "../components/FlexContainer";
import { ElevenLabsLogo } from "../components/ElevenLabsLogo/ElevenLabsLogo";
import { Card } from "../components/Card/Card";
import { Button } from "../components/Button"
import { SpaceCraftButton } from "../components/SpaceCraftButton";

// CSS Module
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h2>Eleven Labs Astronauts Teams</h2>
      <FlexContainer>
        <Card backgroundColorClass="blue-background" imagePath="/cats-logo.png" imageAlt="Eleven Labs Cats Team" title="Schizo Cats">
          <div className={styles["team-description"]}>
            <div className={styles["team-description__txt"]}>Crazy cats from the kitty planet.</div>
            <Button className="blue-background" >READ MORE</Button>
          </div>
        </Card>
        <Card backgroundColorClass="green-background" imagePath="/ducks-logo.png" imageAlt="Eleven Labs Duck Team" title="Duck Invaders">
          <div className={styles["team-description"]}>
            <div className={styles["team-description__txt"]}>Ducks space invaders from Duck planet.</div>
            <Button className="green-background">READ MORE</Button>
          </div>
        </Card>
        <Card backgroundColorClass="red-background" imagePath="/pandas-logo.png" imageAlt="Eleven Labs Pandas Team" title="Donut Factory">
          <div className={styles["team-description"]}>
            <div className={styles["team-description__txt"]}>Pandas who made some donuts from the Donuts planet.</div>
            <Button className="red-background">READ MORE</Button>
          </div>
        </Card>
        <Card backgroundColorClass="yellow-background" imagePath="/racoon-logo.png" imageAlt="Eleven Labs Racoon Team" title="Raccoons of Asgard">
          <div className={styles["team-description"]}>
            <div className={styles["team-description__txt"]}>Racoons guardian of the galaxy from the great Asgard planet.</div>
            <Button className="yellow-background">READ MORE</Button>
          </div>
        </Card>
      </FlexContainer>
    </>
  )
}
