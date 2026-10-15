const KiteConnect = () => {
    return (
        <div className = "container mt-5 pt-5 mb-5">
            <div className = "row align-items-center ps-4">
                <div className = "col-4 ps-5">
                    <h2 style = {{fontSize: "24px"}}>Kite Connect API</h2>
                    <p className = "mt-4" style = {{fontSize: "16px", lineHeight: "28.8px", color: "rgb(66, 66, 66)"}}>
                        Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.
                    </p>
                    <a href = "#">Kite Connect <i className="fa-solid fa-arrow-right stats-i" /></a>
                </div>
                <div className = "col-8 text-center" style = {{paddingLeft: "70px"}}>
                    <a href = "#" className = "product-a"><img src = "/images/kiteconnect.svg" /></a>
                </div>
            </div>
        </div>
    )
}

export default KiteConnect