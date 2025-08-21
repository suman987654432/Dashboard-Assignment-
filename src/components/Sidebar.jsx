import React, { useState } from "react";
import {
  FiGrid,
  FiBell,
  FiFileText,
  FiCheckSquare,
  FiMail,
  FiCalendar,
  FiBarChart2,
  FiUser,
  FiBriefcase,
  FiSettings,
  FiLayers,
  FiColumns,
  FiChevronDown,
  FiX,
} from "react-icons/fi";

const sidebarMenu = [
  { label: "Dashboard", icon: <FiGrid /> },
  { label: "Notifications", icon: <FiBell /> },
  { label: "Notes", icon: <FiFileText /> },
  { label: "Tasks", icon: <FiCheckSquare />, active: true },
  { label: "Emails", icon: <FiMail /> },
  { label: "Calendars", icon: <FiCalendar /> },
];

const dbMenu = [
  { label: "Analytics", icon: <FiBarChart2 /> },
  { label: "Contacts", icon: <FiUser /> },
  { label: "Companies", icon: <FiBriefcase /> },
];

const otherMenu = [
  { label: "Integrations", icon: <FiLayers /> },
  { label: "Settings", icon: <FiSettings /> },
];

const Sidebar = ({ closeSidebar }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`${
        collapsed ? "w-16" : "w-64 lg:w-64"
      } lg:w-64 w-full lg:relative fixed inset-y-0 left-0 z-50 bg-white border-r border-gray-200 flex flex-col font-sans transition-all duration-300 flex-shrink-0 h-full lg:h-auto`}
      style={{
        width: collapsed ? "64px" : window.innerWidth < 1024 ? "100%" : "250px",
      }}
    >
      <div
        className={`flex items-center ${
          collapsed ? "justify-center px-2 lg:px-4" : "px-4 lg:px-6"
        } py-4 lg:py-6 pb-3 lg:pb-5 border-b border-gray-100`}
      >
        <FiColumns
          size={20}
          className={`lg:w-6 lg:h-6 text-gray-800 ${
            collapsed ? "" : "mr-2 lg:mr-3"
          }`}
        />
        {!collapsed && (
          <span className="font-semibold text-lg lg:text-xl text-gray-800 tracking-tight">
            Venture
          </span>
        )}
        <button
          onClick={() => {
            if (window.innerWidth < 1024) {
              closeSidebar();
            } else {
              setCollapsed(!collapsed);
            }
          }}
          className={`${
            collapsed ? "absolute top-4 lg:top-6 right-2 lg:right-3" : "ml-auto"
          } text-gray-400 cursor-pointer hover:text-gray-600 transition-colors p-1`}
        >
          <FiX size={18} className="lg:w-5 lg:h-5" />
        </button>
      </div>

      <div className="py-4 lg:py-6">
        {sidebarMenu.map((item) => (
          <div
            key={item.label}
            className={`flex items-center px-4 lg:px-6 py-2.5 lg:py-3 mx-2 lg:mx-3 rounded-md cursor-pointer transition-all duration-150 ${
              item.active
                ? "bg-slate-50 text-slate-800 font-medium"
                : "text-slate-500 hover:bg-gray-50"
            }`}
          >
            <span
              className={`text-base lg:text-lg ${
                item.active ? "text-slate-800" : "text-slate-500"
              }`}
            >
              {item.icon}
            </span>
            {!collapsed && (
              <span className="ml-3 lg:ml-4 text-sm lg:text-base">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="mx-3 lg:mx-5 border-b border-gray-200 mt-1"></div>

      <div className="mt-3 lg:mt-5">
        {!collapsed && (
          <span className="block mx-4 lg:mx-6 mb-2 lg:mb-3 text-xs lg:text-sm text-gray-400 font-semibold tracking-wide uppercase">
            DATABASE
          </span>
        )}
        {dbMenu.map((item) => (
          <div
            key={item.label}
            className="flex items-center px-4 lg:px-6 py-2.5 lg:py-3 mx-2 lg:mx-3 text-slate-500 rounded-md cursor-pointer transition-all duration-150 hover:bg-gray-50"
          >
            <span className="text-base lg:text-lg">{item.icon}</span>
            {!collapsed && (
              <span className="ml-3 lg:ml-4 text-sm lg:text-base">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="mx-3 lg:mx-5 mt-2 border-b border-gray-200"></div>

      <div className="mt-3 lg:mt-4">
        {otherMenu.map((item) => (
          <div
            key={item.label}
            className="flex items-center px-4 lg:px-6 py-2.5 lg:py-3 mx-2 lg:mx-3 text-slate-500 rounded-md cursor-pointer transition-all duration-150 hover:bg-gray-50"
          >
            <span className="text-base lg:text-lg">{item.icon}</span>
            {!collapsed && (
              <span className="ml-3 lg:ml-4 text-sm lg:text-base">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-auto px-4 lg:px-6 py-4 lg:py-5 border-t border-gray-100 flex items-center cursor-pointer">
        <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-md bg-slate-200 flex items-center justify-center mr-3 lg:mr-4 font-semibold text-slate-600 text-sm lg:text-base">
          M
        </div>
        {!collapsed && (
          <>
            <span className="font-medium text-sm lg:text-base text-slate-800">
              Marketing Team's
            </span>
            <FiChevronDown
              size={14}
              className="lg:w-4 lg:h-4 ml-auto text-gray-400"
            />
          </>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
