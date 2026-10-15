import { useState, useEffect, useRef } from "react"
import { NavLink, Link } from "react-router-dom"
import axios from "axios"
import { API_BASE_URL, DASHBOARD_URL, FRONTEND_URL } from "../config"

const Navbar = () => {
    const [clientId, setClientId] = useState(() => {
        const params = new URLSearchParams(window.location.search);
        const qClientId = params.get("clientId");
        if (qClientId) {
            localStorage.setItem("clientId", qClientId);
            return qClientId;
        }
        return localStorage.getItem("clientId") || "USERID";
    });

    const [userData, setUserData] = useState({
        name: localStorage.getItem("userName") || "",
        email: localStorage.getItem("userEmail") || "",
        funds: localStorage.getItem("userFunds") ? Number(localStorage.getItem("userFunds")) : 100000,
    });

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (params.get("clientId")) {
            window.history.replaceState({}, document.title, window.location.pathname);
        }

        axios.post(`${API_BASE_URL}/verify`, {}, { withCredentials: true })
            .then((res) => {
                if (res.data && res.data.status) {
                    setIsLoggedIn(true);
                    if (res.data.clientId) {
                        setClientId(res.data.clientId);
                        localStorage.setItem("clientId", res.data.clientId);
                    }
                    const name = res.data.user || "";
                    const email = res.data.email || "";
                    const funds = res.data.funds ?? 100000;
                    setUserData({ name, email, funds });
                    if (name) localStorage.setItem("userName", name);
                    if (email) localStorage.setItem("userEmail", email);
                    if (funds !== null) localStorage.setItem("userFunds", String(funds));
                } else {
                    setIsLoggedIn(false);
                }
            })
            .catch(() => {
                setIsLoggedIn(false);
            });
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = async () => {
        setIsDropdownOpen(false);
        try {
            await axios.post(`${API_BASE_URL}/logout`, {}, { withCredentials: true });
        } catch {
            // Ignore error if server is unreachable
        }
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        localStorage.removeItem("clientId");
        localStorage.removeItem("userName");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userFunds");
        window.location.href = DASHBOARD_URL;
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg border-bottom bg-white" style={{ minHeight: "45px" }}>
                <div className="container-fluid nav-container" style={{ maxWidth: "94%", paddingLeft: 0, paddingRight: 0 }}>
                    <div className="nav-indices d-flex align-items-center border-end" style={{ height: "30px", paddingLeft: "12px" }}>
                        <p className="my-auto text-nowrap" style={{ fontSize: "12px", color: "rgb(68, 68, 68)", fontWeight: "600" }}>
                            <a className="text-decoration-none text-reset" href="#">NIFTY 50</a> 22520.45
                        </p>
                        <p className="my-auto ps-1 text-nowrap" style={{ fontSize: "10.8px", fontWeight: "600", color: "rgb(155, 155, 155)" }}>
                            -23.35 (-0.10%)
                        </p>
                        <p className="my-auto ps-3 text-nowrap d-none d-md-inline" style={{ fontSize: "12px", color: "rgb(68, 68, 68)", fontWeight: "600" }}>
                            <a className="text-decoration-none text-reset" href="#">SENSEX</a>  72226.85
                        </p>
                        <p className="my-auto ps-1 pe-2 text-nowrap d-none d-md-inline" style={{ fontSize: "10.8px", fontWeight: "600", color: "rgb(155, 155, 155)" }}>
                            -242.27 (-0.33%)
                        </p>
                    </div>
                    <img className="ps-2 pe-2 nav-logo" src="/images/kite-logo.svg" style={{ width: "38px" }} alt="Kite logo" />
                    <div className="dropdown ms-2 ms-md-3 d-none d-sm-block nav-workspace-dropdown">
                        <button
                            className="btn btn-outline-secondary btn-sm dropdown-toggle d-flex justify-content-between align-items-center"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style = {{fontSize: "10.8px", color: "rgb(68, 68, 68)", width: "150px", height: "30px", backgroundColor: "#fff"}}
                        >
                            Default
                        </button>
                        <ul className="dropdown-menu shadow-sm w-100">
                            <li><a className="dropdown-item" href="#" style = {{color: "rgb(65, 132, 243)"}}><i className="fa-solid fa-plus"></i> New workspace</a></li>
                        </ul>
                    </div>
                    <button
                        className="navbar-toggler ms-auto"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#dashboardNavbar"
                        aria-controls="dashboardNavbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="dashboardNavbar">
                        <div className="navbar-nav ms-auto gap-4 align-items-center">
                            <NavLink className="nav-link" to="/" end>Dashboard</NavLink>
                            <NavLink className="nav-link" to="/orders">Orders</NavLink>
                            <NavLink className="nav-link" to="/holdings">Holdings</NavLink>
                            <NavLink className="nav-link" to="/positions">Positions</NavLink>
                            <NavLink className="nav-link" to="/funds">Funds</NavLink>
                            <div className="d-none d-lg-block" style={{ borderLeft: "1px solid #ccc", height: "24px" }}></div>
                            <Link className="nav-link" to="#"><i className="fa-solid fa-cart-shopping" style={{ fontSize: "14px" }}></i></Link>
                            <Link className="nav-link" to="#"><i className="fa-regular fa-bell" style={{ fontSize: "14px" }}></i></Link>

                            {/* Client ID Dropdown */}
                            <div className="dropdown position-relative ms-1" ref={dropdownRef}>
                                <button
                                    className="btn btn-link nav-link p-0 d-flex align-items-center gap-2 text-decoration-none border-0"
                                    type="button"
                                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                                    style={{ cursor: "pointer", color: "rgb(68, 68, 68)", background: "transparent" }}
                                    aria-expanded={isDropdownOpen}
                                >
                                    <span
                                        className="rounded-circle d-inline-flex align-items-center justify-content-center text-primary fw-semibold"
                                        style={{
                                            width: "26px",
                                            height: "26px",
                                            backgroundColor: "#eef2ff",
                                            fontSize: "11px",
                                            border: "1px solid #dbeafe",
                                        }}
                                    >
                                        {(clientId || "U").slice(0, 2).toUpperCase()}
                                    </span>
                                    <span style={{ fontSize: "12px", fontWeight: "600", color: "rgb(68, 68, 68)" }}>
                                        {clientId}
                                    </span>
                                    <i className="fa-solid fa-angle-down" style={{ fontSize: "10px", color: "rgb(155, 155, 155)" }}></i>
                                </button>

                                {isDropdownOpen && (
                                    <ul
                                        className="dropdown-menu dropdown-menu-end shadow-sm show mt-2"
                                        style={{
                                            position: "absolute",
                                            right: 0,
                                            left: "auto",
                                            minWidth: "190px",
                                            borderRadius: "6px",
                                            padding: "6px 0",
                                            zIndex: 1050,
                                        }}
                                    >
                                        <li className="px-3 py-2 border-bottom">
                                            <div className="fw-semibold text-truncate" style={{ fontSize: "12px", color: "rgb(68, 68, 68)" }}>
                                                {userData.name || "Client User"}
                                            </div>
                                            <div className="text-muted text-truncate" style={{ fontSize: "11px" }}>
                                                {userData.email || clientId}
                                            </div>
                                        </li>
                                        <li>
                                            <Link
                                                to="/profile"
                                                className="dropdown-item d-flex align-items-center gap-2 py-2"
                                                style={{ fontSize: "13px", cursor: "pointer" }}
                                                onClick={() => setIsDropdownOpen(false)}
                                            >
                                                <i className="fa-regular fa-user" style={{ width: "16px" }}></i>
                                                Profile
                                            </Link>
                                        </li>
                                        <li>
                                            {isLoggedIn ? (
                                                <button
                                                    className="dropdown-item d-flex align-items-center gap-2 py-2 text-danger"
                                                    style={{ fontSize: "13px", cursor: "pointer" }}
                                                    onClick={handleLogout}
                                                >
                                                    <i className="fa-solid fa-arrow-right-from-bracket" style={{ width: "16px" }}></i>
                                                    Logout
                                                </button>
                                            ) : (
                                                <a
                                                    href={`${FRONTEND_URL}/login`}
                                                    className="dropdown-item d-flex align-items-center gap-2 py-2 text-primary"
                                                    style={{ fontSize: "13px", cursor: "pointer" }}
                                                    onClick={() => setIsDropdownOpen(false)}
                                                >
                                                    <i className="fa-solid fa-arrow-right-to-bracket" style={{ width: "16px" }}></i>
                                                    Log in
                                                </a>
                                            )}
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar