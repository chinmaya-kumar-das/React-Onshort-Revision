import React from 'react';
import List from './List';

const Lists = ({ celebrity, deleteHandler }) => {
  return (
    <div className='flex  justify-around flex-wrap min-h-[100vh]'>
      {celebrity.length!==0?(celebrity.map((cele, index) =>
        <List
          key={index}
          deleteHandler={() => deleteHandler(index)}
          name={cele.name}
          age={cele.age}
          url={cele.image}
          country={cele.country}
        />
      )):(<p>No Data found Kindly add some celebrity.</p>)}
    </div>
  );
}

export default Lists;
