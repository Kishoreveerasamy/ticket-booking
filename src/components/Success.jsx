import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function Success() {
  const { state } = useLocation();
  return (
    <div className="card success">
      <h2>Ticket Booked Successfully 🎉</h2>
      <p>Operator: <strong>{state?.bus?.operator}</strong> · Bus: {state?.bus?.id}</p>
      <p>Route: {state?.from} → {state?.to}</p>
      <p>Travel: {state?.bus?.departure} → {state?.bus?.arrival}</p>
      <p>Seats: {state?.picked?.join(", ")}</p>
      <p>Amount paid: ₹{state?.total}</p>
      <Link to="/" className="primary">Go Home</Link>
    </div>
  );
}
