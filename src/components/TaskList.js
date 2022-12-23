import React from 'react';
import { Stack } from '@mui/material';
import TaskItem from './TaskItem';


const TaskList = ({ tasks, deleteTask, checkTask, handleIsEditing }) => {

    return (
        <Stack spacing={{ xs: 1.5, sm: 2 }}>
            {
                // Here, Sort method is used to place the recently added Task at the Top.
                tasks.sort((a, b) => b.id - a.id).map((taskItem) => (
                    <TaskItem
                        key={taskItem.id}
                        taskItem={taskItem}
                        deleteTask={deleteTask}
                        checkTask={checkTask}
                        handleIsEditing={handleIsEditing}
                    />
                ))
            }
        </Stack>
    );
};

export default TaskList;