import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
        return (
            <nav className="navbar navbar-expand-lg border-bottom bg-white sticky-top">
                <div className="container py-2">
                    <Link className="navbar-brand ms-5" to="/">
                        <img src="/images/logo.svg" style={{ width: "24.7%" }} alt="Zerodha Logo" />
                    </Link>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse me-4" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/signup">Signup</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/pricing">Pricing</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/support">Support</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

    export default Navbar