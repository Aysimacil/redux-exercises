
import { ADD_TODO, CLEAR_TODO, DELETE_TODO, TOGGLE_TODO } from "../types/todoType";

const initialState = {
    todoList: [
        {id: new Date().getTime(), text:"New Todo List",completed:true}
    ]
}
const todoReducer =(state= initialState, {type, payload }) =>{
    switch (type) {
        case ADD_TODO:
            return {
                todoList: [
                    ...state.todoList,
                    {id: new Date().getTime(), text:payload, completed:false}
                ]
            };
        case CLEAR_TODO:
            return initialState
        case TOGGLE_TODO:
            return {
                todoList: state.todoList.map((todo) =>
                todo.id === payload
                ?{...todo, completed: !todo.completed }
                :{...todo}
            ) 
            }
        case DELETE_TODO:
            return {
                todoList: state.todoList.filter((todo) => todo.id)
            }
    
        default:
            return state;
    }
}
export default todoReducer;