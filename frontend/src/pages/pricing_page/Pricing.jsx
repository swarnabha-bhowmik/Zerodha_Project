import { Suspense } from "react"
import Hero from "./sections/Hero"
import Tabs from "./sections/Tabs"
import Charges from "./sections/Charges"
import DematAMC from "./sections/DematAMC"
import ChargesAdded from "./sections/ChargesAdded"
import ChargeExplanation from "./sections/ChargeExplanation"

const Pricing = () => {
    return (
        <Suspense>
            <Hero />
            <Tabs />
            <Charges />
            <DematAMC />
            <ChargesAdded />
            <ChargeExplanation />
        </Suspense>
    )
}

export default Pricing