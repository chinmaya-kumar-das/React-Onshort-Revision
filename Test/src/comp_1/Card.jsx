import React from 'react'

const Card = ({key,name,age,state,url}) => {
  return (
    <div className='rounded-md h-[250px] w-[200px] bg-red-400 flex flex-col justify-center items-center pt-2 hover:scale-110'>
        <img src={url} className='h-[150px] w-[80%]'></img>
        <p>ID: {key}</p>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>State: {state}</p>
    </div>
  )
}

export default Card