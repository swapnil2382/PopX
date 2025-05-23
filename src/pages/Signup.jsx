import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: null,
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'radio' ? (checked ? value : prev[name]) : value,
    }));
  };

  const handleSignup = () => {
    const { fullName, phoneNumber, email, password, isAgency } = formData;
    if (fullName && phoneNumber && email && password && isAgency !== null) {
      navigate('/account');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white font-['Segoe_UI',_sans-serif] p-0">
      <motion.section
        className="w-[375px] min-h-[720px] bg-gray-50 border border-[#DCDCDC] overflow-hidden flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex-1 p-6 sm:p-8 overflow-y-auto">
          <h2 className="text-[26px] font-bold text-black mb-8 leading-[1.3]">
            Create your <span className="text-black"><br />PopX</span> account
          </h2>
          <form className="space-y-4">
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-gray-50 px-1 text-[#6C25FF] text-xs font-medium">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6C25FF] focus:border-[#6C25FF]"
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </div>
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-gray-50 px-1 text-[#6C25FF] text-xs font-medium">
                Phone number<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="phoneNumber"
                className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6C25FF] focus:border-[#6C25FF]"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-gray-50 px-1 text-[#6C25FF] text-xs font-medium">
                Email Address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6C25FF] focus:border-[#6C25FF]"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-gray-50 px-1 text-[#6C25FF] text-xs font-medium">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6C25FF] focus:border-[#6C25FF]"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-gray-50 px-1 text-[#6C25FF] text-xs font-medium">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6C25FF] focus:border-[#6C25FF]"
                value={formData.companyName}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-left mt-3 text-sm font-medium text-[#666]">
                Are you an Agency?<span className="text-red-500">*</span>
              </label>
              <div className="flex gap-6 my-2 text-sm text-[#666]">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="isAgency"
                    value="yes"
                    checked={formData.isAgency === 'yes'}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-[#6C25FF] border-[#CBCBCB] mr-2"
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="isAgency"
                    value="no"
                    checked={formData.isAgency === 'no'}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-[#6C25FF] border-[#CBCBCB] mr-2"
                  />
                  No
                </label>
              </div>
            </div>
          </form>
        </div>
        {/* Button moved to the bottom */}
        <div className="p-6 border-t border-gray-200">
          <button
            type="button"
            className="w-full px-4 py-3 rounded-lg text-sm bg-[#6C25FF] text-white font-semibold active:scale-[0.98] disabled:bg-gray-400 disabled:cursor-not-allowed"
            onClick={handleSignup}
            disabled={
              !formData.fullName ||
              !formData.phoneNumber ||
              !formData.email ||
              !formData.password ||
              formData.isAgency === null
            }
          >
            Create Account
          </button>
        </div>
      </motion.section>
    </div>
  );
};

export default Signup;
