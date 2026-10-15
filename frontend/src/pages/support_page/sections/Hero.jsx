import {Link} from "react-router-dom"

const Hero = () => {
    return (
        <header style = {{backgroundColor: "rgb(245, 245, 245)"}}>
            <div className = "container pt-4 ps-4 pb-5">
                <div className = "d-flex justify-content-between align-items-center flex-wrap gap-2">
                    <p className = "mb-0 pe-2" style = {{fontSize: "36px", color: "rgb(66, 66, 66)"}}>
                        <Link to = "/support" className = "text-reset text-decoration-none" style = {{fontWeight: "600"}}>Support Portal</Link>
                    </p>
                    <Link to = "#" className = "px-4 py-2 fs-6 btn btn-primary btn-hero d-inline-flex align-items-center justify-content-center" style = {{width: "auto", minWidth: "120px", fontWeight: "500", margin: "0"}}>
                        My Tickets
                    </Link>
                </div>
                <div className="input-group mt-4" style = {{height: "60px"}}>
                    <span className="input-group-text bg-white border-end-0">
                        <i className="fa-solid fa-magnifying-glass ps-3" style = {{color: "rgb(102, 102, 102)"}} aria-hidden="true"></i>
                    </span>
                    <input
                        type ="search"
                        className ="form-control border-start-0 support-search-input me-4"
                        placeholder ="Eg: How do I open my account, How do I activate F&O..."
                        aria-label = "Search for help"
                    />
                </div>
            </div>
        </header>
    )
}

export default Hero