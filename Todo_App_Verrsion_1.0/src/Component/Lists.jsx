import React from 'react'
import List from './List'
const Lists = () => {
    let todo=[
        {
            name:"food",
            date:"09-04-2024"
        },
        {
            name:"riding",
            date:"07-04-2024"
        },
        {
            name:"study",
            date:"11-04-2024"
        }
    ]
  return (
    <div>
        <div>
            <input type='text' placeholder='Enter text'></input>
            <input type='date' placeholder='Enter date'></input>
            <button type="button" className="btn btn-danger">Danger</button>
        </div>
        <div>
            {
                todo.map((data,index)=>{
                    return <List key={index} data={data}></List>
                })
            }
        </div>
    </div>
  )
}

export default Lists