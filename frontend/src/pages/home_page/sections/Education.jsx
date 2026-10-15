import { Link } from 'react-router-dom'

const Education = () => {
    return (
        <div className = "container mt-5">
            <div className = "row">
                <div className = "col-6 ps-5">
                    <img src = "/images/education.svg" style = {{width: "80%"}}/>
                </div>
                <div className = "col-6 pe-4">
                    <div className = "mt-4">
                        <h2 className = "mt-3 fs-4">Free and open market education</h2>
                        <p className = "text-muted mt-4">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <Link to = "#">Varsity <i className="fa-solid fa-arrow-right"></i></Link>
                        <p className = "text-muted mt-4">TradingQ&A, the most active trading and investment community in India <br/>for all your market related queries.</p>
                        <Link to = "#">TradingQ&A <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education