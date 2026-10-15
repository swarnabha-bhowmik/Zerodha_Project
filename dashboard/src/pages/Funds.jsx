import { Link } from "react-router-dom"
import StockSection from "../components/StockSection";

const Funds = () => {
    return (
        <section style = {{backgroundColor: "#f8f8f8"}}>
            <div className = "container-fluid" style = {{maxWidth: "94%", backgroundColor: "#fff"}}>
                <div className = "row">
                    <div className = "col-4 border-end">
                        <StockSection />
                    </div>
                    <div className = "col-8 ps-4 pe-3">
                        <div className="funds">
                            <p>Instant, zero-cost fund transfers with UPI</p>
                            <div className="d-flex gap-2">
                                <Link to="#" className="btn-solid theme-success">Add funds</Link>
                                <Link to="#" className="btn-solid theme-primary">Withdraw</Link>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-12 col-md-6 pe-md-4">
                                <div className="d-flex align-items-center gap-2 mb-3">
                                    <i className="fa-solid fa-chart-pie" style={{ color: "rgb(68, 68, 68)" }}></i>
                                    <p className="mb-0" style={{ fontSize: "16px", fontWeight: "500", color: "rgb(68, 68, 68)" }}>
                                        Equity
                                    </p>
                                </div>

                                <div className="table">
                                    <div className="data">
                                        <p>Available margin</p>
                                        <p className="imp colored">4,043.10</p>
                                    </div>
                                    <div className="data">
                                        <p>Used margin</p>
                                        <p className="imp">3,757.30</p>
                                    </div>
                                    <div className="data">
                                        <p>Available cash</p>
                                        <p className="imp">4,043.10</p>
                                    </div>
                                    <hr />
                                    <div className="data">
                                        <p>Opening Balance</p>
                                        <p>4,043.10</p>
                                    </div>
                                    <div className="data">
                                        <p>Payin</p>
                                        <p>4,064.00</p>
                                    </div>
                                    <div className="data">
                                        <p>SPAN</p>
                                        <p>0.00</p>
                                    </div>
                                    <div className="data">
                                        <p>Delivery margin</p>
                                        <p>0.00</p>
                                    </div>
                                    <div className="data">
                                        <p>Exposure</p>
                                        <p>0.00</p>
                                    </div>
                                    <div className="data">
                                        <p>Options premium</p>
                                        <p>0.00</p>
                                    </div>
                                    <hr />
                                    <div className="data">
                                        <p>Collateral (Liquid funds)</p>
                                        <p>0.00</p>
                                    </div>
                                    <div className="data">
                                        <p>Collateral (Equity)</p>
                                        <p>0.00</p>
                                    </div>
                                    <div className="data">
                                        <p>Total Collateral</p>
                                        <p>0.00</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 ps-md-4">
                                <div className="d-flex align-items-center gap-2 mb-3">
                                    <i className="fa-solid fa-droplet" style={{ color: "rgb(68, 68, 68)" }}></i>
                                    <p className="mb-0" style={{ fontSize: "16px", fontWeight: "500", color: "rgb(68, 68, 68)" }}>
                                        Commodity
                                    </p>
                                </div>
                                <div className="commodity">
                                    <p>You don't have a commodity account</p>
                                    <Link to="#" className="btn btn-blue">Open Account</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Funds;