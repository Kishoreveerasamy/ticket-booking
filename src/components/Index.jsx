import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    navigate(`/buses?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${date}`);
  };

  return (
    <div className="card">
      <h2>Book bus tickets</h2>
      <form className="search-form" onSubmit={submit}>
        <label>From<input value={from} onChange={(e)=>setFrom(e.target.value)} required/></label>
        <label>To<input value={to} onChange={(e)=>setTo(e.target.value)} required/></label>
        <label>Date<input type="date" value={date} onChange={(e)=>setDate(e.target.value)} required/></label>
        <button className="primary" type="submit">Search Buses</button>
      </form>
    </div>
  );
}
