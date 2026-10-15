const ChargesAdded = () => {
    return (
        <div className = "container mt-5 pt-5 mb-5" style = {{paddingLeft: "62px", paddingRight: "55px"}}>
            <div className = "row">
                <h2 style = {{fontSize: "24px", color: "rgb(66, 66, 66)"}}>Charges for optional value added services</h2>
            </div>
            <div className = "container border mt-3">
                <table class="table table-striped table-borderless"  style={{ "--bs-table-striped-bg": "#fbfbfb" }}>
                    <thead className = "border-bottom">
                        <tr>
                            <th scope="col">Service</th>
                            <th scope="col">Billing Frequency</th>
                            <th scope="col">Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className = "ps-3">Tickertape</td>
                            <td className = "ps-3">Monthly / Quarterly / Annual</td>
                            <td className = "ps-3">Free: 0 | Pro: 249/699/2399</td>
                        </tr>
                        <tr>
                            <td className = "ps-3">Smallcase</td>
                            <td className = "ps-3">Per transaction</td>
                            <td className = "ps-3">Buy & Invest More: 100 | SIP: 10</td>
                        </tr>
                        <tr>
                            <td className = "ps-3">Kite Connect</td>
                            <td className = "ps-3">	Monthly</td>
                            <td className = "ps-3">Connect: 500 | Personal: Free</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ChargesAdded