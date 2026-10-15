const Hero = () => {
    return (
        <div class = "container mt-5 pt-5 mb-5">
            <div class = "row text-center">
                <h1 style = {{fontSize: "28px", color: "rgb(66, 66, 66)"}}>Charges</h1>
                <p className = "mt-2" style = {{fontSize: "20px", color: "rgb(155, 155, 155)"}}>
                    List of all charges and taxes
                </p>
            </div>
            <div className = "row text-center mt-5 pt-5" style = {{paddingLeft: "30px", paddingRight: "30px"}}>
                <div className = "col-4">
                    <img src = "/images/pricing-eq.svg" style = {{width: "70%"}}/>
                    <h2 className = "mt-4" style = {{fontSize: "28px", color: "rgb(66, 66, 66)"}}>Free equity delivery</h2>
                    <p className = "mt-4" style = {{fontSize: "16px", color: "rgb(102, 102, 102)", lineHeight: "28.8px"}}>
                        All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                    </p>
                </div>
                <div className = "col-4">
                    <img src = "/images/other-trades.svg" style = {{width: "70%"}}/>
                    <h2 className = "mt-4" style = {{fontSize: "28px", color: "rgb(66, 66, 66)"}}>Intraday and F&O trades</h2>
                    <p className = "mt-4" style = {{fontSize: "16px", color: "rgb(102, 102, 102)", lineHeight: "28.8px"}}>
                        Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                    </p>
                </div>
                <div className = "col-4">
                    <img src = "/images/pricing-eq.svg" style = {{width: "70%"}}/>
                    <h2 className = "mt-4" style = {{fontSize: "28px", color: "rgb(66, 66, 66)"}}>Free direct MF</h2>
                    <p className = "mt-4" style = {{fontSize: "16px", color: "rgb(102, 102, 102)", lineHeight: "28.8px"}}>
                        All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero