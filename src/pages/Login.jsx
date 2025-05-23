import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
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
        <div className="flex-1 p-8 sm:p-10 text-left overflow-y-auto">
          <h2 className="text-[24px] font-bold text-black mb-2 leading-[1.3]">
            Sign in to your <span className="text-black"><br />PopX</span> account
          </h2>
          <p className="text-sm text-[#666] mb-6">
            Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit,
          </p>
          <form className="space-y-6">
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-gray-50 px-1 text-[#6C25FF] text-xs font-medium">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6C25FF] focus:border-[#6C25FF]"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="relative">
              <label className="absolute -top-2 left-3 bg-gray-50 px-1 text-[#6C25FF] text-xs font-medium">
                Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6C25FF] focus:border-[#6C25FF]"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="w-full px-0 py-2 rounded-lg text-[0.95rem] bg-[#6C25FF] text-white font-semibold active:scale-[0.98] disabled:bg-gray-400 disabled:cursor-not-allowed"
              onClick={handleLogin}
              disabled={!email || !password}
            >
              Login
            </button>
          </form>

        </div>
      </motion.section>
    </div>
  );
};

export default Login;
