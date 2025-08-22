import React from 'react';
import { BsThreeDots, BsPlus } from 'react-icons/bs';
import TaskCard from './TaskCard';
import { useDroppable, useDraggable } from '@dnd-kit/core';

const DraggableTaskCard = ({ task, children }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        isDragging,
    } = useDraggable({
        id: task.id,
    });

    const style = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        opacity: isDragging ? 0.5 : 1,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            className="cursor-move"
        >
            {children}
        </div>
    );
};

const TaskColumn = ({ title, count, color, tasks, columnId }) => {
    const { setNodeRef, isOver } = useDroppable({
        id: `column-${columnId}`,
    });

    const isEmpty = !tasks || tasks.length === 0;

    return (
        <div 
            ref={setNodeRef} 
            className={`${isEmpty ? 'min-h-[200px]' : 'min-h-[100px]'} transition-all duration-300 ${isOver ? 'bg-blue-50' : ''}`}
        >
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


            <div className={`space-y-3 mt-4 ${isEmpty ? 'min-h-[100px] flex items-center justify-center' : ''}`}>
                {isEmpty ? (
                    <div className="text-gray-400 text-sm text-center">
                        Drop tasks here
                    </div>
                ) : (
                    tasks.map((task) => (
                        <DraggableTaskCard key={task.id} task={task}>
                            <TaskCard task={task} />
                        </DraggableTaskCard>
                    ))
                )}
            </div>
        </div>
    );
};

export default TaskColumn;




