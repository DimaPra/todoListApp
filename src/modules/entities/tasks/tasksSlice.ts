import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState:{
    tasksList:[],
    taskName: '',
    },
    reducers :{ 
        saveTasks: (state, action) => {
           state.tasksList = action.payload
        },
        saveTasksName: (state, action) =>{
           state.taskName = action.payload
        }
    }
    
})
export const { saveTasks,  saveTasksName} = tasksSlice.actions;

export const tasksList = (store) => store.tasks.tasksList;
export const taskName = (store) => store.tasks.taskName;

