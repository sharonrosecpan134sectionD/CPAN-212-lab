import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-blue-500 w-1/2 flex flex-col justify-center items-center text-white">
        <svg className="animate-spin h-16 w-16 mb-6" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="white"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="white"
            d="M4 12a8 8 0 018-8v8H4z"
          />
        </svg>
        <p className="text-2xl font-semibold">Fetching your data...</p>
        <p className="text-sm mt-2">Hang tight, this won’t take long!</p>
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center">
        <p className="text-gray-600 text-lg mb-4">We’re preparing your dashboard</p>
        <div className="w-2/3 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 animate-pulse" style={{ width: '75%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
