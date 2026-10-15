const Coin = () => {
    return (
        <div className = "container mt-5 pt-5 mb-5">
            <div className = "row">
                <div className = "col-8 text-center" style = {{paddingRight: "70px"}}>
                    <a href = "#" className = "product-a"><img src = "/images/coin.png" /></a>
                </div>
                <div className = "col-4 mt-5">
                    <h2 style = {{fontSize: "24px"}}>Coin</h2>
                    <p className = "mt-4" style = {{fontSize: "16px", lineHeight: "28.8px", color: "rgb(66, 66, 66)"}}>
                        Buy direct mutual funds online,<br/>commission-free, delivered directly to your<br/>Demat account. Enjoy the investment<br/>experience on your Android and iOS<br/>devices.
                    </p>
                    <div className = "d-flex" style = {{gap: "70px"}}>
                        <a href = "#">Coin <i className="fa-solid fa-arrow-right stats-i" /></a>
                    </div>
                    <div className = "d-flex gap-5 mt-4">
                        <a href = "#"><img src = "/images/googlePlayBadge.svg" style = {{width: "120%"}}/></a>
                        <a href = "#"><img src = "/images/appstoreBadge.svg" style = {{width: "120%"}}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coin