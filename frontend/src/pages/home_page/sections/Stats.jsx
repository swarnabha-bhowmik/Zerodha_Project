import { Link } from 'react-router-dom'

const Stats = () => {
    return (
        <div className = "container mt-5">
            <div className = "row p-5">
                <div className = "col-lg-5 col-sm-2">
                    <h2 className = "mb-5 fs-4">Trust with confidence</h2>
                    <ul className = "list-unstyled">
                        <li className = "mb-4">
                            <h3 className = "fs-5">Customer-first always</h3>
                            <p className = "stats-p">That's why 1.8+ crore customers trust Zerodha with ~ ₹9 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                        </li>
                        <li className = "mb-4">
                            <h3 className = "fs-5">No spam or gimmicks</h3>
                            <p className = "stats-p">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <Link to = "/about"> Our philosophies.</Link></p>
                        </li>
                        <li className = "mb-4">
                            <h3 className = "fs-5">The Zerodha universe</h3>
                            <p className = "stats-p">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                        </li>
                        <li>
                            <h3 className = "fs-5">Do better with money</h3>
                            <p className = "stats-p">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                        </li>
                    </ul>
                </div>
                <div className = "col-7 stats-right-col">
                    <img className = "stats-img" src = "/images/largestBroker.png" />
                    <div className = "mt-4 stats-a-div">
                        <Link to = "/products">Explore our products  <i className="fa-solid fa-arrow-right stats-i"></i></Link>
                        <a href = "http://localhost:5174/" target = "_blank" rel = "noopener noreferrer">Try Kite demo  <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats