import React from 'react';
import { Box, Stack, Typography, IconButton, Tooltip } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { taskItemStyle } from '../theme/customStyles';

const TaskItem = ({ taskItem, deleteTask, handleIsEditing }) => {

    const { id, value } = taskItem;

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
            </Box>
            <Stack direction="row" columnGap={2}>
                <Tooltip title="Edit">
                    <IconButton
                        aria-label="edit"
                        onClick={() => handleIsEditing(taskItem)}
                    >
                        <Edit />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Delete">
                    <IconButton
                        aria-label="delete"
                        onClick={() => deleteTask(id)}
                    >
                        <Delete />
                    </IconButton>
                </Tooltip>
            </Stack>
        </Stack>
    );
};

export default TaskItem;