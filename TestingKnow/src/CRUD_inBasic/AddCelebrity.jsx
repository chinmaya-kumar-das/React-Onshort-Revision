import React from 'react'
import { useNavigate } from 'react-router';

const AddCelebrity = ({addCelebrity}) => {
  let navigate=useNavigate();
  function submitHandler(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const newData = {
      name: formData.get('name'),
      age: formData.get('age'),
      image: formData.get('image'),
      country: formData.get('country'),
    };
    addCelebrity((prev) => [...prev, newData]);
    navigate('/');
    event.target.reset();
  }
  return (
    <div className='w-[100%] h-[100%] py-2  flex flex-start justify-center '>
      <form onSubmit={submitHandler} className='w-[40%] h-[90vh] flex flex-col justify-center items-center gap-2'>
       <input className='w-[100%] px-2 rounded-md h-11 align-middle' name='name'  type='text' placeholder='Enter celebrity Name'></input>
       <input className='w-[100%] px-2 rounded-md h-11 align-middle' name='county' type='text' placeholder='Enter country'></input>
       <input className='w-[100%] px-2 rounded-md h-11 align-middle' name='age' type='text' placeholder='Enter  Age'></input>
       <input className='w-[100%] px-2 rounded-md h-11 align-middle' name='image' type='url' placeholder='Enter image Url'></input>
      <button className='text-2xl h-11 font-bold bg-[#3a86ff] px-5 rounded-md'>Add</button>
      </form>
    </div>
  )
}

export default AddCelebrity