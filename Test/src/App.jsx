import React, { useState } from 'react';
import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Cards from './comp_1/Cards';
import FormNeta from './comp_1/FormNeta';

const App = () => {
  const [politician, setPolitician] = useState([
    {
      id: 100,
      name: "",
      age: 78,
      state: "Odisha",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDbqWxuZfButPBewlLrmTMO7uAQjmx5BDUAw&usqp=CAU",
    }
    ,{
      id:101,
      name:"Revent Reddy",
      age:49,
      state:"Telengana",
      url:"https://upload.wikimedia.org/wikipedia/commons/f/f0/Shri_Anumula_Revanth_Reddy_%28cropped%29.jpg"
    },
    {
      id:102,
      name:"Mamata Banarjee",
      age:70,
      state:"West Bengol",
      url:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Official_portrait_of_Mamata_Banerjee.jpg/375px-Official_portrait_of_Mamata_Banerjee.jpg"
    },{
      id:103,
      name:"Arvind Kejriwal",
      age:51,
      state:"Delhi",
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOUhpufmKbIJJ7IuEtp_3BYa8OhPZYxpQnig&usqp=CAU"
    },{
      id:104,
      name:"Narendra Modi",
      age:80,
      state:"Gujurat",
      url:"https://scontent.fbbi5-3.fna.fbcdn.net/v/t39.30808-6/375051969_1078526923641539_6141717613249906768_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qa9HB51zosQQ7kNvgGdPgi-&_nc_ht=scontent.fbbi5-3.fna&oh=00_AfC6PWo8dgF-Nb78Bzw-_c_eq5ETpyu6bGh1L7P3ARWnhg&oe=663FE0C9"
    }
    // Rest of the politician data
  ]);

  const addPolitician = (newPolitician) => {
    setPolitician([...politician, newPolitician]);
  };

  return (
    <div>
      <nav>
        <ul className='flex justify-between px-5 items-center text-3xl font-bold'>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/form'>Form</NavLink></li>
          <li><NavLink to='/list'>List</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Cards netaList={politician} />} />
        <Route path='/form' element={<FormNeta addPolitician={addPolitician} />} />
        <Route path='/list' element={<Cards netaList={politician} />} />
      </Routes>
    </div>
  );
};

export default App;
