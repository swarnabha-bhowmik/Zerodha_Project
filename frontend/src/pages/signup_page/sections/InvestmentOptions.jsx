const InvestmentOptions = () => {
    return (
        <div className="container mt-5 pt-5 mb-5">
            <div className="row text-center mb-5">
                <h1 style={{ fontSize: "24px", color: "rgb(66, 66, 66)", lineHeight: "36px" }}>
                    Investment options with Zerodha demat account
                </h1>
            </div>
            <div className="row justify-content-center g-4 mt-4 ps-5">
                <div className="col-12 col-md-5">
                    <div className="d-flex align-items-center gap-3">
                        <img src="/images/stocks-acop.svg" alt="Stocks" />
                        <div className="text-start">
                            <h3 style={{ fontSize: "20px", color: "rgb(66, 66, 66)", lineHeight: "32px", margin: 0 }}>
                                Stocks
                            </h3>
                            <p className="m-0" style={{ fontSize: "16px", color: "rgb(102, 102, 102)", lineHeight: "26px" }}>
                                Invest in all exchange-listed<br />securities
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-5">
                    <div className="d-flex align-items-center gap-3">
                        <img src="/images/mf-acop.svg" alt="Mutual Funds" />
                        <div className="text-start">
                            <h3 style={{ fontSize: "20px", color: "rgb(66, 66, 66)", lineHeight: "32px", margin: 0 }}>
                                Mutual funds
                            </h3>
                            <p className="m-0" style={{ fontSize: "16px", color: "rgb(102, 102, 102)", lineHeight: "26px" }}>
                                Invest in commission-free direct<br />mutual funds
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-5 mt-5 pt-2">
                    <div className="d-flex align-items-center gap-3">
                        <img src="/images/ipo-acop.svg" alt="IPO" />
                        <div className="text-start">
                            <h3 style={{ fontSize: "20px", color: "rgb(66, 66, 66)", lineHeight: "32px", margin: 0 }}>
                                IPO
                            </h3>
                            <p className="m-0" style={{ fontSize: "16px", color: "rgb(102, 102, 102)", lineHeight: "26px" }}>
                                Apply to the latest IPOs instantly<br />via UPI
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-5 mt-5 pt-2">
                    <div className="d-flex align-items-center gap-4">
                        <img src="/images/fo-acop.svg" alt="Futures & options" />
                        <div className="text-start">
                            <h3 style={{ fontSize: "20px", color: "rgb(66, 66, 66)", lineHeight: "32px", margin: 0 }}>
                                Futures & options
                            </h3>
                            <p className="m-0" style={{ fontSize: "16px", color: "rgb(102, 102, 102)", lineHeight: "26px" }}>
                                Hedge and mitigate market risk<br />through simplified F&O trading
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "row text-center mt-4">
                <a href = "#" className = "mt-4 p-2 fs-5 btn btn-primary btn-hero" style = {{width: "20%"}}>Explore Investments</a>
            </div>
        </div>
    );
};

export default InvestmentOptions;