// Components
import { TeamCard } from '../components/TeamCard/TeamCard'

// API Data
import teamsData from './api/teams.json'

export default function Team({ teamName, teamDescription, teamImagePath, teamPlanetPath, teamCounter, teamPosition }) {
    return <TeamCard
        teamName={teamName}
        teamDescription={teamDescription}
        teamImagePath={teamImagePath}
        teamPlanetPath={teamPlanetPath}
        teamCounter={teamCounter}
        teamPosition={teamPosition}
    />
}

export async function getStaticPaths() {
    const paths = teamsData.map(team => {
        return {
            params: { team: team.name } 
        }
    })

    return { paths, fallback: false }
}

export function getStaticProps({ params }) {
    const { teamName, teamDescription, teamImagePath, teamPlanetPath, teamCounter, teamPosition } = teamsData.find(team => team.name === params.team)

    return { props: { teamName, teamDescription, teamImagePath, teamPlanetPath, teamCounter, teamPosition } }
}