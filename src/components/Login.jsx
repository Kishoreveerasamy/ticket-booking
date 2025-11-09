import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

export default function Login() {
  const { user, login } = useAuth();
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Enter email and password");
      return;
    }
    // Demo auth (no backend)
    login(email);
    navigate("/");
  };

  return (
    <div className="card auth-card">
      <h2>Login</h2>
      <form className="auth-form" onSubmit={submit}>
        <label>Email<input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/></label>
        <label>Password<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/></label>
        {error && <p className="error">{error}</p>}
        <button className="primary" type="submit">Login</button>
      </form>
      <p className="muted">Demo only. No real account needed.</p>
    </div>
  );
}
