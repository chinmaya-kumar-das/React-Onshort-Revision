
import TodoForm from './Components/TodoForm';
import Lists from './Components/Lists';
import React  from 'react';
function App() {
  return (
 <div className='bg-green-500 h-[100vh] flex flex-col  items-center gap-2'>
       <h1 className="text-4xl font-bold uppercase"><u>Project Started</u></h1>
      <TodoForm/>
      <Lists/>

 </div>
   
  );
}

export default App;
