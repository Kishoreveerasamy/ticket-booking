import React from "react";

export default function Info() {
  return (
    <div className="info">
      <h3>Booking Info</h3>
      <ul>
        <li>📍 Boarding & Drop points shown at checkout</li>
        <li>🪑 Live seat layout with availability</li>
        <li>💳 UPI / Cards / NetBanking supported</li>
        <li>🔄 Free reschedule window (operator-specific)</li>
      </ul>

      <h3>Cancellation Policy</h3>
      <p>Full refund up to 24 hours before departure. Partial refund within 24 hours, per operator rules.</p>

      <h3>Safety & Support</h3>
      <ul>
        <li>Verified operators and customer ratings</li>
        <li>Live support chat during trip hours</li>
        <li>Emergency contact visible on the ticket</li>
      </ul>
    </div>
  );
}
