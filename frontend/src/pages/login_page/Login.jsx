import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL, DASHBOARD_URL } from "../../config";

const Login = () => {
    // Step 1: "credentials", Step 2: "2fa"
    const [step, setStep] = useState("credentials");

    const [formData, setFormData] = useState({
        identifier: "", // Email or Client ID
        password: "",
        pin: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [authenticatedUser, setAuthenticatedUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Step 1: Submit Password / Credentials
    const handleCredentialsSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setLoading(true);

        try {
            const response = await axios.post(
                `${API_BASE_URL}/login`,
                {
                    identifier: formData.identifier,
                    password: formData.password,
                },
                { withCredentials: true }
            );

            const data = response.data;

            if (!data.success) {
                throw new Error(data.message || "Failed to log in.");
            }

            // Case A: User has 2FA enabled -> move to Step 2 (PIN entry)
            if (data.requires2FA) {
                setAuthenticatedUser(data.user);
                setStep("2fa");
                setError("");
                return;
            }

            // Case B: User has no PIN configured -> logged in directly via password
            setSuccess(`Welcome back, ${data.user?.fullName || "trader"}! Redirecting to Kite...`);
            setTimeout(() => {
                window.location.href = `${DASHBOARD_URL}?clientId=${data.user?.clientId || ""}`;
            }, 1200);
        } catch (err) {
            setError(err.response?.data?.message || err.message || "Invalid credentials. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // Step 2: Submit 2FA PIN
    const handlePinSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!/^\d{6}$/.test(formData.pin)) {
            setError("Kite PIN must be exactly 6 digits.");
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post(
                `${API_BASE_URL}/login`,
                {
                    identifier: formData.identifier,
                    password: formData.password,
                    pin: formData.pin,
                },
                { withCredentials: true }
            );

            const data = response.data;

            if (!data.success) {
                throw new Error(data.message || "2FA verification failed.");
            }

            setSuccess(`2FA Verified! Welcome, ${data.user?.fullName || "trader"}. Redirecting to Kite...`);
            setTimeout(() => {
                window.location.href = `${DASHBOARD_URL}?clientId=${data.user?.clientId || ""}`;
            }, 1200);
        } catch (err) {
            setError(err.response?.data?.message || err.message || "Incorrect PIN. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleBackToLogin = () => {
        setStep("credentials");
        setFormData((prev) => ({ ...prev, pin: "" }));
        setError("");
        setSuccess("");
    };

    return (
        <div className="container mt-5 pt-4 pb-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-10 col-md-8 col-lg-5">
                    {/* Header Logo */}
                    <div className="text-center mb-4">
                        <img
                            src="/images/kite-logo.svg"
                            alt="Kite Logo"
                            style={{ width: "45px" }}
                            className="mb-3"
                        />
                        <h1 style={{ fontSize: "24px", color: "rgb(66, 66, 66)", fontWeight: "600" }}>
                            {step === "credentials" ? "Login to Kite" : "Two-factor authentication"}
                        </h1>
                        <p className="text-muted small">
                            {step === "credentials"
                                ? "Zerodha demo trading & demat account"
                                : "Enter your 6-digit security PIN to continue"}
                        </p>
                    </div>

                    {/* Login Card */}
                    <div className="p-4 p-md-5 border rounded-3 shadow-sm bg-white">
                        {error && (
                            <div className="alert alert-danger py-2 small" role="alert">
                                {error}
                            </div>
                        )}

                        {success && (
                            <div className="alert alert-success py-2 small" role="alert">
                                {success}
                            </div>
                        )}

                        {/* STEP 1: Email/Client ID and Password */}
                        {step === "credentials" && (
                            <form onSubmit={handleCredentialsSubmit}>
                                <div className="mb-3">
                                    <label className="form-label small text-muted mb-1">
                                        Client ID or Email
                                    </label>
                                    <input
                                        type="text"
                                        name="identifier"
                                        className="form-control py-2"
                                        placeholder="e.g. ZR5821 or user@example.com"
                                        value={formData.identifier}
                                        onChange={handleChange}
                                        required
                                        autoFocus
                                    />
                                </div>

                                <div className="mb-4">
                                    <div className="d-flex justify-content-between align-items-center mb-1">
                                        <label className="form-label small text-muted mb-0">Password</label>
                                        <button
                                            type="button"
                                            className="btn btn-link p-0 text-decoration-none small text-muted"
                                            style={{ fontSize: "12px" }}
                                            onClick={() => setShowPassword((prev) => !prev)}
                                        >
                                            {showPassword ? "Hide" : "Show"}
                                        </button>
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        className="form-control py-2"
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="d-grid mb-4">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-hero py-2 fs-6 fw-medium w-100"
                                        disabled={loading}
                                    >
                                        {loading ? "Verifying..." : "Login"}
                                    </button>
                                </div>

                                <div className="text-center pt-2 border-top">
                                    <p className="text-muted small mb-0">
                                        Don&apos;t have an account?{" "}
                                        <Link to="/signup" className="text-primary fw-medium text-decoration-none">
                                            Sign up for free
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        )}

                        {/* STEP 2: 2FA 6-Digit PIN */}
                        {step === "2fa" && (
                            <form onSubmit={handlePinSubmit}>
                                {authenticatedUser && (
                                    <div className="d-flex align-items-center justify-content-center gap-3 p-3 mb-4 rounded-3 bg-light border">
                                        <span
                                            className="rounded-circle d-flex align-items-center justify-content-center text-primary fw-bold"
                                            style={{
                                                width: "42px",
                                                height: "42px",
                                                backgroundColor: "#eef2ff",
                                                fontSize: "16px",
                                                border: "1px solid #c7d2fe",
                                            }}
                                        >
                                            {(authenticatedUser.clientId || "U").slice(0, 2).toUpperCase()}
                                        </span>
                                        <div className="text-start">
                                            <div className="fw-semibold text-dark" style={{ fontSize: "14px" }}>
                                                {authenticatedUser.fullName || "User"}
                                            </div>
                                            <div className="text-muted small">
                                                Client ID: <strong>{authenticatedUser.clientId}</strong>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="mb-4 text-center">
                                    <label className="form-label small text-muted mb-2 d-block">
                                        Enter your 6-digit Kite PIN
                                    </label>
                                    <input
                                        type="password"
                                        name="pin"
                                        className="form-control form-control-lg text-center fw-bold py-2"
                                        style={{ letterSpacing: "8px", fontSize: "20px" }}
                                        placeholder="••••••"
                                        maxLength="6"
                                        value={formData.pin}
                                        onChange={handleChange}
                                        required
                                        autoFocus
                                    />
                                    <small className="text-muted d-block mt-2" style={{ fontSize: "11px" }}>
                                        Default PIN: 123456 (or the PIN you set in Profile)
                                    </small>
                                </div>

                                <div className="d-grid gap-2 mb-3">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-hero py-2 fs-6 fw-medium w-100"
                                        disabled={loading}
                                    >
                                        {loading ? "Authenticating..." : "Continue"}
                                    </button>

                                    <button
                                        type="button"
                                        className="btn btn-light py-2 small text-muted border-0"
                                        onClick={handleBackToLogin}
                                        disabled={loading}
                                    >
                                        <i className="fa-solid fa-arrow-left me-1"></i> Switch account
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>

                    <div className="text-center mt-4">
                        <Link to="/" className="text-muted small text-decoration-none">
                            <i className="fa-solid fa-house me-1"></i> Back to Zerodha Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
