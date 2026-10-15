const People = () => {
    return (
        <div className = "container mt-5 pt-5">
            <div className = "row text-center mb-5 pb-3">
                <h2 style = {{fontSize: "24px"}}>People</h2>
            </div>
            <div className = "row ps-5">
                <div className = "col-5 text-center" style = {{paddingLeft: "80px"}}>
                    <img src = "/images/nithinKamath.jpg" style = {{borderRadius: "100%", width: "75%"}}/>
                    <h5 className = "mt-3" style = {{fontSize: "18px", color: "rgb(66, 66, 66)"}}>Nithin Kamath</h5>
                    <p className = "mt-4" style = {{fontSize: "14.4px", color: "rgb(102, 102, 102)"}}>Founder, CEO</p>
                </div>
                <div className = "col-7 pe-5">
                    <p style = {{fontSize: "16px", color: "rgb(66, 66, 66)", lineHeight: "28.8px"}}>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome<br/>the hurdles he faced during his decade long stint as a trader.<br/>Today, Zerodha has changed the landscape of the Indian broking<br/>industry.
                        <br/><br/>
                        He is a member of the SEBI Secondary Market Advisory<br/>Committee (SMAC) and the Market Data Advisory Committee<br/>(MDAC).
                        <br/><br/>
                        Playing basketball is his zen.
                        <br/><br/>
                        Connect on <a href = "#">Homepage</a> / <a href = "#">TradingQnA</a> / <a href = "#">Twitter</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default People