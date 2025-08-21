import React from 'react';
import { BsThreeDots, BsPlus } from 'react-icons/bs';
import TaskCard from './TaskCard';

const TaskColumn = ({ title, count, color, tasks }) => {
  return (
    <div className="flex-1 min-w-0 w-full">

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></div>
          <h2 className="text-sm font-medium text-gray-900">{title}</h2>
          <span className="text-xs text-gray-500 hidden sm:inline">{count} {count === 1 ? 'open task' : 'open tasks'}</span>
          <span className="text-xs text-gray-500 sm:hidden">({count})</span>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <BsThreeDots className="w-4 h-4" />
        </button>
      </div>

      <button
        className="w-full p-3 rounded-lg mb-4 bg-[#F2F2F2]"
      >
        <div className="flex items-center justify-center gap-2">
          <BsPlus className="w-4 h-4" />
          <span className="text-sm font-medium">Create Task</span>
        </div>
      </button>


      <div className="space-y-3">
        {tasks?.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;




