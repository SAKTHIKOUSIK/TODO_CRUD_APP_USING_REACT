import React, { useState } from 'react';
import { Box, Paper } from '@mui/material';
import AddTask from './AddTask';
import TaskList from './TaskList';
import WelcomeScreen from './WelcomeScreen';
import { todoBoxStyle, taskBoxStyle } from '../theme/customStyles';
import useLocalStorage from '../hooks/useLocalStorage';


const ToDo = () => {

    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useLocalStorage("todoList", []);
    const [isEditing, setIsEditing] = useState(false);
    const [editedItemId, setEditedItemId] = useState(null);

    // Adding a new task |or| Updating an existing task
    const addTask = (task) => {
        !isEditing ? (
            setTasks(prevState => [...prevState, task])
        ) : (
            setTasks(prevState => [...prevState.map(item => {
                if (item.id === editedItemId) {
                    return {
                        ...item,
                        value: inputValue
                    };
                }
                return item;
            })])
        );
        setEditedItemId(null);
        setIsEditing(false);
    };

    // Deleting a task
    const deleteTask = (taskId) => {
        setTasks(prevState => [...prevState.filter(item => item.id !== taskId)]);
    };

    // toggling the Checked state of a task
    const checkTask = (taskId) => {
        setTasks(prevState => prevState.map(item => {
            if (item.id === taskId) {
                return {
                    ...item,
                    checked: !item.checked
                };
            }
            return item;
        }));
    };

    // Editing a task
    const handleIsEditing = (taskItem) => {
        setIsEditing(true);
        const a = tasks.find(item => item.id === taskItem.id);
        setInputValue(a.value);
        setEditedItemId(taskItem.id);
    };


    return (
        <Box sx={todoBoxStyle}>
            <AddTask
                inputValue={inputValue}
                setInputValue={setInputValue}
                addTask={addTask}
                isEditing={isEditing}
            />

            <Paper elevation={8} sx={taskBoxStyle}>
                {
                    tasks?.[0] ? (
                        <TaskList
                            tasks={tasks}
                            deleteTask={deleteTask}
                            checkTask={checkTask}
                            handleIsEditing={handleIsEditing}
                        />
                    ) : (
                        <WelcomeScreen />
                    )
                }
            </Paper>
        </Box>
    );
};

export default ToDo;