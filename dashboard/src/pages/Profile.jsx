import { useState, useEffect } from "react";
import axios from "axios";
import StockSection from "../components/StockSection";

const Profile = () => {
    const [profile, setProfile] = useState({
        fullName: localStorage.getItem("userName") || "Zerodha Client",
        email: localStorage.getItem("userEmail") || "user@zerodha.local",
        phone: "",
        clientId: localStorage.getItem("clientId") || "USERID",
        funds: localStorage.getItem("userFunds") ? Number(localStorage.getItem("userFunds")) : 100000,
        createdAt: null,
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Change PIN State
    const [pinForm, setPinForm] = useState({ currentPin: "", newPin: "", confirmPin: "" });
    const [pinLoading, setPinLoading] = useState(false);
    const [pinSuccess, setPinSuccess] = useState("");
    const [pinError, setPinError] = useState("");

    // Change Password State
    const [passwordForm, setPasswordForm] = useState({ currentPassword: "", newPassword: "", confirmPassword: "" });
    const [passwordLoading, setPasswordLoading] = useState(false);
    const [passwordSuccess, setPasswordSuccess] = useState("");
    const [passwordError, setPasswordError] = useState("");

    // Delete Account State
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deletePassword, setDeletePassword] = useState("");
    const [deleteLoading, setDeleteLoading] = useState(false);
    const [deleteError, setDeleteError] = useState("");

    useEffect(() => {
        axios.post("http://localhost:8080/verify", {}, { withCredentials: true })
            .then((res) => {
                if (res.data && res.data.status) {
                    setIsLoggedIn(true);
                    setProfile({
                        fullName: res.data.fullName || res.data.user || "Zerodha Client",
                        email: res.data.email || "",
                        phone: res.data.phone || "",
                        clientId: res.data.clientId || localStorage.getItem("clientId") || "USERID",
                        funds: res.data.funds?.availableCash ?? res.data.funds ?? 100000,
                        createdAt: res.data.createdAt || null,
                    });
                    if (res.data.clientId) localStorage.setItem("clientId", res.data.clientId);
                    if (res.data.fullName || res.data.user) localStorage.setItem("userName", res.data.fullName || res.data.user);
                    if (res.data.email) localStorage.setItem("userEmail", res.data.email);
                } else {
                    setIsLoggedIn(false);
                }
            })
            .catch(() => {
                setIsLoggedIn(false);
            });
    }, []);

    const handleLogout = async () => {
        try {
            await axios.post("http://localhost:8080/logout", {}, { withCredentials: true });
        } catch {
            // ignore
        }
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        localStorage.removeItem("clientId");
        localStorage.removeItem("userName");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userFunds");
        setIsLoggedIn(false);
        window.location.href = "http://localhost:5174";
    };

    // Handle Change PIN
    const handlePinChange = async (e) => {
        e.preventDefault();
        setPinSuccess("");
        setPinError("");

        if (!/^\d{6}$/.test(pinForm.newPin)) {
            setPinError("New PIN must be exactly 6 digits.");
            return;
        }

        if (pinForm.newPin !== pinForm.confirmPin) {
            setPinError("New PIN and Confirm PIN do not match.");
            return;
        }

        setPinLoading(true);
        try {
            const res = await axios.post(
                "http://localhost:8080/changePin",
                {
                    clientId: profile.clientId,
                    currentPin: pinForm.currentPin,
                    newPin: pinForm.newPin,
                },
                { withCredentials: true }
            );

            if (res.data.success) {
                setPinSuccess("6-digit Kite PIN updated successfully!");
                setPinForm({ currentPin: "", newPin: "", confirmPin: "" });
            } else {
                setPinError(res.data.message || "Failed to update PIN.");
            }
        } catch (err) {
            setPinError(err.response?.data?.message || err.message || "Failed to update PIN.");
        } finally {
            setPinLoading(false);
        }
    };

    // Handle Change Password
    const handlePasswordChange = async (e) => {
        e.preventDefault();
        setPasswordSuccess("");
        setPasswordError("");

        if (passwordForm.newPassword.length < 6) {
            setPasswordError("New password must be at least 6 characters.");
            return;
        }

        if (passwordForm.newPassword !== passwordForm.confirmPassword) {
            setPasswordError("New Password and Confirm Password do not match.");
            return;
        }

        setPasswordLoading(true);
        try {
            const res = await axios.post(
                "http://localhost:8080/changePassword",
                {
                    clientId: profile.clientId,
                    currentPassword: passwordForm.currentPassword,
                    newPassword: passwordForm.newPassword,
                },
                { withCredentials: true }
            );

            if (res.data.success) {
                setPasswordSuccess("Password updated successfully!");
                setPasswordForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
            } else {
                setPasswordError(res.data.message || "Failed to update password.");
            }
        } catch (err) {
            setPasswordError(err.response?.data?.message || err.message || "Failed to update password.");
        } finally {
            setPasswordLoading(false);
        }
    };

    // Handle Delete Account
    const handleDeleteAccount = async () => {
        setDeleteError("");
        setDeleteLoading(true);

        try {
            const res = await axios.post(
                "http://localhost:8080/deleteAccount",
                {
                    clientId: profile.clientId,
                    password: deletePassword,
                },
                { withCredentials: true }
            );

            if (res.data.success) {
                // Clear session and storage
                document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                localStorage.removeItem("clientId");
                localStorage.removeItem("userName");
                localStorage.removeItem("userEmail");
                localStorage.removeItem("userFunds");

                alert("Your Zerodha account has been deleted successfully.");
                window.location.href = "http://localhost:5174";
            } else {
                setDeleteError(res.data.message || "Failed to delete account.");
            }
        } catch (err) {
            setDeleteError(err.response?.data?.message || err.message || "Failed to delete account.");
        } finally {
            setDeleteLoading(false);
        }
    };

    return (
        <section style={{ backgroundColor: "#f8f8f8", minHeight: "calc(100vh - 45px)" }}>
            <div className="container-fluid" style={{ maxWidth: "94%", backgroundColor: "#fff" }}>
                <div className="row">
                    <div className="col-4 border-end">
                        <StockSection />
                    </div>

                    <div className="col-8 ps-4 pe-4 py-4">
                        {/* Profile Header */}
                        <div className="d-flex align-items-center justify-content-between border-bottom pb-4 mb-4">
                            <div className="d-flex align-items-center gap-3">
                                <div
                                    className="rounded-circle d-flex align-items-center justify-content-center text-primary fw-bold shadow-sm"
                                    style={{
                                        width: "68px",
                                        height: "68px",
                                        backgroundColor: "#eef2ff",
                                        fontSize: "26px",
                                        border: "2px solid #c7d2fe",
                                    }}
                                >
                                    {(profile.clientId || "U").slice(0, 2).toUpperCase()}
                                </div>
                                <div>
                                    <h1 className="mb-1" style={{ fontSize: "24px", fontWeight: "600", color: "rgb(68, 68, 68)" }}>
                                        {profile.fullName}
                                    </h1>
                                    <div className="d-flex align-items-center gap-2">
                                        <span className="badge bg-light text-dark border fw-medium px-2 py-1" style={{ fontSize: "12px" }}>
                                            Client ID: <strong className="text-primary">{profile.clientId}</strong>
                                        </span>
                                        <span className="badge bg-success-subtle text-success border border-success-subtle px-2 py-1" style={{ fontSize: "11px" }}>
                                            Active Demat & Trading
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex flex-column align-items-end gap-2">
                                {profile.createdAt && (
                                    <p className="text-muted small mb-0">
                                        Member since {new Date(profile.createdAt).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                                    </p>
                                )}
                                {isLoggedIn ? (
                                    <button
                                        type="button"
                                        className="btn btn-outline-danger btn-sm px-3 d-flex align-items-center gap-2"
                                        onClick={handleLogout}
                                    >
                                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                        Logout
                                    </button>
                                ) : (
                                    <a
                                        href="http://localhost:5173/login"
                                        className="btn btn-primary btn-sm px-3 d-flex align-items-center gap-2 text-white text-decoration-none"
                                        style={{ backgroundColor: "rgb(56, 126, 209)", borderColor: "rgb(56, 126, 209)" }}
                                    >
                                        <i className="fa-solid fa-arrow-right-to-bracket"></i>
                                        Log in
                                    </a>
                                )}
                            </div>
                        </div>

                        {!isLoggedIn && (
                            <div className="alert alert-warning d-flex align-items-center justify-content-between py-2 px-3 mb-4 rounded-3 border-warning-subtle" role="alert">
                                <div className="d-flex align-items-center gap-2">
                                    <i className="fa-solid fa-circle-exclamation text-warning"></i>
                                    <span className="small">You are currently in guest / demo mode. Log in to your Zerodha account to manage credentials.</span>
                                </div>
                                <a
                                    href="http://localhost:5173/login"
                                    className="btn btn-sm btn-dark px-3 py-1 text-decoration-none"
                                    style={{ fontSize: "12px" }}
                                >
                                    Log in
                                </a>
                            </div>
                        )}

                        {/* Account Details Summary Cards */}
                        <div className="row g-3 mb-4">
                            <div className="col-md-4">
                                <div className="p-3 border rounded-3 bg-light">
                                    <p className="text-muted small mb-1">Email Address</p>
                                    <p className="fw-semibold mb-0 text-truncate" style={{ color: "rgb(68, 68, 68)", fontSize: "14px" }}>
                                        {profile.email || "—"}
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="p-3 border rounded-3 bg-light">
                                    <p className="text-muted small mb-1">Registered Phone</p>
                                    <p className="fw-semibold mb-0" style={{ color: "rgb(68, 68, 68)", fontSize: "14px" }}>
                                        {profile.phone ? `+91 ${profile.phone}` : "Not linked"}
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="p-3 border rounded-3 bg-light">
                                    <p className="text-muted small mb-1">Available Funds</p>
                                    <p className="fw-semibold text-success mb-0" style={{ fontSize: "14px" }}>
                                        ₹{profile.funds ? Number(profile.funds).toLocaleString() : "1,00,000.00"}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Security & Credentials Section */}
                        <div className="row g-4 mb-4">
                            {/* Change PIN Form */}
                            <div className="col-12 col-lg-6">
                                <div className="card border rounded-3 h-100 shadow-sm">
                                    <div className="card-body p-4">
                                        <div className="d-flex align-items-center gap-2 mb-3">
                                            <i className="fa-solid fa-key text-primary"></i>
                                            <h2 className="fs-5 fw-semibold mb-0" style={{ color: "rgb(68, 68, 68)" }}>
                                                Change 2FA PIN
                                            </h2>
                                        </div>
                                        <p className="text-muted small mb-3">
                                            Update your 6-digit Kite login PIN used for order execution and two-factor authentication.
                                        </p>

                                        {pinSuccess && <div className="alert alert-success py-2 small">{pinSuccess}</div>}
                                        {pinError && <div className="alert alert-danger py-2 small">{pinError}</div>}

                                        <form onSubmit={handlePinChange}>
                                            <div className="mb-2">
                                                <label className="form-label small text-muted mb-1">Current PIN</label>
                                                <input
                                                    type="password"
                                                    className="form-control form-control-sm"
                                                    placeholder="Enter current PIN"
                                                    maxLength="6"
                                                    value={pinForm.currentPin}
                                                    onChange={(e) => setPinForm({ ...pinForm, currentPin: e.target.value })}
                                                />
                                            </div>

                                            <div className="mb-2">
                                                <label className="form-label small text-muted mb-1">New 6-Digit PIN</label>
                                                <input
                                                    type="password"
                                                    className="form-control form-control-sm"
                                                    placeholder="6 digits (e.g. 123456)"
                                                    maxLength="6"
                                                    required
                                                    value={pinForm.newPin}
                                                    onChange={(e) => setPinForm({ ...pinForm, newPin: e.target.value })}
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label small text-muted mb-1">Confirm New PIN</label>
                                                <input
                                                    type="password"
                                                    className="form-control form-control-sm"
                                                    placeholder="Re-enter new 6 digits"
                                                    maxLength="6"
                                                    required
                                                    value={pinForm.confirmPin}
                                                    onChange={(e) => setPinForm({ ...pinForm, confirmPin: e.target.value })}
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-sm px-3"
                                                style={{ backgroundColor: "rgb(56, 126, 209)", borderColor: "rgb(56, 126, 209)" }}
                                                disabled={pinLoading}
                                            >
                                                {pinLoading ? "Updating..." : "Update PIN"}
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* Change Password Form */}
                            <div className="col-12 col-lg-6">
                                <div className="card border rounded-3 h-100 shadow-sm">
                                    <div className="card-body p-4">
                                        <div className="d-flex align-items-center gap-2 mb-3">
                                            <i className="fa-solid fa-lock text-primary"></i>
                                            <h2 className="fs-5 fw-semibold mb-0" style={{ color: "rgb(68, 68, 68)" }}>
                                                Change Password
                                            </h2>
                                        </div>
                                        <p className="text-muted small mb-3">
                                            Choose a strong password with at least 6 characters to keep your trading account secure.
                                        </p>

                                        {passwordSuccess && <div className="alert alert-success py-2 small">{passwordSuccess}</div>}
                                        {passwordError && <div className="alert alert-danger py-2 small">{passwordError}</div>}

                                        <form onSubmit={handlePasswordChange}>
                                            <div className="mb-2">
                                                <label className="form-label small text-muted mb-1">Current Password</label>
                                                <input
                                                    type="password"
                                                    className="form-control form-control-sm"
                                                    placeholder="Enter current password"
                                                    value={passwordForm.currentPassword}
                                                    onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
                                                />
                                            </div>

                                            <div className="mb-2">
                                                <label className="form-label small text-muted mb-1">New Password</label>
                                                <input
                                                    type="password"
                                                    className="form-control form-control-sm"
                                                    placeholder="At least 6 characters"
                                                    required
                                                    value={passwordForm.newPassword}
                                                    onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label small text-muted mb-1">Confirm New Password</label>
                                                <input
                                                    type="password"
                                                    className="form-control form-control-sm"
                                                    placeholder="Re-enter new password"
                                                    required
                                                    value={passwordForm.confirmPassword}
                                                    onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-sm px-3"
                                                style={{ backgroundColor: "rgb(56, 126, 209)", borderColor: "rgb(56, 126, 209)" }}
                                                disabled={passwordLoading}
                                            >
                                                {passwordLoading ? "Updating..." : "Update Password"}
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Danger Zone: Delete Account */}
                        <div className="card border-danger-subtle bg-danger-subtle bg-opacity-10 rounded-3 shadow-sm mb-4">
                            <div className="card-body p-4">
                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                    <div>
                                        <h2 className="fs-5 fw-semibold text-danger mb-1">
                                            <i className="fa-solid fa-triangle-exclamation me-2"></i>
                                            Delete Account
                                        </h2>
                                        <p className="text-muted small mb-0" style={{ maxWidth: "560px" }}>
                                            Permanently delete your Zerodha demo account, order history, holdings, and account records. This action cannot be undone.
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        className="btn btn-outline-danger btn-sm px-3 fw-medium"
                                        onClick={() => setShowDeleteModal(true)}
                                    >
                                        Delete My Account
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Delete Account Confirmation Modal */}
            {showDeleteModal && (
                <div
                    className="modal show d-block"
                    tabIndex="-1"
                    style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1200 }}
                >
                    <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "440px" }}>
                        <div className="modal-content shadow border-0 rounded-3">
                            <div className="modal-header border-bottom-0 pb-0">
                                <h5 className="modal-title fs-5 fw-bold text-danger">
                                    Confirm Account Deletion
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => {
                                        setShowDeleteModal(false);
                                        setDeleteError("");
                                        setDeletePassword("");
                                    }}
                                ></button>
                            </div>
                            <div className="modal-body pt-2 pb-3">
                                <p className="text-muted small">
                                    Are you sure you want to delete account <strong>{profile.clientId}</strong> ({profile.fullName})? All your portfolio and account records will be permanently removed.
                                </p>

                                {deleteError && (
                                    <div className="alert alert-danger py-2 small">{deleteError}</div>
                                )}

                                <div className="mb-3">
                                    <label className="form-label small text-muted mb-1">Enter your password to confirm</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        value={deletePassword}
                                        onChange={(e) => setDeletePassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="modal-footer border-top-0 pt-0">
                                <button
                                    type="button"
                                    className="btn btn-light btn-sm px-3"
                                    onClick={() => {
                                        setShowDeleteModal(false);
                                        setDeleteError("");
                                        setDeletePassword("");
                                    }}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger btn-sm px-3"
                                    onClick={handleDeleteAccount}
                                    disabled={deleteLoading}
                                >
                                    {deleteLoading ? "Deleting..." : "Permanently Delete"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Profile;
