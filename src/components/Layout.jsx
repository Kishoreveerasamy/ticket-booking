import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-main">
        <section className="app-content">{children}</section>
        <aside className="app-aside" aria-label="More information">
          <div className="info">
            <h3>Why SwiftTickets?</h3>
            <ul>
              <li>Instant confirmation & e-ticket</li>
              <li>Live seat layout with availability</li>
              <li>Secure UPI / Card / NetBanking</li>
              <li>24x7 customer support</li>
            </ul>
            <h3>Customer Care</h3>
            <p>📞 1800-123-9876<br/>✉️ support@swifttickets.app</p>
          </div>
        </aside>
      </main>
      <footer className="app-footer">Secure payments · Trusted operators · Best prices</footer>
    </div>
  );
}
