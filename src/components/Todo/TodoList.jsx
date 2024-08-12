import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TodoItem from "./TodoItem"
import { clearTodo } from '../../redux/actions/todoAction'
const TodoList = () => {
  const { todoList } = useSelector((state) => state.todo)
  const dispatch =useDispatch()
  const handleClearList =() => {
    dispatch(clearTodo())
  }
  return (
    <div>
      <div>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className='clear-wrapper'>
        <button className='clear-button' onClick={handleClearList}>
          Clear
        </button>

      </div>
      
    </div>
  )
}

export default TodoList;
