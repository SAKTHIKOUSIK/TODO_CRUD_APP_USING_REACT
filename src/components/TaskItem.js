import React from 'react';
import { Stack, Typography, IconButton, Tooltip, Checkbox } from '@mui/material';
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
            <Stack direction="row" alignItems="center">
                <Checkbox
                    value=""
                    // checked={ }
                    // onChange={ }
                    color="primary"
                />
                <Typography variant="h6" ml={1.5}>
                    {value}
                </Typography>
            </Stack>
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