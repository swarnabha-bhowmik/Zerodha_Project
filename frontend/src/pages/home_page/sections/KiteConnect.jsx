import { Link } from 'react-router-dom'

const KiteConnect = () => {
    return (
        <div className = "kite-bg mt-4">
            <div className = "container d-flex align-items-center justify-content-between gap-4 py-5">
                <img src = "/images/kc-logo-landing.svg" />
                <span>
                    <p className = "text-muted mb-0 kite-p">Need more? Build your own trading and investing experience with Kite Connect, simple HTTP APIs to place orders, stream market data, manage your account, and more. <Link to = "/products">Explore <i className="fa-solid fa-arrow-right stats-i"></i></Link></p>
                </span>
                <img src = "/images/kc-banner-image.svg" />
            </div>
        </div>
    )
}

export default KiteConnect