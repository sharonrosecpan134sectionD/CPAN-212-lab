import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/login"), 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex h-screen">
      <div className="bg-blue-500 w-1/2 flex flex-col justify-center items-center text-white">
        <svg className="w-20 h-20 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 002 2h3a2 2 0 002-2v-1m-7-4H3" />
        </svg>
        <p className="text-xl font-semibold">You've been logged out</p>
        <p className="text-sm mt-2">Redirecting to login...</p>
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center">
        <button
          onClick={() => navigate("/login")}
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default LogoutPage;
