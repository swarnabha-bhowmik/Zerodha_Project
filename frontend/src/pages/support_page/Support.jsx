import { Suspense } from "react"
import Hero from "./sections/Hero"
import Dropdowns from "./sections/Dropdowns"

const Support = () => {
    return (
        <Suspense>
            <Hero />
            <Dropdowns />
        </Suspense>
    )
}

export default Support