import React from 'react';
import { Box, TextField, IconButton, InputAdornment, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { day, time } from '../utils/helpers';
import { textFieldStyle } from '../theme/customStyles';

const AddTask = ({ inputValue, setInputValue, addTask, isEditing }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({
      id: Date.now(),
      value: inputValue,
      day: day,
      time: time
    });
    setInputValue("");
  };


  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      mt={3}
      mb={5}
    >
      <TextField
        sx={textFieldStyle}
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