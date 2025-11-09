import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/Auth";
import Layout from "./components/Layout";
import Index from "./components/Index";
import BusList from "./components/BusList";
import Booking from "./components/Booking";
import Success from "./components/Success";
import Help from "./components/Help";
import Login from "./components/Login";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/search" element={<Index />} />
            <Route path="/buses" element={<BusList />} />
            <Route path="/booking/:id" element={<Booking />} />
            <Route path="/success" element={<Success />} />
            <Route path="/help" element={<Help />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Index />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}
