// components/BlueSection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const BlueSection = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[650px] bg-[#007bff] text-white">
      <div className="flex flex-col md:flex-row justify-end h-full">
{/* Left Side */}
<div className="flex-1 flex flex-col justify-start space-y-10 p-10">
  {/* Top Section: Headers + Description */}
  <div>
    <h1 className="text-3xl font-bold text-indigo-50">Welcome to Klinica</h1>
    <h1 className="text-3xl font-bold text-indigo-50">Healthy Feels, Happy Vibes!</h1>
    <p className="w-2/3 mt-5 text-sm font-bold text-indigo-50">
      From trusted treatments to health-boosting products and daily wellness tips, Klinica has everything you need to feel your best, every day.
    </p>
  </div>

  {/* Bottom Section: Stats */}
  <div className="flex flex-col gap-6 mt-10">
    {/* Circles Row */}
    <div className="flex gap-12">
      <div className="bg-indigo-50 text-blue-500 p-4 rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-md text-center">
        <div className="text-xl font-bold">+150</div>
        <div className="text-xs font-medium">Active Doctors</div>
      </div>

      <div className="bg-indigo-50 text-blue-500 p-4 rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-md text-center">
        <div className="text-xl font-bold">+1.5k</div>
        <div className="text-xs font-medium">Daily Users</div>
      </div>

      <div className="bg-indigo-50 text-blue-500 p-4 rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-md text-center">
        <div className="text-xl font-bold">+30</div>
        <div className="text-xs font-medium">Supported Locations</div>
      </div>
    </div>

    {/* CTA Text */}
    <p className="text-xl font-bold text-indigo-50 mt-4">
      What are you waiting for? Start your journey to better health now!
    </p>
    {/* Buttons */}
    <div className="flex gap-4 mt-2">
      <button
      onClick={() => navigate("/signup")}
       className="px-6 py-2 rounded-md bg-indigo-50 text-blue-500 font-semibold shadow hover:bg-gray-100 transition">
        Get Started
      </button>
      <button
      onClick={() => navigate("/store")}
       className="px-6 py-2 rounded-md bg-red-500 text-white font-semibold shadow hover:bg-blue-800 transition">
        Buy Healthy Products
      </button>
    </div>
  </div>
</div>



        {/* Right Side */}
        <div className="flex justify-end bg-white w-[700px] h-full">
          <img
            src="/assets/nurse2.jpg"
            alt="Clinic"
            className="shadow-lg h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BlueSection;
