import React from 'react';
import { Box, TextField, IconButton, InputAdornment, Tooltip } from '@mui/material';
import { Add as AddIcon, AddTask as AddTaskIcon } from '@mui/icons-material';

const AddTask = ({ inputValue, setInputValue, addTask, isEditing }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({
      id: Date.now(),
      value: inputValue,
      checked: false
    });
    setInputValue("");
  };


  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
    >
      <TextField
        placeholder="Add new task..."
        required
        autoFocus
        fullWidth
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {
                !isEditing ? (
                  <Tooltip title="Add">
                    <IconButton
                      type="submit"
                      aria-label="add"
                    >
                      <AddIcon />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Tooltip title="Update">
                    <IconButton
                      type="submit"
                      aria-label="update"
                    >
                      <AddTaskIcon />
                    </IconButton>
                  </Tooltip>
                )
              }
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default AddTask;