// Libs
import Head from "next/head";
import { useRouter } from "next/router";

// Components
import { FlexContainer } from "../components/FlexContainer";
import { Card } from "../components/Card/Card";
import { Button } from "../components/Button"

// CSS Module
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter()
  const handleTeamPageClick = (e, team) => {
    e.preventDefault()
    router.push(`/${team}`)
  }
  
  return (
    <>
    Welcome to AstroTeams Website Tutorial
    </>
  )
}
