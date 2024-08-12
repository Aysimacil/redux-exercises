import { type } from "@testing-library/user-event/dist/type";
import { ADD_TODO, CLEAR_TODO, DELETE_TODO, TOGGLE_TODO } from "../types/todoType";

export const addTodo = (payload) => {
    return {type: ADD_TODO, payload };
};
export const clearTodo = () => {
    return {type: CLEAR_TODO};
} 
export const toggleTodo = (payload) =>{
    return {type: TOGGLE_TODO, payload }
}
export const deleteTodo = (payload) => {
    return {type: DELETE_TODO, payload}
}