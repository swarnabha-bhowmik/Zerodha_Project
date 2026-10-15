const Setup = () => {
    return (
        <section style = {{backgroundColor: "#f8f8f8", marginTop: "120px"}}>
            <div className = "container mt-5 pt-5 mb-5 pb-4">
                <div className="row text-center mb-5">
                    <h1 style={{ fontSize: "24px", color: "rgb(66, 66, 66)", lineHeight: "36px" }}>
                        Steps to open a demat account with Zerodha
                    </h1>
                </div>
                <div className = "row test-center mb-5">
                    <div className = "col-6">
                        <img src = "/images/steps-acop.svg" style = {{width: "100%", paddingLeft: "160px"}}/>
                    </div>
                    <div className = "col-6 mt-5">
                        <ol>
                            <li>Enter the requested details</li>
                            <hr/>
                            <li>Complete e-sign & verification</li>
                            <hr/>
                            <li>Start investing!</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Setup