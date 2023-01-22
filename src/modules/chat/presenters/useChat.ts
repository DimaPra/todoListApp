import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chatTasksList, saveChatTasks } from "../../entities/chat/chatSlice";
import { getTodosUseCase } from "../useCases/getTodosUseCase";

export const useChat = () => {
  const [isLoading, setIsLoading] = useState(false);
  const chatTasks = useSelector(chatTasksList);
  const dispatch = useDispatch();

  useEffect(() => {
    getTodos();
  }, []);

  const  getTodos = async () =>{
   setIsLoading(true)
   const response = await getTodosUseCase();
   if(response?.status === 200){
    dispatch(saveChatTasks(response?.data));
   };
   setIsLoading(false);
  }
  return{ isLoading, chatTasks }
};
