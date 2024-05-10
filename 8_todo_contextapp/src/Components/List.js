import React, { useContext } from 'react'
import { TodoContext } from '../Contexts/TodoContext'

const List = ({ time, item, key }) => {
    const { deleteHandler} = useContext(TodoContext);
    return (
        <div className='flex justify-around px-2 py-2 gap-2 w-[350px] bg-slate-600'>
            <input  type="checkbox" />
            <span>{item}</span>
            <span>{time}</span>
            <button onClick={() => deleteHandler(key)}>❌</button>
        </div>
    )
}

export default List;
