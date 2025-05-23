import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="min-h-screen flex items-end justify-center bg-white font-['Segoe_UI',_sans-serif] p-0">
      <section className="w-[375px] min-h-[720px] bg-gray-50 border border-[#DCDCDC]  overflow-hidden flex flex-col justify-end">
        <div className="p-8 sm:p-10 text-left">
          <h1 className="text-[24px] font-bold text-black mb-2 leading-[1.3]">
            Welcome to <span className="text-black">PopX</span>
          </h1>
          <p className="text-sm text-[#666] mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,
          </p>
          <div className="flex flex-col gap-3">
            <Link
              to="/signup"
              className="w-full px-1 py-2 rounded-md text-white font-semibold bg-[#6C25FF] text-center active:scale-[0.98]"
            >
              Create Account
            </Link>
            <Link
              to="/login"
              className="w-full px-1 py-2 rounded-md text-black font-semibold bg-[#CEC8FF] text-center active:scale-[0.98]"
            >
              Already Registered? Login
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
