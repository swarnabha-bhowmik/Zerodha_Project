const Tabs = () => {
    return (
        <div className = "container mt-5 pt-5 mb-5" style = {{paddingLeft: "62px", paddingRight: "55px"}}>
            <nav className = "tabs mb-4 pb-2">
                <div class="nav nav-tabs gap-4" id="nav-tab2" role="tablist">
                    <button class="nav-link active" id="nav-home-tab2" data-bs-toggle="tab" data-bs-target="#nav-home2" type="button" role="tab" aria-controls="nav-home2" aria-selected="true">
                        Equity
                    </button>
                    <button class="nav-link" id="nav-profile-tab2" data-bs-toggle="tab" data-bs-target="#nav-profile2" type="button" role="tab" aria-controls="nav-profile2" aria-selected="false">
                        Currency
                    </button>
                    <button class="nav-link" id="nav-contact-tab2" data-bs-toggle="tab" data-bs-target="#nav-contact2" type="button" role="tab" aria-controls="nav-contact2" aria-selected="false">
                        Commodity
                    </button>
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent2">
                <div class="tab-pane show active" id="nav-home2" role="tabpanel" aria-labelledby="nav-home-tab2" tabindex="0">
                    <div className = "container border">
                        <table class="table table-striped table-borderless"  style={{ "--bs-table-striped-bg": "#fbfbfb" }}>
                            <thead className = "border-bottom">
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Equity delivery</th>
                                    <th scope="col">Equity intraday</th>
                                    <th scope="col">F&O - Futures</th>
                                    <th scope="col">F&O - Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" style = {{fontSize: "14.4px", color: "rgb(102, 102, 102)", fontWeight: "400"}}>Brokerage</th>
                                    <td>Zero Brokerage</td>
                                    <td>0.03% or Rs.<br/>20/executed order<br/>whichever is lower</td>
                                    <td>0.03% or Rs.<br/>20/executed order<br/>whichever is lower</td>
                                    <td>Flat Rs. 20 per executed order</td>
                                </tr>
                                <tr>
                                    <th scope="row" style = {{fontSize: "14.4px", color: "rgb(102, 102, 102)", fontWeight: "400"}}>STT/CTT</th>
                                    <td>0.1% on buy & sell</td>
                                    <td>0.025% on the sell side</td>
                                    <td>0.05% on the sell side</td>
                                    <td>
                                        <ul>
                                            <li>0.15% of the intrinsic value on<br/>options that are bought and<br/>exercised</li>
                                            <li>0.15% on sell side (on<br/>premium)</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" style = {{fontSize: "14.4px", color: "rgb(102, 102, 102)", fontWeight: "400"}}>Transaction<br/>charges</th>
                                    <td>NSE: 0.00307%<br/>BSE: 0.00375%</td>
                                    <td>NSE: 0.00307%<br/>BSE: 0.00375%</td>
                                    <td>NSE: 0.00183%<br/>BSE: 0</td>
                                    <td>NSE: 0.03553% (on premium)<br/>BSE: 0.0325% (on premium)</td>
                                </tr>
                                <tr>
                                    <th scope="row" style = {{fontSize: "14.4px", color: "rgb(102, 102, 102)", fontWeight: "400"}}>GST</th>
                                    <td>18% on (brokerage + SEBI<br/>charges + transaction<br/>charges)</td>
                                    <td>18% on (brokerage + SEBI<br/>charges + transaction<br/>charges)</td>
                                    <td>18% on (brokerage + SEBI<br/>charges + transaction<br/>charges)</td>
                                    <td>18% on (brokerage + SEBI<br/>charges + transaction<br/>charges)</td>
                                </tr>
                                <tr>
                                    <th scope="row" style = {{fontSize: "14.4px", color: "rgb(102, 102, 102)", fontWeight: "400"}}>SEBI charges</th>
                                    <td>₹10 / crore</td>
                                    <td>₹10 / crore</td>
                                    <td>₹10 / crore</td>
                                    <td>₹10 / crore</td>
                                </tr>
                                <tr>
                                    <th scope="row" style = {{fontSize: "14.4px", color: "rgb(102, 102, 102)", fontWeight: "400"}}>Stamp<br/>Charges</th>
                                    <td>0.015% or ₹1500 / crore on<br/>buy side</td>
                                    <td>0.003% or ₹300 / crore on<br/>buy side</td>
                                    <td>0.002% or ₹200 / crore on<br/>buy side</td>
                                    <td>0.003% or ₹300 / crore on<br/>buy side</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="tab-pane" id="nav-profile2" role="tabpanel" aria-labelledby="nav-profile-tab2" tabindex="0">
                    <div className = "container border">
                        <table class="table table-striped table-borderless"  style={{ "--bs-table-striped-bg": "#fbfbfb" }}>
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Currency futures</th>
                                    <th scope="col">Currency options</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" style = {{fontSize: "14.4px", color: "rgb(102, 102, 102)", fontWeight: "400"}}>Brokerage</th>
                                    <td>0.03% or ₹ 20/executed order whichever is lower</td>
                                    <td>₹ 20/executed order</td>
                                </tr>
                                <tr>
                                    <th scope="row" style = {{fontSize: "14.4px", color: "rgb(102, 102, 102)", fontWeight: "400"}}>STT/CTT</th>
                                    <td>No STT</td>
                                    <td>No STT</td>
                                </tr>
                                <tr>
                                    <th scope="row" style = {{fontSize: "14.4px", color: "rgb(102, 102, 102)", fontWeight: "400"}}>Transaction charges</th>
                                    <td>NSE: 0.00035%<br/>BSE: 0.00045%</td>
                                    <td>NSE: 0.0311%<br/>BSE: 0.001%</td>
                                </tr>
                                <tr>
                                    <th scope="row" style = {{fontSize: "14.4px", color: "rgb(102, 102, 102)", fontWeight: "400"}}>GST</th>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                </tr>
                                <tr>
                                    <th scope="row" style = {{fontSize: "14.4px", color: "rgb(102, 102, 102)", fontWeight: "400"}}>SEBI charges</th>
                                    <td>₹10 / crore</td>
                                    <td>₹10 / crore</td>
                                </tr>
                                <tr>
                                    <th scope="row" style = {{fontSize: "14.4px", color: "rgb(102, 102, 102)", fontWeight: "400"}}>Stamp charges</th>
                                    <td>0.0001% or ₹10 / crore on buy side</td>
                                    <td>0.0001% or ₹10 / crore on buy side</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="tab-pane" id="nav-contact2" role="tabpanel" aria-labelledby="nav-contact-tab2" tabindex="0">
                    <div className = "container border">
                        <table class="table table-striped table-borderless"  style={{ "--bs-table-striped-bg": "#fbfbfb" }}>
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Commodity futures</th>
                                    <th scope="col">Commodity options</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" style = {{fontSize: "14.4px", color: "rgb(102, 102, 102)", fontWeight: "400"}}>Brokerage</th>
                                    <td>0.03% or ₹ 20/executed order whichever is lower</td>
                                    <td>₹ 20/executed order</td>
                                </tr>
                                <tr>
                                    <th scope="row" style = {{fontSize: "14.4px", color: "rgb(102, 102, 102)", fontWeight: "400"}}>STT/CTT</th>
                                    <td>0.01% on sell side (Non-Agri)</td>
                                    <td>0.05% on sell side</td>
                                </tr>
                                <tr>
                                    <th scope="row" style = {{fontSize: "14.4px", color: "rgb(102, 102, 102)", fontWeight: "400"}}>Transaction charges</th>
                                    <td>MCX: 0.0021%<br/>NSE: 0.0001%</td>
                                    <td>MCX: 0.0418%<br/>NSE: 0.001%</td>
                                </tr>
                                <tr>
                                    <th scope="row" style = {{fontSize: "14.4px", color: "rgb(102, 102, 102)", fontWeight: "400"}}>GST</th>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                </tr>
                                <tr>
                                    <th scope="row" style = {{fontSize: "14.4px", color: "rgb(102, 102, 102)", fontWeight: "400"}}>SEBI charges</th>
                                    <td>Agri:<br/>₹1 / crore<br/>Non-agri:<br/>₹10 / crore</td>
                                    <td>₹10 / crore</td>
                                </tr>
                                <tr>
                                    <th scope="row" style = {{fontSize: "14.4px", color: "rgb(102, 102, 102)", fontWeight: "400"}}>Stamp charges</th>
                                    <td>0.002% or ₹200 / crore on buy side</td>
                                    <td>0.003% or ₹300 / crore on buy side</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className = "row text-center mt-4">
                <p style = {{fontSize: "20px", color: "rgb(66, 66, 66)"}}>
                    <a href = "#">Calculate your costs upfront</a> using our brokerage calculator
                </p>
            </div>
        </div>
    )
}

export default Tabs