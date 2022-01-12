// Libs
import PropTypes from "prop-types"
import Image from "next/image"
import classnames from "classnames"

// Components
import { PageCard } from "../PageCard"
import { FlexContainer } from "../FlexContainer"
import { Hr } from "../Hr"
import { Section } from "./Section"

// CSS Module
import styles from "./TeamCard.module.css"

export function TeamCard({ teamDescription, teamImagePath, teamName, teamPlanetPath }) {
    const rootClassName = classnames(styles.container, "flexbox--space-around")

    return <PageCard className={rootClassName}>
        <FlexContainer className="full-width flexbox--space-between">
            <Section title="Blason" className={styles["team-card__logo"]}>
                <Image
                    alt={teamName}
                    src={teamImagePath}
                    layout="responsive"
                    objectFit="contain"
                    width="500px"
                    height="500px"
                    priority
                />
            </Section>
            <Section><h3>{teamName}</h3></Section>
            <Section title="Planet" className={styles["team-card__logo"]}>
                <Image
                    alt={teamName}
                    src={teamPlanetPath}
                    layout="responsive"
                    objectFit="contain"
                    width="500px"
                    height="500px"
                    priority
                />
            </Section>
        </FlexContainer>
        <Hr />
        <FlexContainer>
            <Section title="Team Description">{teamDescription}</Section>
        </FlexContainer>
        <Hr />
        <FlexContainer className="full-width flexbox--space-between">
            <Section className={classnames(styles["section--align-center"], styles["section__size"])} title="Cats">25</Section>
            <Section className={classnames(styles["section--align-center"], styles["section__position"])} title="Current Position">3rd</Section>
        </FlexContainer>
    </PageCard>
}

TeamCard.propTypes = {
    /**
     * Team phrase description
     */
    teamDescription: PropTypes.string.isRequired,

    /**
     * Team image path
     */
    teamImagePath: PropTypes.string.isRequired,

    /**
     * Team name
     */
    teamName: PropTypes.string.isRequired,

    /**
     * Planet image path
     */
    teamPlanetPath: PropTypes.string.isRequired
}