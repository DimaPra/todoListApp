import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        chatTasksList: [],
        chatTaskName: '',
    },
    reducers: {
        saveChatTasks: (state, action) => {
            state.chatTasksList = action.payload
        },
        saveChatTasksName: (state, action) => {
            state.chatTaskName = action.payload
        }
    }
})
export const { saveChatTasks, saveChatTasksName } = chatSlice.actions;

// Selectors 
export const chatTasksList = (store) => store.chat.chatTasksList;
export const chatTaskName = (store) => store.chat.chatTaskName;

