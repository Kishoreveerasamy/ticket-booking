import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleBrand = () => navigate("/");
  const handleLoginLogout = () => {
    if (user) {
      logout();
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <header className="app-header" role="banner">
      <div className="brand" onClick={handleBrand}>
        <span className="logo">🎟️</span>
        <span className="title">SwiftTickets</span>
      </div>
      <nav className="top-actions" aria-label="Main navigation">
        <NavLink to="/" className="action">Home</NavLink>
        <NavLink to="/search" className="action">Search Bus</NavLink>
        <NavLink to="/help" className="action">Customer Care</NavLink>
        <button className="action" onClick={handleLoginLogout}>
          {user ? "Logout" : "Login"}
        </button>
      </nav>
    </header>
  );
}
