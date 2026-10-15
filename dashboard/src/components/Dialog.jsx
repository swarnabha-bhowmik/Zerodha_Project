import { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";

const Dialog = ({ onClose, stock, mode = "BUY" }) => {
    const isBuy = mode === "BUY";
    const themeColor = isBuy ? "#4184f3" : "#ff5722";
    const actionLabel = isBuy ? "Buy" : "Sell";

    const [qty, setQty] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const stockPrice = Number(stock?.price) || 0;
    const numericQty = Number(qty) || 0;
    const totalAmount = (numericQty * stockPrice).toFixed(2);

    const handleOrderSubmit = async () => {
        const finalQty = parseInt(qty, 10);
        if (!finalQty || finalQty <= 0) {
            setErrorMessage("Please enter a valid quantity (at least 1).");
            return;
        }

        setIsSubmitting(true);
        setErrorMessage("");

        try
        {
            const res = await axios.post(
                `${API_BASE_URL}/newOrder`,
                {
                    order: {
                        name: stock?.name,
                        qty: finalQty,
                        price: stockPrice,
                        mode: mode,
                    },
                    clientId: localStorage.getItem("clientId") || "DEMO",
                },
                { withCredentials: true }
            );

            // Notify all listening tabs/components (e.g. Orders, Dashboard) to autorefresh orders
            window.dispatchEvent(new CustomEvent("orderPlaced", {
                detail: res.data?.order || {
                    name: stock?.name,
                    qty: finalQty,
                    price: stockPrice,
                    mode: mode,
                    createdAt: new Date().toISOString(),
                }
            }));

            alert(`Order Placed Successfully!\n${isBuy ? "Bought" : "Sold"} ${finalQty} shares of ${stock?.name} at ₹${stockPrice.toFixed(2)}.`);
            onClose();
        } 
        catch (err) 
        {
            console.error("Order placement error:", err);
            const msg = err.response?.data?.message || err.response?.data?.error || err.message || "Failed to place order. Is your backend server running?";
            setErrorMessage(msg);
        } 
        finally
        {
            setIsSubmitting(false);
        }
    };

    return (
        <div 
            className="modal show d-block" 
            tabIndex="-1" 
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 1050 }}
            onClick={onClose}
        >
            <div 
                className="modal-dialog modal-dialog-centered mx-3 mx-sm-auto" 
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-content overflow-hidden">
                    <div 
                        className="modal-header text-white" 
                        style={{ backgroundColor: themeColor }}
                    >
                        <h5 className="modal-title fs-6 fw-bold">
                            {actionLabel} {stock?.name || "Stock"}
                        </h5>
                        <button 
                            type="button" 
                            className="btn-close btn-close-white" 
                            aria-label="Close" 
                            onClick={onClose}
                        ></button>
                    </div>
                    <div className="modal-body">
                        {errorMessage && (
                            <div className="alert alert-danger py-2 mb-3 small" role="alert">
                                {errorMessage}
                            </div>
                        )}

                        <div className="d-flex justify-content-between mb-3">
                            <span>Instrument: <strong>{stock?.name}</strong></span>
                            <span>LTP: <strong>₹{stockPrice.toFixed(2)}</strong></span>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="qtyInput" className="form-label text-muted small mb-1">
                                Quantity (Shares)
                            </label>
                            <input 
                                id="qtyInput"
                                type="number" 
                                className="form-control" 
                                min="1" 
                                disabled={isSubmitting}
                                value={qty} 
                                onChange={(e) => {
                                    const val = e.target.value;
                                    if (val === "") {
                                        setQty("");
                                    } else {
                                        const parsed = parseInt(val, 10);
                                        setQty(isNaN(parsed) ? "" : parsed);
                                    }
                                }}
                                onBlur={() => {
                                    if (qty === "" || Number(qty) < 1) {
                                        setQty(1);
                                    }
                                }}
                                autoFocus
                            />
                        </div>

                        <div className="p-2 rounded bg-light border d-flex justify-content-between align-items-center">
                            <span className="text-muted small">
                                {isBuy ? "Margin required:" : "Est. proceeds:"}
                            </span>
                            <strong className="fs-6" style={{ color: themeColor }}>
                                ₹{totalAmount}
                            </strong>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button 
                            type="button" 
                            className="btn btn-secondary" 
                            onClick={onClose}
                            disabled={isSubmitting}
                        >
                            Cancel
                        </button>
                        <button 
                            type="button" 
                            className="btn text-white fw-semibold"
                            style={{ backgroundColor: themeColor }}
                            onClick={handleOrderSubmit}
                            disabled={!qty || Number(qty) <= 0 || isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                    Placing Order...
                                </>
                            ) : (
                                actionLabel
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialog