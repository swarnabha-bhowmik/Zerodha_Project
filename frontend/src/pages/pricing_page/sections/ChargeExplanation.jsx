const ChargeExplanation = () => {
    return (
        <div className = "container mt-5 pt-4 mb-5 pb-4" style = {{paddingLeft: "62px", paddingRight: "55px"}}>
            <div className = "row">
                <h2 style = {{fontSize: "24px", color: "rgb(66, 66, 66)"}}>Charges explained</h2>
            </div>
            <div className = "row mt-4 pt-2">
                <div className = "col-6">
                    <p style = {{fontSize: "16px", color: "rgb(66, 66, 66)"}}>Securities/Commodities transaction tax</p>
                    <p className = "mt-3" style = {{fontSize: "12px", color: "rgb(66, 66, 66)", lineHeight: "21.6px"}}>
                        Tax by the government when transacting on the exchanges. Charged as above on both buy<br/>and sell sides when trading equity delivery. Charged only on selling side when trading<br/>intraday or on F&O.<br/><br/>
                        When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge.<br/>Important to keep a tab.
                    </p>
                    <p style = {{fontSize: "16px", color: "rgb(66, 66, 66)"}}>Transaction/Turnover Charges</p>
                    <p className = "mt-3" style = {{fontSize: "12px", color: "rgb(66, 66, 66)", lineHeight: "21.6px"}}>
                        Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.<br/><br/>
                        BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore<br/>w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)<br/><br/>
                        BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross<br/>turnover.<br/><br/>
                        BSE has revised transaction charges for group A, B and other non exclusive scrips (non-<br/>exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate<br/>basis w.e.f. December 1, 2022.<br/><br/>
                        BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross<br/>turnover.
                    </p>
                    <p style = {{fontSize: "16px", color: "rgb(66, 66, 66)"}}>Call & trade</p>
                    <p className = "mt-3" style = {{fontSize: "12px", color: "rgb(66, 66, 66)", lineHeight: "21.6px"}}>
                        Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including<br/>auto square off orders.
                    </p>
                    <p style = {{fontSize: "16px", color: "rgb(66, 66, 66)"}}>Stamp charges</p>
                    <p className = "mt-3" style = {{fontSize: "12px", color: "rgb(66, 66, 66)", lineHeight: "21.6px"}}>
                        Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for<br/>transacting in instruments on the stock exchanges and depositories.
                    </p>
                    <p style = {{fontSize: "16px", color: "rgb(66, 66, 66)"}}>NRI brokerage charges</p>
                    <ul>
                        <li style = {{fontSize: "12px", color: "rgb(66, 66, 66)", lineHeight: "21.6px", fontWeight: "400"}}>
                            For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is<br/>lower).
                        </li>
                        <li style = {{fontSize: "12px", color: "rgb(66, 66, 66)", lineHeight: "21.6px", fontWeight: "400"}}>
                            For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).
                        </li>
                        <li style = {{fontSize: "12px", color: "rgb(66, 66, 66)", lineHeight: "21.6px", fontWeight: "400"}}>
                            ₹500 + GST as yearly account maintenance charges (AMC) charges.
                        </li>
                    </ul>
                    <p style = {{fontSize: "16px", color: "rgb(66, 66, 66)"}}>Account with debit balance</p>
                    <p className = "mt-3" style = {{fontSize: "12px", color: "rgb(66, 66, 66)", lineHeight: "21.6px"}}>
                        Accounts with a debit balance will be charged an additional ₹20 per executed order.
                    </p>
                    <p style = {{fontSize: "16px", color: "rgb(66, 66, 66)"}}>Charges for Investor's Protection Fund Trust (IPFT) by NSE</p>
                    <ul>
                        <li style = {{fontSize: "12px", color: "rgb(66, 66, 66)", lineHeight: "21.6px", fontWeight: "400"}}>
                            Equity and Futures - ₹0.01 per crore + GST of the traded value.
                        </li>
                        <li style = {{fontSize: "12px", color: "rgb(66, 66, 66)", lineHeight: "21.6px", fontWeight: "400"}}>
                            Options - ₹0.01 per crore + GST traded value (premium value).
                        </li>
                        <li style = {{fontSize: "12px", color: "rgb(66, 66, 66)", lineHeight: "21.6px", fontWeight: "400"}}>
                            Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of<br/>premium for Options.
                        </li>
                    </ul>
                    <p style = {{fontSize: "16px", color: "rgb(66, 66, 66)"}}>Margin Trading Facility (MTF)</p>
                    <ul>
                        <li style = {{fontSize: "12px", color: "rgb(66, 66, 66)", lineHeight: "21.6px", fontWeight: "400"}}>
                            MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied<br/>from T+1 day until the day MTF stocks are sold.
                        </li>
                        <li style = {{fontSize: "12px", color: "rgb(66, 66, 66)", lineHeight: "21.6px", fontWeight: "400"}}>
                            MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.
                        </li>
                        <li style = {{fontSize: "12px", color: "rgb(66, 66, 66)", lineHeight: "21.6px", fontWeight: "400"}}>
                            MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.
                        </li>
                    </ul>
                </div>
                <div className = "col-6">
                    <p style = {{fontSize: "16px", color: "rgb(66, 66, 66)"}}>GST</p>
                    <p className = "mt-3" style = {{fontSize: "12px", color: "rgb(66, 66, 66)", lineHeight: "21.6px"}}>
                        Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges<br/>+ transaction charges)
                    </p>
                    <p style = {{fontSize: "16px", color: "rgb(66, 66, 66)"}}>SEBI Charges</p>
                    <p className = "mt-3" style = {{fontSize: "12px", color: "rgb(66, 66, 66)", lineHeight: "21.6px"}}>
                        Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the<br/>markets.
                    </p>
                    <p style = {{fontSize: "16px", color: "rgb(66, 66, 66)"}}>DP (Depository participant) charges</p>
                    <p className = "mt-3" style = {{fontSize: "12px", color: "rgb(66, 66, 66)", lineHeight: "21.6px"}}>
                        ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading<br/>account ledger when stocks are sold, irrespective of quantity.<br/><br/>
                        Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction<br/>on the CDSL fee.<br/><br/>
                        Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.
                    </p>
                    <p style = {{fontSize: "16px", color: "rgb(66, 66, 66)"}}>Pledging charges</p>
                    <p className = "mt-3" style = {{fontSize: "12px", color: "rgb(66, 66, 66)", lineHeight: "21.6px"}}>
                        ₹30 + GST per pledge request per ISIN.
                    </p>
                    <p style = {{fontSize: "16px", color: "rgb(66, 66, 66)"}}>AMC (Account maintenance charges)</p>
                    <p className = "mt-3" style = {{fontSize: "12px", color: "rgb(66, 66, 66)", lineHeight: "21.6px"}}>
                        Free for the first year on all new resident individual accounts.<br/><br/>
                        For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn<br/>more about BSDA, <a href = "#">Click here</a><br/><br/>
                        For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn<br/>more about AMC, <a href = "#">Click here</a>
                    </p>
                    <p style = {{fontSize: "16px", color: "rgb(66, 66, 66)"}}>Corporate action order charges</p>
                    <p className = "mt-3" style = {{fontSize: "12px", color: "rgb(66, 66, 66)", lineHeight: "21.6px"}}>
                        ₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through<br/>Console.
                    </p>
                    <p style = {{fontSize: "16px", color: "rgb(66, 66, 66)"}}>Off-market transfer charges</p>
                    <p className = "mt-3" style = {{fontSize: "12px", color: "rgb(66, 66, 66)", lineHeight: "21.6px"}}>
                        ₹25 per transaction.
                    </p>
                    <p style = {{fontSize: "16px", color: "rgb(66, 66, 66)"}}>Physical CMR request</p>
                    <p className = "mt-3" style = {{fontSize: "12px", color: "rgb(66, 66, 66)", lineHeight: "21.6px"}}>
                        First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.
                    </p>
                    <p style = {{fontSize: "16px", color: "rgb(66, 66, 66)"}}>Payment gateway charges</p>
                    <p className = "mt-3" style = {{fontSize: "12px", color: "rgb(66, 66, 66)", lineHeight: "21.6px"}}>
                        ₹9 + GST (Not levied on transfers done via UPI)
                    </p>
                    <p style = {{fontSize: "16px", color: "rgb(66, 66, 66)"}}>Delayed Payment Charges</p>
                    <p className = "mt-3" style = {{fontSize: "12px", color: "rgb(66, 66, 66)", lineHeight: "21.6px"}}>
                        Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading<br/>account. <a href = "#">Learn more.</a>
                    </p>
                    <p style = {{fontSize: "16px", color: "rgb(66, 66, 66)"}}>Trading using 3-in-1 account with block functionality</p>
                    <ul>
                        <li style = {{fontSize: "12px", color: "rgb(66, 66, 66)", lineHeight: "21.6px", fontWeight: "400"}}>
                            Delivery & MTF Brokerage: 0.5% per executed order.
                        </li>
                        <li style = {{fontSize: "12px", color: "rgb(66, 66, 66)", lineHeight: "21.6px", fontWeight: "400"}}>
                            Intraday Brokerage: 0.05% per executed order.
                        </li>
                    </ul>
                </div>
            </div>
            <div className = "row mt-3">
                <p style = {{fontSize: "16px", color: "rgb(66, 66, 66)"}}>Disclaimer</p>
                <p style = {{fontSize: "12px", color: "rgb(66, 66, 66)", lineHeight: "21.6px"}}>
                    For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note<br/>plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is<br/>also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts,<br/>and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical<br/>delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.
                </p>
            </div>
        </div>
    )
}

export default ChargeExplanation