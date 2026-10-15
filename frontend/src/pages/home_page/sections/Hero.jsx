import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className = "container p-5">
            <div className = "row text-center">
                <img src = "/images/homeHero.png" className = "mb-5 hero-img" />
                <h1 className = "mt-5 hero-h1">Invest in everything</h1>
                <p className = "mb-3 hero-p">Online platform to invest in stocks, IPOs, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <Link to = "/signup" className = "mt-4 p-2 fs-5 btn btn-primary btn-hero">Sign up for free</Link>
            </div>
        </div>
    )
}

export default Hero