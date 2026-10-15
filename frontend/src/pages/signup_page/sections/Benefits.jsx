const Benefits = () => {
    return (
        <div className="container mt-5 pt-5 mb-5">
            <div className="row text-center mb-5">
                <h1 style={{ fontSize: "24px", color: "rgb(66, 66, 66)", lineHeight: "36px" }}>
                    Benefits of opening a Zerodha demat account
                </h1>
            </div>
            <div className = "row pt-4">
                <div className = "col-6 mt-5 pt-5 ps-5">
                    <img src = "/images/acop-benefits.svg"  style = {{width: "85%"}}/>
                </div>
                <div className = "col-6">
                    <ul className = "list-unstyled">
                        <li className = "pb-4">
                            <h3 style={{ fontSize: "20px", color: "rgb(66, 66, 66)", lineHeight: "32px" }}>
                                Unbeatable pricing
                            </h3>
                            <p style={{ fontSize: "16px", color: "rgb(102, 102, 102)", lineHeight: "28.8px" }}>
                                Zero charges for equity & mutual fund investments. Flat ₹20 fees for<br/>intraday and F&O trades.
                            </p>
                        </li>
                        <li className = "pb-4">
                            <h3 style={{ fontSize: "20px", color: "rgb(66, 66, 66)", lineHeight: "32px" }}>
                                Best investing experience
                            </h3>
                            <p style={{ fontSize: "16px", color: "rgb(102, 102, 102)", lineHeight: "28.8px" }}>
                                Simple and intuitive trading platform with an easy-to-understand<br/>user interface.
                            </p>
                        </li>
                        <li className = "pb-4">
                            <h3 style={{ fontSize: "20px", color: "rgb(66, 66, 66)", lineHeight: "32px" }}>
                                No spam or gimmicks
                            </h3>
                            <p style={{ fontSize: "16px", color: "rgb(102, 102, 102)", lineHeight: "28.8px" }}>
                                Committed to transparency — no gimmicks, spam, "gamification", or<br/>intrusive push notifications
                            </p>
                        </li>
                        <li>
                            <h3 style={{ fontSize: "20px", color: "rgb(66, 66, 66)", lineHeight: "32px" }}>
                                The Zerodha universe
                            </h3>
                            <p style={{ fontSize: "16px", color: "rgb(102, 102, 102)", lineHeight: "28.8px" }}>
                                More than just an app — gain free access to the entire ecosystem of<br/>our partner products.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Benefits