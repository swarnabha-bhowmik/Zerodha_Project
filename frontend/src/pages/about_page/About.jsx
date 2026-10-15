import { Suspense } from "react"
import Hero from "./sections/Hero"
import People from "./sections/People"

const About = () => {
    return (
        <Suspense>
            <Hero />
            <People />
        </Suspense>
    )
}

export default About