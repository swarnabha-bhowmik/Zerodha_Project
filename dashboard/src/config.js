const isLocal = typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");

export const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  (isLocal ? "http://localhost:8080" : "https://backend-dphn.onrender.com");

export const DASHBOARD_URL =
  import.meta.env.VITE_DASHBOARD_URL ||
  (isLocal ? "http://localhost:5174" : "https://kite-project.vercel.app");

export const FRONTEND_URL =
  import.meta.env.VITE_FRONTEND_URL ||
  (isLocal ? "http://localhost:5173" : "https://zerodha-project-sigma.vercel.app");

export const getAuthHeaders = () => {
  const token = typeof localStorage !== "undefined" ? localStorage.getItem("authToken") : null;
  return token ? { Authorization: `Bearer ${token}` } : {};
};
