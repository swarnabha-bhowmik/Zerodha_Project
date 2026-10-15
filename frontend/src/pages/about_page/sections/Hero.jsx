const Hero = () => {
    return (
        <div className = "container ps-5 pe-5 mb-5">
            <div className = "row text-center mt-5 pt-5 pb-5 mb-5">
                <h2 style = {{fontSize: "24px", lineHeight: "36px"}}>We pioneered the discount broking model in India.<br/>Now, we are breaking ground with our technology.</h2>
            </div>
            <hr/>
            <div className = "row mt-5 pt-5">
                <div className = "col-6 ps-5">
                    <p style = {{color: "rgb(66, 66, 66)", lineHeight: "28.8px"}}>
                        We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
                        <br/><br/>
                        Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                        <br/><br/>
                        Over 1.8+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                    </p>
                </div>
                <div className = "col-6 pe-5">
                    <p style = {{color: "rgb(66, 66, 66)", lineHeight: "28.8px"}}>
                        In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
                        <br/><br/>
                        <a href = "#">Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
                        <br/><br/>
                        And yet, we are always up to something new every day. Catch up on the latest updates on our <a href = "#">blog</a> or see what the media is <a href = "#">saying about us</a> or learn more about our business and product <a href = "#">philosophies.</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero