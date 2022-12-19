import React from 'react';
import { Box, Stack, Typography, IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { taskItemStyle } from '../theme/customStyles';

const TaskItem = ({ taskItem, deleteTask, handleIsEditing }) => {

    const { id, value, day, time } = taskItem;

    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={taskItemStyle}
        >
            <Box>
                <Typography variant="h6">
                    {value}
                </Typography>
                <Typography variant="body2" color="gray">
                    {day} | {time}
                </Typography>
            </Box>
            <Stack direction="row" columnGap={2}>
                <Tooltip title="Edit">
                    <IconButton
                        aria-label="edit"
                        onClick={() => handleIsEditing(taskItem)}
                    >
                        <EditIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Delete">
                    <IconButton
                        aria-label="delete"
                        onClick={() => deleteTask(id)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </Stack>
        </Stack>
    );
};

export default TaskItem;