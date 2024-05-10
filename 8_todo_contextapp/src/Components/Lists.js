import React, { useContext } from 'react'; 
import List from './List'; 
import {TodoContext} from '../Contexts/TodoContext'; 
const Lists = () => {
  const { todo } = useContext(TodoContext);
  
  return (
    <div className='flex flex-col gap-3 w-100'>
      {
        todo.map((todoItem,index) => (
          <List key={index} status={todoItem.status} item={todoItem.item} time={todoItem.time} />
        ))
      }
    </div>
  );
};

export default Lists;
