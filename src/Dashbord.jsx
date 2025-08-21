import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import SecondNav from './components/SecondNav'
import TaskBoard from './components/TaskBoard'

const Dashbord = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile sidebar  */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

     
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:block
      `}>
        <Sidebar closeSidebar={() => setSidebarOpen(false)} />
      </div>
      
      {/* content area */}
      <div className="flex-1 flex flex-col min-w-0 bg-white overflow-hidden">
        <div className="flex justify-center">
          <div className="w-full max-w-7xl">
            <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
            <SecondNav />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto flex justify-center">
          <div className="w-full max-w-7xl">
            <TaskBoard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashbord