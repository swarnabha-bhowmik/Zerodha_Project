import { useState } from "react"
import { Link } from "react-router-dom"

const supportData = [
    {
        id: "account-opening",
        title: "Account Opening",
        icon: "fa-solid fa-user-plus",
        links: [
            "Resident individual",
            "Minor",
            "Non Resident Indian (NRI)",
            "Company, Partnership, HUF and LLP",
            "Glossary"
        ]
    },
    {
        id: "your-account",
        title: "Your Zerodha Account",
        icon: "fa-regular fa-circle-user",
        links: [
            "Your Profile",
            "Account modification",
            "Client Master Report (CMR) and Depository Participant (DP)",
            "Nomination",
            "Transfer and conversion of securities"
        ]
    },
    {
        id: "kite",
        title: "Kite",
        icon: "fa-solid fa-chart-line",
        links: [
            "IPO",
            "Trading FAQs",
            "Margin Trading Facility (MTF) and Margins",
            "Charts and orders",
            "Alerts and Nudges",
            "General"
        ]
    },
    {
        id: "funds",
        title: "Funds",
        icon: "fa-solid fa-indian-rupee-sign",
        links: [
            "Add money",
            "Withdraw money",
            "Add bank accounts",
            "eMandates"
        ]
    },
    {
        id: "console",
        title: "Console",
        icon: "fa-solid fa-chart-pie",
        links: [
            "Portfolio",
            "Corporate actions",
            "Funds statement",
            "Reports",
            "Profile",
            "Segments"
        ]
    },
    {
        id: "coin",
        title: "Coin",
        icon: "fa-solid fa-coins",
        links: [
            "Mutual funds",
            "National Pension Scheme (NPS)",
            "Fixed Deposit (FD)",
            "Features on Coin",
            "Payments and Orders",
            "General"
        ]
    }
]

const quickLinks = [
    { text: "1. Track account opening", href: "/signup" },
    { text: "2. Track segment activation", href: "#" },
    { text: "3. Intraday margins", href: "#" },
    { text: "4. Kite user manual", href: "#" },
    { text: "5. Learn how to create a ticket", href: "#" }
]

const featuredBulletins = [
    { text: "Current Takeovers and Delisting – October 2026", href: "#" },
    { text: "Latest Intraday leverages and Square-off timings", href: "#" }
]

const Dropdowns = () => {
    const [openIndices, setOpenIndices] = useState({})

    const toggleDropdown = (index) => {
        setOpenIndices(prev => ({
            ...prev,
            [index]: !prev[index]
        }))
    }

    return (
        <section className="container mt-4 mb-5 pt-3">
            {/* Mobile Featured Alert (visible only on small screens) */}
            <div className="d-lg-none support-featured-banner">
                <ul className="mb-0">
                    {featuredBulletins.map((bulletin, idx) => (
                        <li key={idx}>
                            <Link to={bulletin.href}>{bulletin.text}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="row g-4">
                {/* Left Column: Dropdown Accordions */}
                <div className="col-12 col-lg-8">
                    {supportData.map((item, index) => {
                        const isOpen = !!openIndices[index]
                        return (
                            <div key={item.id} className="support-dropdown-item">
                                <div
                                    className={`support-dropdown-header ${isOpen ? "is-open" : ""}`}
                                    onClick={() => toggleDropdown(index)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") {
                                            e.preventDefault()
                                            toggleDropdown(index)
                                        }
                                    }}
                                    role="button"
                                    tabIndex={0}
                                    aria-expanded={isOpen}
                                >
                                    <div className="support-dropdown-icon-box">
                                        <i className={item.icon} aria-hidden="true"></i>
                                    </div>
                                    <h2 className="support-dropdown-title">
                                        {item.title}
                                    </h2>
                                    <div className={`support-dropdown-chevron ${isOpen ? "rotated" : ""}`}>
                                        <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
                                    </div>
                                </div>

                                {isOpen && (
                                    <div className="support-dropdown-body">
                                        <ul className="support-dropdown-list">
                                            {item.links.map((linkText, linkIdx) => (
                                                <li key={linkIdx}>
                                                    <Link to="#">
                                                        {linkText}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>

                {/* Right Column: Featured Bulletin & Quick Links */}
                <div className="col-12 col-lg-4">
                    {/* Desktop Featured Alert */}
                    <div className="d-none d-lg-block support-featured-banner">
                        <ul className="mb-0">
                            {featuredBulletins.map((bulletin, idx) => (
                                <li key={idx}>
                                    <Link to={bulletin.href}>{bulletin.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick links card */}
                    <div className="support-quicklinks-box">
                        <div className="support-quicklinks-header">
                            Quick links
                        </div>
                        {quickLinks.map((item, idx) => (
                            <Link key={idx} to={item.href} className="support-quicklink-item">
                                {item.text}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dropdowns