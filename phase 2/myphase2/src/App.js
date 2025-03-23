import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import LogoutPage from "./components/LogoutPage";
import LoadingPage from "./components/LoadingPage";
import OrderConfirmation from "./components/OrderConfirmation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="*" element={<div className="p-10 text-center">Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
