import { Link } from 'react-router-dom'

const Education = () => {
    return (
        <div className = "container mt-4 mt-md-5">
            <div className = "row align-items-center">
                <div className = "col-12 col-md-6 text-center mb-4 mb-md-0">
                    <img src = "/images/education.svg" style = {{maxWidth: "85%", height: "auto"}} alt="Market education" />
                </div>
                <div className = "col-12 col-md-6 px-3 px-md-4">
                    <div>
                        <h2 className = "fs-4">Free and open market education</h2>
                        <p className = "text-muted mt-3">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <Link to = "#">Varsity <i className="fa-solid fa-arrow-right"></i></Link>
                        <p className = "text-muted mt-4">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <Link to = "#">TradingQ&A <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education