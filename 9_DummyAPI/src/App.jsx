import React, { useState } from 'react'

const App = () => {
  let API_URL="https://dummyjson.com/posts";
let [data,setdata]=useState();
async function datafetch(){
  try{
  let rowdata=await fetch(API_URL)
  let Data=await rowdata.json();
  setdata(Data)
 
  }
  catch(e){console.log("error")}
}

  return (
    <div className='bg-[#bde0fe] h-[100vh] flex flex-col items-center'>
    <p className='text-center'>Data fetch from API</p>
    <button onClick={datafetch} className='bg-red-500 px-2 py-2 rounded-md text-center'>Fetch</button>
    <div>
    {
    data && data.posts.map((post)=>(
      <div key={post.id}>
         <p>{post.title}</p>
         <p>{post.reactions}</p>
      </div>
     ))
    }
    </div>
    </div>
  )
}

export default App