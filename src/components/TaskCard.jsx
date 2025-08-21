import React from 'react';
import { BsThreeDots, BsCalendar3, BsList, BsPaperclip, BsChatDots } from 'react-icons/bs';

const TaskCard = ({ task }) => {
  const getPriorityColor = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'urgent': return 'bg-[#F7EDED] text-[#AF4B4B]';
      case 'internal': return 'bg-[#FBF4EC] text-[#D28E3D]';
    case 'marketing': return 'bg-[#F7F7E8] text-[#B1AB1D]';
      case 'report': return 'bg-[#EEF5F0] text-[#589E67]';
      case 'document': return 'bg-[#EDF2FE] text-[#4976F4]';
      case 'event': return 'bg-[#F4EDF7] text-[#954BAF]';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-xl p-3 sm:p-4 border border-gray-300 mb-3">
      
      <div className="flex items-start justify-between mb-4">
        <div className="flex flex-wrap gap-1 sm:gap-2 flex-1 mr-2">
          {task.tags?.map((tag, index) => (
            <span
              key={index}
              className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <button className="text-gray-400 hover:text-gray-600 p-1 flex-shrink-0">
          <BsThreeDots className="w-4 h-4" />
        </button>
      </div>

 
      <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-4 sm:mb-6 leading-snug">
        {task.title}
      </h3>

      <div className="space-y-3">
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <BsCalendar3 className="w-4 h-4 flex-shrink-0" />
            <span className="text-xs sm:text-sm">Due Date {task.dueDate}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 font-medium">
            <BsList className="w-4 h-4 flex-shrink-0" />
            <span className="text-xs sm:text-sm">{task.progress}</span>
          </div>
        </div>

       
        <div className="flex items-center justify-between">
          
          <div className="flex -space-x-1 sm:-space-x-2">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face"
              alt="Person 1"
              className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"
              alt="Person 2"
              className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=32&h=32&fit=crop&crop=face"
              alt="Person 3"
              className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face"
              alt="Person 4"
              className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover"
            />
          </div>
          
          <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
            <div className="flex items-center gap-1 sm:gap-2">
              <BsPaperclip className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{task.comments || 0}</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <BsChatDots className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{task.likes || 0}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
