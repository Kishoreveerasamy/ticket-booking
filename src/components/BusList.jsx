import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const sampleBuses = [
  { id: "ST101", operator: "KPN Travels", departure: "09:00", arrival: "13:30", price: 499, seats: 32 },
  { id: "ST202", operator: "ABT Express", departure: "14:15", arrival: "18:45", price: 549, seats: 32 },
  { id: "ST303", operator: "SRS Deluxe", departure: "21:30", arrival: "04:30", price: 699, seats: 32 },
];

export default function BusList() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const from = params.get("from");
  const to = params.get("to");
  const date = params.get("date");
  const navigate = useNavigate();

  return (
    <div className="card">
      <h2>Available buses</h2>
      <p className="muted">{from} → {to} · {date}</p>
      <div className="list">
        {sampleBuses.map((b)=> (
          <div key={b.id} className="bus">
            <div className="bus-main">
              <div className="op">{b.operator}</div>
              <div className="time">{b.departure} → {b.arrival}</div>
            </div>
            <div className="bus-side">
              <div className="price">₹{b.price}</div>
              <button className="primary" onClick={()=>navigate(`/booking/${b.id}`, { state: { from, to, date, bus: b }})}>
                Select Seats
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
