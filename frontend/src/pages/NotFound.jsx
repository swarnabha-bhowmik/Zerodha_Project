import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className = "container p-5 mt-5">
            <div className = "row text-center">
                <h1 className = "mt-5 fs-4">404<br/>Page Not Found</h1>
                <p className = "mb-3 text-muted fs-6 mt-3">Sorry, the page you were looking for does not exist.</p>
                <Link to = "/" className = "mt-4 p-2 fs-5 btn btn-primary btn-hero">Go Home</Link>
            </div>
        </div>
    )
}

export default NotFound