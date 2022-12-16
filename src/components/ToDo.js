import React, { useState } from 'react';
import { Container, Box, Paper } from '@mui/material';
import AddTask from './AddTask';
import TaskList from './TaskList';
import WelcomeScreen from './WelcomeScreen';

const style = {
    display: "grid",
    placeItems: "center",
};


const ToDo = () => {

    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useState([]);
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

    // Editing a task
    const handleIsEditing = (taskItem) => {
        setIsEditing(true);
        const a = tasks.find(item => item.id === taskItem.id);
        setInputValue(a.value);
        setEditedItemId(taskItem.id);
    };


    return (
        <>
            <Container sx={style}>
                <Box sx={{ maxWidth: 750, width: "100%", mt: 5, }}>
                    <AddTask
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        addTask={addTask}
                        isEditing={isEditing}
                    />
                    <Paper elevation={3} sx={{ bgcolor: "#ECEDF6", p: 2, mt: 4 }}>
                        {
                            tasks?.[0] ? (
                                <TaskList
                                    tasks={tasks}
                                    deleteTask={deleteTask}
                                    handleIsEditing={handleIsEditing}
                                />
                            ) : (
                                <WelcomeScreen />
                            )
                        }
                    </Paper>
                </Box>
            </Container>
        </>
    );
};

export default ToDo;