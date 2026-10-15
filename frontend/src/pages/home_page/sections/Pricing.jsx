import { Link } from 'react-router-dom'

const Pricing = () => {
    return (
        <div className = "container my-5">
            <div className = "row pricing-row p-5 align-items-center">
                <div className = "col-lg-5 col-12 mb-4 mb-lg-0">
                    <h2 className = "mb-4 fs-4">Unbeatable pricing</h2>
                    <p className = "text-muted mb-4">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                </div> 
                <div className = "col-lg-7 col-12 pricing-right-col">
                    <div className = "pricing-box">
                        <img src = "/images/pricing-eq.svg" alt = "Free account opening" />
                        <p>Free account<br />opening</p>
                    </div>
                    <div className = "pricing-box">
                        <img src = "/images/pricing-eq.svg" alt = "Free equity delivery" />
                        <p>Free equity delivery<br />and direct mutual funds</p>
                    </div>
                    <div className = "pricing-box">
                        <img src = "/images/other-trades.svg" alt = "Intraday and F&O" />
                        <p>Intraday and<br />F&O</p>
                    </div>
                </div>
                <Link to = "/pricing" className = "mt-3">See pricing <i className="fa-solid fa-arrow-right stats-i"></i></Link>
            </div>
        </div>
    )
}

export default Pricing