import { motion } from 'framer-motion';

const Account = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-00 font-['Segoe_UI',_sans-serif] p-0">
    <motion.section
      className="w-[375px] min-h-[720px] bg-white border border-[#DCDCDC] overflow-hidden flex flex-col"
      initial={{ scale: 0.96, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-1 flex flex-col bg-gray-100">
        <div className="px-6 pt-6 pb-2 border-b border-gray-200 text-[#2E2E2E] text-xl font-semibold bg-white z-10">
          Account Settings
        </div>
        <div className="px-6 py-8 bg-gray-100 border-b border-dashed border-gray-400 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src="https://i.pravatar.cc/100"
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-3 w-7 h-7 bg-[#6C25FF] rounded-full flex items-center justify-center shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  width="12"
                  height="12"
                >
                  <path d="M20 7h-3.586l-1.707-1.707A.996.996 0 0014 5h-4c-.265 0-.52.105-.707.293L7.586 7H4a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2v-8a2 2 0 00-2-2zm-8 8a4 4 0 110-8 4 4 0 010 8z" /></svg>

              </div>
            </div>
            <div>
              <h4 className="text-l pl-4 font-semibold text-[#2E2E2E]">Marry Doe</h4>
              <p className="text-sm pl-4 text-[#4B4B4B]">Marry@gmail.com</p>
            </div>
          </div>
          <p className="text-xs text-[#4B4B4B] mt-2 leading-snug">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
      </div>
    </motion.section>
  </div>
);

export default Account;
