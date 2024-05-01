import React,{useState} from 'react'
import Card from './Card';
const Cards = () => {
    let [data,setData]=useState(
        [
          {
            name:"chinu",
            age:22,
            sal:2000,
         }
          ,
          {
            name:"sanjay",
            age:32,
            sal:6000,
        },
          {
            name:"ajay",
            age:52,
            sal:27000,
         }
          ,
          {
            name:"kalia",
            age:22,
            sal:5000,
          }
          
        ]);
        function deleteHandler(index){
            setData((pre)=>{
                let data=[...pre];
                data.splice(index,1);
                return data;
              })
          }
        function dataHandler(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
    
            let newData = {
                name: formData.get('name'),
                age: formData.get('age'),
                sal: formData.get('sal'),
            }
            setData(prev => [...prev, newData]); // Corrected the missing return statement here
            event.target.reset();
        }
  return (
    <div className='card bg-dark text-light shadow'>
    <div>
      <form onSubmit={dataHandler} className=' py-2 d-flex flex-row gap-2 cursor-pointer'>
        <input type='text' className='form-control' name="name" placeholder='Enter name' />
        <input type='text' className='form-control' name='age' placeholder='Enter age' />
        <input type='text' className='form-control' name='sal' placeholder='Enter salary' />
        <button type="submit" className='btn btn-success'>Add</button>
      </form>
    </div>
    <div className='d-flex flex-column'>
    
      {
        data.map((datas, index) => (
          <Card deleteHandler={() => deleteHandler(index)} name={datas.name} age={datas.age} sal={datas.sal} key={index} />
        ))
      }
    </div>
  </div>
  
  )
}

export default Cards