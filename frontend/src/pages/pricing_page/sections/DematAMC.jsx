const DematAMC = () => {
    return (
        <div className = "container mt-5 pt-5 mb-5" style = {{paddingLeft: "62px", paddingRight: "55px"}}>
            <div className = "row">
                <h2 style = {{fontSize: "24px", color: "rgb(66, 66, 66)"}}>Demat AMC (Annual Maintenance Charge)</h2>
                <div class="callout-box mt-4 mb-4 ms-3">Free for first year*</div>
                <p style = {{fontSize: "12px", color: "rgb(66, 66, 66)"}}>From second year onwards, for BSDA accounts:</p>
            </div>
            <div className = "container border mt-2">
                <table class="table table-striped table-borderless"  style={{ "--bs-table-striped-bg": "#fbfbfb" }}>
                    <thead className = "border-bottom">
                        <tr>
                            <th scope="col">Value of holdings</th>
                            <th scope="col">AMC</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className = "ps-3">Up to ₹4 lakh</td>
                            <td className = "ps-3"><span class="badge badge-theme-success">FREE</span></td>
                        </tr>
                        <tr>
                            <td className = "ps-3">₹4 lakh – ₹10 lakh</td>
                            <td className = "ps-3">₹100 per year + 18% GST, charged quarterly</td>
                        </tr>
                        <tr>
                            <td className = "ps-3">Above ₹10 lakh</td>
                            <td className = "ps-3">₹300 per year + 18% GST, charged quarterly</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className = "row mt-3">
                <p style = {{fontSize: "12px", color: "rgb(66, 66, 66)"}}>
                    For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless of holdings value, charged quarterly.<br/><br/>
                    To learn more about BSDA, <a href = "#">click here</a>. To learn more about AMC, <a href = "#">click here</a>.<br/><br/>
                    *Resident individual accounts only.
                </p>
            </div>
        </div>
    )
}

export default DematAMC