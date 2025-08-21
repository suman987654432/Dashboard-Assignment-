import React from 'react';
import TaskColumn from './TaskColumn';

const TaskBoard = () => {
    const taskData = {
        planned: [
            {
                title: "Monthly Product Discussion",
                tags: ["Internal", "Marketing", "Urgent"],
                dueDate: "24 Jan 2023",
                progress: "10/24",
                comments: 5,
                likes: 19
            },
            {
                title: "Update New Social Media Post",
                tags: ["Marketing", "Event", "Urgent"],
                dueDate: "18 Jan 2023",
                progress: "12/52",
                comments: 1,
                likes: 1
            },
            {
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
                title: "Create Monthly Revenue Recap for All Product Linear",
                tags: ["Report", "Event", "Urgent"],
                dueDate: "11 Jan 2023",
                progress: "4/17",
                comments: 0,
                likes: 1
            },
            {
                title: "Uploading New Items to Marketplace",
                tags: ["Report", "Document", "Marketing"],
                dueDate: "09 Jan 2023",
                progress: "12/64",
                comments: 1,
                likes: 23
            },
            {
                title: "Monthly Product Discussion",
                tags: ["Internal", "Marketing", "Urgent"],
                dueDate: "12 Jan 2023",
                progress: "3/4",
                comments: 2,
                likes: 51
            },
            {
                title: "Update New Social Media Post",
                tags: ["Marketing", "Event", "Urgent"],
                dueDate: "15 Jan 2023",
                progress: "0/12",
                comments: 4,
                likes: 3
            },
            {
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
                title: "Uploading New Items to Marketplace",
                tags: ["Report", "Document", "Marketing"],
                dueDate: "09 Jan 2023",
                progress: "2/15",
                comments: 12,
                likes: 1
            },
            {
                title: "Input Data for Monthly Sales Revenue",
                tags: ["Internal", "Document", "Marketing"],
                dueDate: "13 Jan 2023",
                progress: "1/53",
                comments: 2,
                likes: 21
            }
        ]
    };

    return (
        <div className="min-h-full bg-transparent">
            <div className="p-3 sm:p-4 md:p-6 lg:p-8">
                <div className="flex flex-col xl:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-8 overflow-x-auto items-start justify-center min-h-screen">
                    <div className="bg-white rounded-xl border border-gray-200 p-3 sm:p-4 md:p-6 flex-shrink-0 w-full xl:w-auto xl:max-w-sm">
                        <TaskColumn
                            title="Planned"
                            count={taskData.planned.length}
                            color="#B1AB1D"
                            tasks={taskData.planned}
                        />
                    </div>

                    <div className="bg-white rounded-xl border border-gray-200 p-3 sm:p-4 md:p-6 flex-shrink-0 w-full xl:w-auto xl:max-w-sm">
                        <TaskColumn
                            title="Upcoming"
                            count={taskData.upcoming.length}
                            color="#6884FD"
                            tasks={taskData.upcoming}
                        />
                    </div>

                    <div className="bg-white rounded-xl border border-gray-200 p-3 sm:p-4 md:p-6 flex-shrink-0 w-full xl:w-auto xl:max-w-sm">
                        <TaskColumn
                            title="Completed"
                            count={taskData.completed.length}
                            color="#39C682"
                            tasks={taskData.completed}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskBoard;
                           