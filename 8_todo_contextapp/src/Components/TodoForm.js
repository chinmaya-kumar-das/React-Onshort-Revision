import React, { useContext } from 'react'
import { TodoContext } from '../Contexts/TodoContext'
const TodoForm = () => {
const {formHandler}=useContext(TodoContext);
  return (
    <div className='shadow-sm'>
      <form onSubmit={formHandler} className=' flex flex-col gap-2 w-[300px]'>
        <input type='text' required name='item' className='rounded-md text-white bg-black px-2 py-2' placeholder='Enter  item'></input>
        <input type='number' required  min={1} max={24} name='time' className='rounded-md text-white bg-black px-2 py-2' placeholder='Enter time'></input>
        <button type='submit' name='button' className='cursor-pointer text-black bg-blue-500 px-2 py-2 rounded-md' >Add</button>
       
       </form>
       
    </div>
  )
}

export default TodoForm