import React, { useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function Seat({ id, status, selected, onToggle }) {
  let cls = "seat " + status;
  if (selected) cls += " selected";
  return (
    <button
      type="button"
      className={cls}
      onClick={() => status === "available" && onToggle(id)}
      aria-pressed={selected}
      aria-label={`Seat ${id} ${status}${selected ? ", selected" : ""}`}
    >
      {id}
    </button>
  );
}

function makeSeats(total=32) {
  // 2x2 layout per row, 8 rows -> 32 seats
  const seats = [];
  const rows = total / 4;
  for (let r=1; r<=rows; r++) {
    for (let c=1; c<=4; c++) {
      const id = (r-1)*4 + c;
      // Example availability: some random booked/held to demo UI
      const status = (id % 7 === 0 || id % 11 === 0) ? "booked" : (id % 5 === 0 ? "held" : "available");
      seats.push({ id, status });
    }
  }
  return seats;
}

export default function Booking() {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const bus = state?.bus || { id, operator: "Swift Operator", departure: "10:00", arrival: "15:00", price: 500, seats: 32 };
  const [picked, setPicked] = useState([]);
  const seats = useMemo(()=> makeSeats(bus.seats), [bus.seats]);

  const toggle = (id) => {
    setPicked((prev)=> prev.includes(id) ? prev.filter(s=>s!==id) : prev.length < 6 ? [...prev, id] : prev);
  };

  const total = picked.length * bus.price;

  const proceed = () => {
    navigate("/success", { state: { bus, picked, total, from: state?.from, to: state?.to, date: state?.date } });
  };

  return (
    <div className="card">
      <h2>Select your seats</h2>
      <div className="trip-meta">
        <div><strong>{bus.operator}</strong> · {bus.id}</div>
        <div>{state?.from} → {state?.to} · {state?.date}</div>
        <div>{bus.departure} → {bus.arrival}</div>
      </div>

      <div className="legend">
        <span className="legend-item"><span className="dot available" /> Available</span>
        <span className="legend-item"><span className="dot selected" /> Selected</span>
        <span className="legend-item"><span className="dot held" /> On Hold</span>
        <span className="legend-item"><span className="dot booked" /> Booked</span>
      </div>

      <div className="seat-grid">
        {Array.from({length: seats.length / 4}, (_, i)=> i).map((row)=> (
          <div key={row} className="seat-row">
            <div className="seat-block">
              {seats.slice(row*4, row*4+2).map(s=> (
                <Seat key={s.id} id={s.id} status={s.status} selected={picked.includes(s.id)} onToggle={toggle} />
              ))}
            </div>
            <div className="aisle"/>
            <div className="seat-block">
              {seats.slice(row*4+2, row*4+4).map(s=> (
                <Seat key={s.id} id={s.id} status={s.status} selected={picked.includes(s.id)} onToggle={toggle} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="checkout">
        <div className="summary">
          <div>Seats: {picked.sort((a,b)=>a-b).join(", ") || "None"}</div>
          <div>Total: ₹{total}</div>
        </div>
        <button className="primary" disabled={!picked.length} onClick={proceed}>
          Continue to Passenger Details
        </button>
      </div>
    </div>
  );
}
