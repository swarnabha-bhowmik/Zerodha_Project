import { Link } from 'react-router-dom'

const OpenAccount = ({ onSignUpClick }) => {
    const handleSignUpClick = (e) => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        if (onSignUpClick) {
            onSignUpClick(e);
        }
    };

    return (
        <div className = "container p-5 mt-5">
            <div className = "row text-center">
                <h1 className = "mt-5 fs-4">Open a Zerodha account</h1>
                <p className = "mb-3 text-muted fs-6 mt-3">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <Link 
                    to = "/signup" 
                    onClick = {handleSignUpClick} 
                    className = "mt-4 p-2 fs-5 btn btn-primary btn-hero"
                >
                    Sign up for free
                </Link>
            </div>
        </div>
    )
}

export default OpenAccount