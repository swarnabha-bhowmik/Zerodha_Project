const Header = () => {
    return (
        <div className = "container mt-5 mb-5">
            <div className = "row text-center mb-5 pb-5">
                <h1 className = "mt-5" style = {{fontSize: "28px"}}>Zerodha Products</h1>
                <p className = "mb-3 mt-2" style = {{fontSize: "20px", color: "rgb(66, 66, 66)"}}>Sleek, modern, and intuitive trading platforms</p>
                <p>Check out our <a href = "#">investment offerings <i className="fa-solid fa-arrow-right stats-i" /></a></p>
            </div>
            <hr />
        </div>
    )
}

export default Header