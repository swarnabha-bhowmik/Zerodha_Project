import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer style = {{backgroundColor: "#FBFBFB"}}>
            <div className = "container border-top mt-5">
                <div className = "row mt-4">
                    <div className = "col-12 col-lg-4 mb-4 mb-lg-0 footer-logo">
                        <img src = "/images/logo.svg" style = {{width: "140px", maxWidth: "100%" }} alt="Zerodha Logo"/>
                        <p className = "text-muted mt-3 footer-img-p">&copy; 2010 - 2026, Zerodha Broking Ltd.<br/>All rights reserved</p>
                        <div className = "footer-logo-icons mb-4">
                            <a href = "#"><img src = "/images/twitter.png" alt = "Twitter / X" /></a>
                            <a href = "#"><img src = "/images/fb.png" alt = "Facebook" /></a>
                            <a href = "#"><img src = "/images/instagram.png" alt = "Instagram" /></a>
                            <a href = "#"><img src = "/images/linkedin.png" alt = "LinkedIn" /></a>
                        </div>
                        <div className = "border-top pt-4 footer-logo-icons">
                            <a href = "#"><img src = "/images/youtube.png" /></a>
                            <a href = "#"><img src = "/images/whatsapp.png" /></a>
                            <a href = "#"><img src = "/images/telegram.png" /></a>
                        </div>
                        <div className = "mt-4 d-flex align-items-center gap-3">
                            <a href = "#"><img src = "/images/googlePlayBadge.svg" alt = "Google Play" style = {{ height: "35px" }}/></a>
                            <a href = "#"><img src = "/images/appstoreBadge.svg" alt = "App Store" style = {{ height: "35px" }}/></a>
                        </div>
                    </div>
                    <div className = "col-6 col-sm-6 col-md-3 col-lg-2 mb-4 mb-lg-0">
                        <ul className = "list-unstyled">
                            <li>Account</li>
                            <li className = "mt-3"><Link to = "/signup" className = "text-muted">Open demat account</Link></li>
                            <li className = "mt-3"><Link to = "#" className = "text-muted">Minor demat account</Link></li>
                            <li className = "mt-3"><Link to = "#" className = "text-muted">NRI demat account</Link></li>
                            <li className = "mt-3"><Link to = "#" className = "text-muted">HUF demat account</Link></li>
                            <li className = "mt-3"><Link to = "#" className = "text-muted">Commodity</Link></li>
                            <li className = "mt-3"><Link to = "#" className = "text-muted">Dematerialization</Link></li>
                            <li className = "mt-3"><Link to = "#" className = "text-muted">Fund Transfer</Link></li>
                            <li className = "mt-3"><Link to = "#" className = "text-muted">MTF</Link></li>
                        </ul>
                    </div>
                    <div className = "col-6 col-sm-6 col-md-3 col-lg-2 mb-4 mb-lg-0">
                        <ul className = "list-unstyled">
                            <li>Support</li>
                            <li className = "mt-3"><Link to = "/support" className = "text-muted">Contact us</Link></li>
                            <li className = "mt-3"><Link to = "/support" className = "text-muted">Support portal</Link></li>
                            <li className = "mt-3"><Link to = "#" className = "text-muted">How to file a complaint?</Link></li>
                            <li className = "mt-3"><Link to = "#" className = "text-muted">Status of your complaints</Link></li>
                            <li className = "mt-3"><Link to = "#" className = "text-muted">Bulletin</Link></li>
                            <li className = "mt-3"><Link to = "#" className = "text-muted">Circular</Link></li>
                            <li className = "mt-3"><Link to = "#" className = "text-muted">Z-Connect blog</Link></li>
                            <li className = "mt-3"><Link to = "#" className = "text-muted">Downloads</Link></li>
                        </ul>
                    </div>
                    <div className = "col-6 col-sm-6 col-md-3 col-lg-2 mb-4 mb-lg-0">
                        <ul className = "list-unstyled">
                            <li>Company</li>
                            <li className = "mt-3"><Link to = "/about" className = "text-muted">About</Link></li>
                            <li className = "mt-3"><Link to = "/about" className = "text-muted">Philosophy</Link></li>
                            <li className = "mt-3"><Link to = "#" className = "text-muted">Press & media</Link></li>
                            <li className = "mt-3"><Link to = "#" className = "text-muted">Careers</Link></li>
                            <li className = "mt-3"><Link to = "#" className = "text-muted">Zerodha Cares (CSR) </Link></li>
                            <li className = "mt-3"><Link to = "#" className = "text-muted">Zerodha.tech</Link></li>
                            <li className = "mt-3"><Link to = "#" className = "text-muted">Open Source</Link></li>
                            <li className = "mt-3"><Link to = "#" className = "text-muted">Referral program</Link></li>
                        </ul>
                    </div>
                    <div className = "col-6 col-sm-6 col-md-3 col-lg-2 mb-4 mb-lg-0">
                        <ul className = "list-unstyled">
                            <li>Quick Links</li>
                            <li className = "mt-3"><Link to = "#" className = "text-muted">Upcoming IPOs</Link></li>
                            <li className = "mt-3"><Link to = "/pricing" className = "text-muted">Brokerage charges</Link></li>
                            <li className = "mt-3"><Link to = "#" className = "text-muted">Market holidays</Link></li>
                            <li className = "mt-3"><Link to = "#" className = "text-muted">Economic calender</Link></li>
                            <li className = "mt-3"><Link to = "#" className = "text-muted">Calculators</Link></li>
                            <li className = "mt-3"><Link to = "#" className = "text-muted">Markets</Link></li>
                            <li className = "mt-3"><Link to = "#" className = "text-muted">Sectors</Link></li>
                            <li className = "mt-3"><Link to = "#" className = "text-muted">Gift Nifty</Link></li>
                        </ul>
                    </div>
                </div>
                <div className = "mt-4 mt-md-5 px-2 px-md-4">
                    <p className = "footer-p">Zerodha Broking Limited: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Limited – SEBI Registration no.: IN-DP-431-2019, CIN: U65929KA2018PLC116815, Registered Address: #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href = "#">complaints@zerodha.com</a>, for DP related to <a href = "#">dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF<br /><br />

            Procedure to file a complaint on <a href = "#">SEBI SCORES/SMARTODR</a>: Register on SCORES portal & SMARTODR. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of grievances<br/><br />

            <a href = "#">Smart Online Dispute Resolution</a> | <a href = "#">Grievances Redressal Mechanism</a> | <a href = "#">Project Jagrook by SEBI</a><br/><br/>

            Investments in securities market are subject to market risks; read all the related documents carefully before investing.<br/><br/>

            Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.<br/><br/>

            India's largest broker based on networth as per NSE. <a href = "#">NSE broker factsheet</a><br/><br/>

            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href = "#">create a ticket here</a>.<br/><br/>

            *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.<br/><br/>

            Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer