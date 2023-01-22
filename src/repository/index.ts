import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { chatSlice } from "../modules/entities/chat/chatSlice";
import { tasksSlice } from "../modules/entities/tasks/tasksSlice";

const reducer = combineReducers({
    tasks: tasksSlice.reducer,
    chat: chatSlice.reducer
})

export const store = configureStore({ reducer });