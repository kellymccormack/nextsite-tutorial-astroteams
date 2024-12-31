// Components
import { PageCard } from "../components/PageCard"
import { FlexContainer, ORIENTATION } from "../components/FlexContainer"

export default function Contact() {
    return <>
        <h2>Contact Eleven Labs</h2>
        <PageCard>
            <FlexContainer orientation={ORIENTATION.VERTICAL}>
                <h3>Eleven Labs</h3>
                <div>PARIS</div>
                <div>15, avenue de la Grande Armée</div>
                <div>75116 PARIS</div>
                <div><a href="mailto:contact@eleven-labs.com">contact@eleven-labs.com</a></div>
            </FlexContainer>
        </PageCard>
    </>
}