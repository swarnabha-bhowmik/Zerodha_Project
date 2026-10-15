import {Suspense} from 'react'
import Hero from './sections/Hero'
import InvestmentOptions from './sections/InvestmentOptions'
import Setup from './sections/Setup'
import Benefits from './sections/Benefits'
import OpenAccount from '../../components/OpenAccount'

const Signup_page = () => {
    return (
        <Suspense>
            <Hero />
            <InvestmentOptions />
            <Setup />
            <Benefits />
            <OpenAccount />
        </Suspense>
    )
}

export default Signup_page