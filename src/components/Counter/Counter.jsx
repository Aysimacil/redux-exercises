import React from 'react'
import "./Counter.css"
import { useDispatch, useSelector } from 'react-redux'
import {clear , decrement, increment } from "../../redux/actions/counterAction"

const Counter = ({onClick}) => {
  const dispatch =useDispatch()
  const {counter} =useSelector((state) =>state.count)
  return (
    <div>
    <h2>Counter With Redux</h2>
    <h3>{counter}</h3>
      <div className='btn'>
        <button className='counter-button positive'
        onClick={() => dispatch(increment())}>Increase</button>
      </div>
      <div className='btn'>
        <button className='counter-button zero'
         onClick={() => dispatch(clear())}>Clear</button>
      </div>
      <div className='btn'>
        <button className='counter-button negative'
        onClick={() => dispatch(decrement())}>Decrease</button>
      </div>
      <div className='other-btn'>
      
        <button onClick={onClick} className='other'>Other Page</button>
        
      </div>
    </div>
  )
}

export default Counter
