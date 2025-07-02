import React from 'react';
import SignUpForm from './Components/SignupForm.jsx';

const Signup = () => {
  return (
    <div className="min-h-screen flex relative bg-gray-100">
      {/* ✅ Site Name - Top Left */}
      <div className="absolute top-4 left-3 text-2xl font-bold text-[#007bff] z-10">
        Klinica
      </div>

      {/* Left: Form Section */}
      <div className="w-full lg:w-1/2 flex items-start mt-10 justify-center ml-20">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-1">Be a Klinicer Now</h2>
          <p className="text-sm text-gray- mb-1">
            Join us today to book appointments, access health tips, and more!
          </p>
          <SignUpForm />
          <p className="text-xs text-gray-400 mt-6 text-center">
            By signing up, you agree to our{" "}
            <a href="/terms" className="underline">Terms</a> and{" "}
            <a href="/privacy" className="underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
            {/* Right: Full-Size Image with no background */}
            <div className="hidden lg:block w-3/4 h-[750px]">
        <img
          src="/assets/create.jpg" // 
          alt="Health Illustration"
          className="w-full h-full object-cover"
        />
      </div>


    </div>
  );
};

export default Signup;


