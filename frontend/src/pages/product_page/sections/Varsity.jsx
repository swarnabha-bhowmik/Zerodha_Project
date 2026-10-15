const Varsity = () => {
    return (
        <div className = "container mt-5 pt-5 mb-5">
            <div className = "row">
                <div className = "col-8 text-center" style = {{paddingRight: "70px"}}>
                    <a href = "#" className = "product-a"><img src = "/images/varsity.svg" /></a>
                </div>
                <div className = "col-4 mt-5">
                    <h2 style = {{fontSize: "24px"}}>Varsity mobile</h2>
                    <p className = "mt-4" style = {{fontSize: "16px", lineHeight: "28.8px", color: "rgb(66, 66, 66)"}}>
                        An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.
                    </p>
                    <div className = "d-flex gap-5 mt-4">
                        <a href = "#"><img src = "/images/googlePlayBadge.svg" style = {{width: "120%"}}/></a>
                        <a href = "#"><img src = "/images/appstoreBadge.svg" style = {{width: "120%"}}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Varsity