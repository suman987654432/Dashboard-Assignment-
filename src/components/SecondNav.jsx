import React, { useState, useRef, useEffect } from "react";
import {
  FiList,
  FiGrid,
  FiTable,
  FiChevronDown,
  FiFilter,
  FiPlus,
} from "react-icons/fi";

const SecondNav = () => {
  const [activeView, setActiveView] = useState("Kanban");
  const [underlineStyle, setUnderlineStyle] = useState({});
  const buttonRefs = useRef({});

  const viewOptions = [
    { name: "List", icon: <FiList size={16} /> },
    { name: "Kanban", icon: <FiGrid size={16} /> },
    { name: "Table", icon: <FiTable size={16} /> },
  ];

  useEffect(() => {
    const activeButton = buttonRefs.current[activeView];
    if (activeButton) {
      const rect = activeButton.getBoundingClientRect();
      const containerRect = activeButton
        .closest(".w-full")
        .getBoundingClientRect();
      setUnderlineStyle({
        left: rect.left - containerRect.left,
        width: rect.width,
      });
    }
  }, [activeView]);

  return (
    <div className="w-full bg-white border-b border-gray-200 relative">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-2 sm:px-6 py-2 gap-3 sm:gap-0">
       
        <div className="flex items-center w-full sm:w-auto">
          <h1 className="text-lg sm:text-xl font-semibold text-gray-900 mr-3 sm:mr-6">
            Task
          </h1>

          <div className="flex items-center rounded-lg overflow-hidden">
            {viewOptions.map((option) => (
              <button
                key={option.name}
                ref={(el) => (buttonRefs.current[option.name] = el)}
                onClick={() => setActiveView(option.name)}
                className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-150 ${
                  activeView === option.name
                    ? " text-gray-900"
                    : "text-gray-600 hover:text-gray-900 "
                }`}
              >
                <span className="hidden sm:inline">{option.icon}</span>
                <span>{option.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-end">
          {/* Sort By */}
          <button className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-all duration-150 min-w-fit">
            <FiFilter size={16} className="sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">Sort</span>
            <FiChevronDown
              size={14}
              className="sm:w-3.5 sm:h-3.5 hidden md:inline"
            />
          </button>

          <button className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-all duration-150">
            <FiFilter size={16} className="sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">Filter</span>
          </button>

          <button className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-150 whitespace-nowrap">
            <FiPlus size={16} className="sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">Add Task</span>
          </button>
        </div>
      </div>

      <div
        className="absolute bottom-0 ml-7 h-0.5 bg-gray-900 transition-all duration-300 z-10 hidden sm:block"
        style={underlineStyle}
      ></div>
    </div>
  );
};

export default SecondNav;
