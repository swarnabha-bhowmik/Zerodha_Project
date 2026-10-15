const Console = () => {
    return (
        <div className = "container mt-5 pt-5 mb-5">
            <div className = "row align-items-center ps-3">
                <div className = "col-4 ps-5">
                    <h2 style = {{fontSize: "24px"}}>Console</h2>
                    <p className = "mt-4" style = {{fontSize: "16px", lineHeight: "28.8px", color: "rgb(66, 66, 66)"}}>
                        The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.
                    </p>
                    <a href = "#">Learn more <i className="fa-solid fa-arrow-right stats-i" /></a>
                </div>
                <div className = "col-8 text-center" style = {{paddingLeft: "70px"}}>
                    <a href = "#" className = "product-a"><img src = "/images/console.png" /></a>
                </div>
            </div>
        </div>
    )
}

export default Console