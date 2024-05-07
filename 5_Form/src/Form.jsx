import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';

const Form = () => {
    let [name,setname]=useState();
    let [age,setAge]=useState();
    let [sal,setSal]=useState();
    let  noOfUpdates=useRef(0);
    function submitHandler(event) {
      event.preventDefault();
        console.log("submitted");
        let formData = new FormData(event.target);
        let newName = formData.get('name');
        let newAge = formData.get('age');
        let newSal = formData.get('salary');
        console.log("Data fetched")
        console.log(newName, newAge, newSal);
        // event.target.reset();
        noOfUpdates.current +=1;
        console.log(noOfUpdates)
    }
    
    
  return (
    <div>

        <form onSubmit={submitHandler} className='form'>

            <input type="text" name="name" value={name} placeholder="Enter name"></input>
            <input type="number" name="age" value={age} placeholder="Enter age"></input>
            <input type="numbert" name="salary" value={sal} placeholder="Enter salary"></input>
            <button>Submit</button>
            
        </form>
    </div>
  )
}

export default Form