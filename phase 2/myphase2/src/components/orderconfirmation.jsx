import React from "react";
import { useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const orderId = "#ORD123456";

  return (
    <div className="flex h-screen">
      <div className="bg-blue-500 w-1/2 flex flex-col justify-center items-center text-white">
        <svg className="w-20 h-20 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <p className="text-2xl font-semibold">Order Confirmed!</p>
        <p className="text-sm mt-2">Thanks for your purchase.</p>
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center px-8">
        <p className="text-lg font-medium mb-2">Your Order ID:</p>
        <p className="text-blue-600 font-bold text-xl mb-6">{orderId}</p>
        <div className="mb-6 text-center">
          <p className="text-gray-700">You’ll receive an email with the receipt and tracking details shortly.</p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/orders")}
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
          >
            Track Order
          </button>
          <button
            onClick={() => navigate("/home")}
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
