import {Suspense} from 'react'
import Hero from './sections/Hero'
import Stats from './sections/Stats'
import KiteConnect from './sections/KiteConnect'
import Pricing from './sections/Pricing'
import Education from './sections/Education'
import OpenAccount from '../../components/OpenAccount'

const Home = () => {
    return (
        <Suspense>
            <Hero />
            <Stats />
            <KiteConnect />
            <Pricing />
            <Education />
            <OpenAccount />
        </Suspense>
    )
}

export default Home