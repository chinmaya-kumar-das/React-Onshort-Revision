import React from 'react';

const Card = ({ name, age, sal, deleteHandler }) => {
  return (
    <div className='card shadow'>
      <div className='card-body  d-flex flex-row justify-content-around gap-5'>
        <h5 className='card-title w-50'>{name}</h5>
        <p className='card-text'>Age: {age}</p>
        <p className='card-text'>Salary: {sal}</p>
        <button onClick={deleteHandler} className='btn btn-danger'>Delete</button>
      </div>
    </div>
  );
}

export default Card;
