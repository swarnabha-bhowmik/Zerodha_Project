import {Link} from "react-router-dom"

const ProductIcons = () => {
    return(
        <div className = "container mt-5 pt-5 mb-5 pb-4">
            <div className = "row text-center mb-5">
                <p style = {{fontSize: "20px", color: "rgb(66, 66, 66)"}}>
                    Want to know more about our technology stack? Check out the <a href = "#">Zerodha.tech</a> blog.
                </p>
            </div>
            <div className = "row text-center mt-5 pt-4">
                <h2 style = {{fontSize: "24px", color: "rgb(66, 66, 66)"}}>The Zerodha Universe</h2>
                <p className = "mt-3" style = {{fontSize: "16px", color: "rgb(66, 66, 66)"}}>
                    Extend your trading and investment experience even further with our partner platforms
                </p>
            </div>
            <div className = "row text-center mt-5" style = {{paddingLeft: "80px", paddingRight: "80px"}}>
                <div className = "col-4">
                    <a className = "product-a" href = "#">
                        <img src = "/images/zerodhaFundhouse.png" style = {{width: "60%"}}/>
                        <p className = "mt-3" style = {{fontSize: "12px", color: "rgb(155, 155, 155)", fontWeight: "500", lineHeight: "18px"}}>
                            Our asset management venture<br/>that is creating simple and transparent index<br/>funds to help you save for your goals.
                        </p>
                    </a>
                </div>
                <div className = "col-4">
                    <a className = "product-a" href = "#">
                        <img src = "/images/sensibullLogo.svg" style = {{width: "60%"}}/>
                        <p style = {{fontSize: "12px", color: "rgb(155, 155, 155)", fontWeight: "500", lineHeight: "18px", marginTop: "40px"}}>
                            Options trading platform that lets you<br/>create strategies, analyze positions, and examine<br/>data points like open interest, FII/DII, and more.
                        </p>
                    </a>
                </div>
                <div className = "col-4">
                    <a className = "product-a" href = "#">
                        <img src = "/images/tijori.svg" style = {{width: "40%"}}/>
                        <p style = {{fontSize: "12px", color: "rgb(155, 155, 155)", fontWeight: "500", lineHeight: "18px", marginTop: "20px"}}>
                            Investment research platform<br/>that offers detailed insights on stocks,<br/>sectors, supply chains, and more.
                        </p>
                    </a>
                </div>
            </div>
            <div className = "row text-center mt-5" style = {{paddingLeft: "80px", paddingRight: "80px"}}>
                <div className = "col-4">
                    <a className = "product-a" href = "#">
                        <img src = "/images/streakLogo.png" style = {{width: "50%"}}/>
                        <p style = {{fontSize: "12px", color: "rgb(155, 155, 155)", fontWeight: "500", lineHeight: "18px", marginTop: "20px"}}>
                            Systematic trading platform<br/>that allows you to create and backtest<br/>strategies without coding.
                        </p>
                    </a>
                </div>
                <div className = "col-4">
                    <a className = "product-a" href = "#">
                        <img src = "/images/smallcaseLogo.png" style = {{width: "60%"}}/>
                        <p style = {{fontSize: "12px", color: "rgb(155, 155, 155)", fontWeight: "500", lineHeight: "18px", marginTop: "25px"}}>
                            Thematic investing platform<br/>that helps you invest in diversified<br/>baskets of stocks on ETFs.
                        </p>
                    </a>
                </div>
                <div className = "col-4">
                    <a className = "product-a" href = "#">
                        <img src = "/images/dittoLogo.png" style = {{width: "45%"}}/>
                        <p style = {{fontSize: "12px", color: "rgb(155, 155, 155)", fontWeight: "500", lineHeight: "18px", marginTop: "20px"}}>
                            Personalized advice on life<br/>and health insurance. No spam<br/>and no mis-selling.
                        </p>
                    </a>
                </div>
            </div>
            <div className = "row text-center mt-4">
                <Link to = "/signup" className = "mt-4 p-2 fs-5 btn btn-primary btn-hero">Sign up for free</Link>
            </div>
        </div>
    )
}

export default ProductIcons