import React from 'react';
import { FcLike } from "react-icons/fc";
const List = ({ name, country, age, url, deleteHandler }) => {
  return (
    <div className='flex flex-col justify-center items-center py-2 h-[350px] w-[250px] border-2 rounded-lg bg-[#A9B8C2] hover:scale-125 hover: hover:transition-transform'>
      <img src={url} className='px-2 h-[70%] w-[100%] object-cover' alt='Celebrity' />
      <p>Name: {name}</p>
      <p>Country: {country}</p>
      <p>Age: {age} yr</p>
      
      <button onClick={deleteHandler} className='bg-[#3a86ff] px-3 py-1 rounded-lg text-white'>Delete</button>
    </div>
  );
};

export default List;
