const Charges = () => {
    return (
        <div className = "container mt-5 pt-5 mb-5" style = {{paddingLeft: "62px", paddingRight: "55px"}}>
            <div className = "row">
                <h2 style = {{fontSize: "24px", color: "rgb(66, 66, 66)"}}>Charges for account opening</h2>
            </div>
            <div className = "container border mt-3">
                <table class="table table-striped table-borderless"  style={{ "--bs-table-striped-bg": "#fbfbfb" }}>
                    <thead className = "border-bottom">
                        <tr>
                            <th scope="col">Type of account</th>
                            <th scope="col">Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className = "ps-3">Individual account</td>
                            <td className = "ps-3"><span class="badge badge-theme-success">FREE</span></td>
                        </tr>
                        <tr>
                            <td className = "ps-3">Minor account</td>
                            <td className = "ps-3"><span class="badge badge-theme-success">FREE</span></td>
                        </tr>
                        <tr>
                            <td className = "ps-3">NRI account</td>
                            <td className = "ps-3">	₹ 500</td>
                        </tr>
                        <tr>
                            <td className = "ps-3">HUF account</td>
                            <td className = "ps-3"><span class="badge badge-theme-success">FREE</span> (online) / ₹ 500 (offline)</td>
                        </tr>
                        <tr>
                            <td className = "ps-3">Partnership, LLP, and Corporate accounts (offline only)</td>
                            <td className = "ps-3">₹ 500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Charges