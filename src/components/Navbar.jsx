import { FaSearch, FaRegQuestionCircle } from "react-icons/fa";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import profile from "../assets/profile.png";
const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="w-full border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between px-2 sm:px-6 py-2 sm:py-3">
        {/*for mobile */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-1 sm:p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
        >
          <FiMenu className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>


        <div className="flex items-center border border-gray-300 rounded-lg px-2 sm:px-4 py-1.5 sm:py-2 flex-1 max-w-xs sm:max-w-sm md:max-w-md lg:w-96 mx-2 sm:mx-0 bg-white focus-within:border-gray-400 transition-all duration-150">
          <FaSearch className="text-gray-400 mr-2 sm:mr-3 text-xs sm:text-sm" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 outline-none text-xs sm:text-sm bg-transparent placeholder-gray-500"
          />
          <div className="hidden sm:flex items-center gap-1 text-gray-500 border border-gray-300 rounded px-1.5 py-0.5 text-xs ml-3 bg-gray-50">
            <span className="font-mono">⌘</span>
            <span className="font-mono">F</span>
          </div>
        </div>
        <div className="flex items-center gap-0.5 sm:gap-1">
          <div className="hidden sm:flex items-center gap-2 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors duration-150 px-3 py-2 rounded-md hover:bg-gray-50">
            <FaRegQuestionCircle size={16} />
            <span className="text-sm font-medium">Help Center</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors duration-150 px-1.5 sm:px-3 py-1.5 sm:py-2 rounded-md hover:bg-gray-50">
            <img
              src={profile}
              alt="Profile"
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover border border-gray-200"
            />
            <span className="hidden sm:inline font-medium text-sm text-gray-800">
              Suman
            </span>
            <FiChevronDown
              className="hidden sm:inline text-gray-500 ml-1"
              size={14}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
