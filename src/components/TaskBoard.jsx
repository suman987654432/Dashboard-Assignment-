import React, { useState } from 'react';
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import TaskColumn from './TaskColumn';
import TaskCard from './TaskCard';

const TaskBoard = () => {
    const [taskData, setTaskData] = useState({
        planned: [
            {
                id: 'planned-0',
                title: "Monthly Product Discussion",
                tags: ["Internal", "Marketing", "Urgent"],
                dueDate: "24 Jan 2023",
                progress: "10/24",
                comments: 5,
                likes: 19
            },
            {
                id: 'planned-1',
                title: "Update New Social Media Post",
                tags: ["Marketing", "Event", "Urgent"],
                dueDate: "18 Jan 2023",
                progress: "12/52",
                comments: 1,
                likes: 1
            },
            {
                id: 'planned-2',
                title: "Input Data for Monthly Sales Revenue",
                tags: ["Internal", "Document", "Marketing"],
                dueDate: "31 Jan 2023",
                progress: "4/5",
                comments: 2,
                likes: 0
            }
        ],
        upcoming: [
            {
                id: 'upcoming-0',
                title: "Create Monthly Revenue Recap for All Product Linear",
                tags: ["Report", "Event", "Urgent"],
                dueDate: "11 Jan 2023",
                progress: "4/17",
                comments: 0,
                likes: 1
            },
            {
                id: 'upcoming-1',
                title: "Uploading New Items to Marketplace",
                tags: ["Report", "Document", "Marketing"],
                dueDate: "09 Jan 2023",
                progress: "12/64",
                comments: 1,
                likes: 23
            },
            {
                id: 'upcoming-2',
                title: "Monthly Product Discussion",
                tags: ["Internal", "Marketing", "Urgent"],
                dueDate: "12 Jan 2023",
                progress: "3/4",
                comments: 2,
                likes: 51
            },
            {
                id: 'upcoming-3',
                title: "Update New Social Media Post",
                tags: ["Marketing", "Event", "Urgent"],
                dueDate: "15 Jan 2023",
                progress: "0/12",
                comments: 4,
                likes: 3
            },
            {
                id: 'upcoming-4',
                title: "Input Data for Monthly Sales Revenue",
                tags: ["Marketing", "Event", "Urgent"],
                dueDate: "15 Jan 2023",
                progress: "3/4",
                comments: 1,
                likes: 15
            }
        ],
        completed: [
            {
                id: 'completed-0',
                title: "Uploading New Items to Marketplace",
                tags: ["Report", "Document", "Marketing"],
                dueDate: "09 Jan 2023",
                progress: "2/15",
                comments: 12,
                likes: 1
            },
            {
                id: 'completed-1',
                title: "Input Data for Monthly Sales Revenue",
                tags: ["Internal", "Document", "Marketing"],
                dueDate: "13 Jan 2023",
                progress: "1/53",
                comments: 2,
                likes: 21
            }
        ]
    });

    const [activeTask, setActiveTask] = useState(null);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor)
    );

    const findColumn = (taskId) => {
        for (const [columnName, tasks] of Object.entries(taskData)) {
            if (tasks.find(task => task.id === taskId)) {
                return columnName;
            }
        }
        return null;
    };

    const handleDragStart = (event) => {
        const { active } = event;
        const columnName = findColumn(active.id);
        if (columnName) {
            const task = taskData[columnName].find(task => task.id === active.id);
            setActiveTask(task);
        }
    };

    const handleDragOver = (event) => {
        const { active, over } = event;
        
        if (!over) return;

        const activeColumn = findColumn(active.id);
        let overColumn;

        if (over.id.startsWith('column-')) {
            overColumn = over.id.replace('column-', '');
        } else {
            overColumn = findColumn(over.id);
        }

        if (!activeColumn || !overColumn || activeColumn === overColumn) return;

        setTaskData((prev) => {
            const activeTask = prev[activeColumn].find(task => task.id === active.id);
            const newActiveColumn = prev[activeColumn].filter(task => task.id !== active.id);
            const newOverColumn = [...prev[overColumn], activeTask];

            return {
                ...prev,
                [activeColumn]: newActiveColumn,
                [overColumn]: newOverColumn,
            };
        });
    };

    const handleDragEnd = () => {
        setActiveTask(null);
    };

    return (
        <div className="min-h-full bg-transparent">
            <DndContext
                sensors={sensors}
                collisionDetection={closestCorners}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDragEnd={handleDragEnd}
            >
                <div className="p-3 sm:p-4 md:p-6 lg:p-8">
                    <div className="flex flex-col xl:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-8 overflow-x-auto items-start justify-center min-h-screen">
                        <div className="bg-white rounded-xl border border-gray-200 p-3 sm:p-4 md:p-6 flex-shrink-0 w-full xl:w-auto xl:max-w-sm">
                            <TaskColumn
                                title="Planned"
                                count={taskData.planned.length}
                                color="#B1AB1D"
                                tasks={taskData.planned}
                                columnId="planned"
                            />
                        </div>

                        <div className="bg-white rounded-xl border border-gray-200 p-3 sm:p-4 md:p-6 flex-shrink-0 w-full xl:w-auto xl:max-w-sm">
                            <TaskColumn
                                title="Upcoming"
                                count={taskData.upcoming.length}
                                color="#6884FD"
                                tasks={taskData.upcoming}
                                columnId="upcoming"
                            />
                        </div>

                        <div className="bg-white rounded-xl border border-gray-200 p-3 sm:p-4 md:p-6 flex-shrink-0 w-full xl:w-auto xl:max-w-sm">
                            <TaskColumn
                                title="Completed"
                                count={taskData.completed.length}
                                color="#39C682"
                                tasks={taskData.completed}
                                columnId="completed"
                            />
                        </div>
                    </div>
                </div>

                <DragOverlay>
                    {activeTask ? (
                        <div className="opacity-90 rotate-2 transform">
                            <TaskCard task={activeTask} />
                        </div>
                    ) : null}
                </DragOverlay>
            </DndContext>
        </div>
    );
};

export default TaskBoard;
