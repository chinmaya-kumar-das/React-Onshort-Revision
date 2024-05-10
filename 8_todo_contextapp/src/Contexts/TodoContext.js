
import { createContext,useState } from 'react';

export const TodoContext=createContext();

export const TodoContextProvider=(props)=>{
    const [todo,setTodo]=useState([
        {
            item:"playing",
            time:10,
            status:false,

        },
        {
            item:"lunch",
            time:1,
            status:false,
            
        },
        {
            item:"Market",
            time:11,
            status:false,
            
        },
        {
            item:"Dinner",
            time:8,
            status:true,
            
        }
    ])
    function deleteHandler(key){
        let data=[...todo];
        data.splice(key,1);
        setTodo(data);
    }
    function formHandler(e){
        
        e.preventDefault();
        const formData=new FormData(e.target);
        const newFormData={
            item:formData.get('item'),
            time:Number.parseInt(formData.get('time'))
        }
       
        setTodo((prev)=>[...prev,newFormData]);
        e.target.reset();
    }
   
    return <TodoContext.Provider value={{todo,setTodo,deleteHandler,formHandler}}>
            {props.children}
    </TodoContext.Provider> 
     
    
}