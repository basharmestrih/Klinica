import React from "react";

const StoreBanner = () => {
  return (
    <div className="px-10 mt-6">
      <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
        {/* Background image with opacity */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url('/assets/store.jpg')` }}
        ></div>

        {/* Overlay content */}
        <div className="absolute bottom-6 right-6 z-10">
          <button className="bg-black bg-opacity-70 text-white px-5 py-3 rounded-lg hover:bg-opacity-90 transition font-semibold shadow-md">
            Check our store
          </button>
          </div>
      </div>
    </div>
  );
};

export default StoreBanner;


