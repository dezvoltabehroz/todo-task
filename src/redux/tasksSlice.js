import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: Math.floor(Date.now() / 1000),
                name: action.payload.task
            }
            state.push(newTask);
        },
        deleteTask: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
        },
        updateTask: (state, action) => {
            const { taskName, taskId } = action.payload
            var foundIndex = state.findIndex(x => x.id === taskId);
            state[foundIndex].name = taskName;
            return state
        }
    }
});

export const { addTask, deleteTask, updateTask } = tasksSlice.actions;

export default tasksSlice.reducer;