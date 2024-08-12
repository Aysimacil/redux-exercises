import React from 'react'
import ok from "../../assets/ok.png";
import dlt from "../../assets/delete.png";
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleTodo } from '../../redux/actions/todoAction';

const TodoItem = ({text, completed, id}) => {
    const dispatch = useDispatch();
    const handleToggle = () => {
        dispatch(toggleTodo(id))
    }

    const handleDelete = () => {
        dispatch(deleteTodo(id))
        dispatch({ type: "DELETE_TODO" , payload: id })
    }
    const styled = {
        textDecoration: completed ? "line-through" : "none",
        backgroundColor: completed ? "#A9A9A9" : "#F5E8DD",
        borderRadius: "5px",
    
      };
  return (
    <div className='todo-list' style={styled}>
        <h2 className='todoText'>{text}</h2>
        <div>
            <span>
                <img src={ok} alt='ok' className='ok-logo' onClick={handleToggle} />
            </span>
            <span>
                <img src={dlt} alt='delete' className='delete-logo' onClick={handleToggle} />
            </span>
        </div>
      
    </div>
  )
}

export default TodoItem
