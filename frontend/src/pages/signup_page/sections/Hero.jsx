import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL, DASHBOARD_URL } from "../../../config";

const Hero = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        pin: "",
    });
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setLoading(true);

        try
        {
            const response = await axios.post(
                `${API_BASE_URL}/signup`,
                {
                    user: {
                        fullName: formData.fullName,
                        email: formData.email,
                        phone: formData.phone,
                        password: formData.password,
                        pin: formData.pin || "123456",
                    },
                },
                {
                    withCredentials: true,
                }
            );

            const data = response.data;

            if (!data.success) {
                throw new Error(data.message || "Failed to sign up.");
            }

            if (data.token) {
                localStorage.setItem("authToken", data.token);
            }
            if (data.user?.clientId) {
                localStorage.setItem("clientId", data.user.clientId);
            }
            if (data.user?.fullName) {
                localStorage.setItem("userName", data.user.fullName);
            }

            setSuccess(`Account created successfully! Your Client ID is ${data.user?.clientId || "generated"}. ₹1,00,000 demo funds credited. Redirecting to Kite...`);
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                password: "",
                pin: "",
            });

            setTimeout(() => {
                const tokenParam = data.token ? `&token=${encodeURIComponent(data.token)}` : "";
                window.location.href = `${DASHBOARD_URL}?clientId=${data.user?.clientId || ""}${tokenParam}`;
            }, 1200);
        }
        catch (err)
        {
            setError(err.response?.data?.message || err.message || "An unexpected error occurred. Please try again.");
        }
        finally
        {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-5 pt-5 mb-5">
            <div className="row text-center">
                <h1 style={{ fontSize: "28px", color: "rgb(66, 66, 66)", lineHeight: "35px" }}>
                    Open a free demat and trading account online
                </h1>
                <p className="mt-2" style={{ fontSize: "20px", color: "rgb(102, 102, 102)" }}>
                    Start investing brokerage free and join a community of 1.8+ crore investors and traders
                </p>
            </div>
            <div className="row my-5 justify-content-center">
                <div className="col-12 col-md-10 col-lg-8">
                    <div className="p-4 p-md-5 border rounded-3 shadow-sm bg-white">
                        <div className="text-center mb-4">
                            <h2 className="fs-3 fw-semibold mb-1" style={{ color: "rgb(66, 66, 66)" }}>Signup now</h2>
                            <p className="text-muted small mb-0">
                                Create your account to start trading. Already registered?{" "}
                                <Link to="/login" className="text-primary fw-medium text-decoration-none">
                                    Log in here
                                </Link>
                            </p>
                        </div>

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

                        <form onSubmit={handleSubmit}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label small text-muted mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        className="form-control py-2"
                                        placeholder="e.g. Rahul Sharma"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label small text-muted mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control py-2"
                                        placeholder="name@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label small text-muted mb-1">Mobile Number</label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-light text-muted small">+91</span>
                                        <input
                                            type="tel"
                                            name="phone"
                                            className="form-control py-2"
                                            placeholder="10-digit number"
                                            maxLength="10"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label small text-muted mb-1">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control py-2"
                                        placeholder="Create password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="col-12">
                                    <label className="form-label small text-muted mb-1">6-digit Kite PIN (2FA)</label>
                                    <input
                                        type="password"
                                        name="pin"
                                        className="form-control py-2"
                                        placeholder="Optional (default: 123456)"
                                        maxLength="6"
                                        value={formData.pin}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <p className="text-muted mt-3 mb-4 text-center" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                                By signing up, you agree to receive account notifications and accept our terms and conditions.
                            </p>

                            <div className="d-flex justify-content-center">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-hero px-5 py-2 fs-6 fw-medium"
                                    style={{
                                        minWidth: "220px",
                                        width: "auto",
                                    }}
                                    disabled={loading}
                                >
                                    {loading ? "Creating Account..." : "Continue"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="row text-center">
                <h1 style={{ fontSize: "24px", color: "rgb(66, 66, 66)", lineHeight: "36px" }}>
                    Already have a demat account?
                </h1>
                <p className="mt-2" style={{ fontSize: "16px", color: "rgb(102, 102, 102)" }}>
                    Move your holdings to Zerodha and we'll cover your transfer costs, up to ₹500, <a href="#">learn more</a>.
                </p>
            </div>
        </div>
    );
};

export default Hero;