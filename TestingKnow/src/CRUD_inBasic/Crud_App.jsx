import React, { useState } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import Lists from './Lists';
import AddCelebrity from './AddCelebrity';

const Crud_App = () => {
    let [keyWord,setKeyWord]=useState("");
    
    let [celebrity,addCelebrity]=useState([
       
        {
            name:"Tom Cruise" ,age:50,country:"USA", image:"https://wallpapercave.com/wp/wp12425011.jpg"
        },
        {
            name:"Kristen Stewart" ,age:25,country:"England", image:"https://wallpapercave.com/wp/wp7668881.jpg"
        },
        {
            name:"Amber Heard" ,age:43,country:"America", image:"https://wallpapercave.com/wp/wp13399483.jpg"
        },
        {
            name:"Emma Stone" ,age:35,country:"America", image:"https://wallpapercave.com/wp/wp13719671.jpg"
        },
        {
            name:"R.DJ" ,age:45,country:"America", image:"https://wallpapercave.com/wp/wp7082450.jpg"
        }, {
            name:"Surya" ,age:42,country:"India", image:"https://wallpapercave.com/wp/wp5912672.jpg" 
        },{
            name:"Jr.NTR" ,age:40,country:"India", image:"https://wallpapercave.com/wp/wp5485492.jpg"
        },
        {
            name:"Sai Pallavi" ,age:33,country:"India", image:"https://e1.pxfuel.com/desktop-wallpaper/153/277/desktop-wallpaper-indian-heroine-south-hero-heroine-thumbnail.jpg"
        },
        {
            name:"Scarlett Johansson" ,age:46,country:"America", image:"https://e1.pxfuel.com/desktop-wallpaper/373/268/desktop-wallpaper-4531423-johansson-widow-scarlett-johansson-portrait-thumbnail.jpg"
        },
        {
            name:"Ryan Raynold" ,age:45,country:"America", image:"https://e1.pxfuel.com/desktop-wallpaper/765/51/desktop-wallpaper-ryan-reynolds-mark-reynolds-thumbnail.jpg"
        }, {
            name:"Rajinikanth" ,age:78,country:"India", image:"https://e0.pxfuel.com/wallpapers/1019/788/desktop-wallpaper-rajinikanth-rajinikanth-kollywood-tollywood-mollywood-bollywood-hollywood-superstar-actors-actor-thumbnail.jpg" 
        },{
            name:"Jhoony Deep" ,age:48,country:"America", image:"https://e0.pxfuel.com/wallpapers/409/303/desktop-wallpaper-johnny-deep-johnny-deep-hollywood-actor-thumbnail.jpg"
        },

    ]);

  function deleteHandler(index) {
    addCelebrity(prev => {
      let newData = [...prev];
      newData.splice(index, 1);
      return newData;
    });
  }

  function keywordSearch(event){
    setKeyWord(event.target.value.trim().toLowerCase())
    console.log(keyWord)
    if(keyWord===" "){
        setKeyWord("")
       addCelebrity(celebrity)
       window.location.reload()
    }else{
        const filteredData = celebrity.filter((val) => {
            return val.name.toLowerCase().includes(keyWord);
        });
        addCelebrity(filteredData);
    }

  }
  function sortHandler(e) {
    let param = e.target.value;
    let sortedData=[...celebrity];
  
    if (param === 'age') {
      sortedData.sort((a, b) => a.age - b.age);
    } else if (param === 'name') {
      sortedData.sort((a, b) => a.name.localeCompare(b.name));
    }
  
    addCelebrity(sortedData);
  }

  return (
    <div className='flex flex-col overflow-hidden justify-between items-center bg-[#edede9]'>
      <nav className='bg-[#e85d04] w-full py-2 flex gap-10 text-3xl font-bold justify-around'>
        <NavLink to="/">Home</NavLink>
        <div><input type='search' name='search' value={keyWord} onChange={keywordSearch}  className='px-2 py-1 rounded-md text-2xl' placeholder='Search...'></input></div>
        <div className='flex gap-1'>
            <span>Sort by : </span>
            <select htmlFor='sort' onChange={sortHandler}>
              <option value='age' id='sort' name='age'>Age</option>
              <option value='name' id='sort' name='name'>Name</option>
            </select>
            
        </div>
        <NavLink to="/form">New Celebrity</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Lists deleteHandler={deleteHandler} celebrity={celebrity} />} />
        <Route path="/home" element={<Lists deleteHandler={deleteHandler} celebrity={celebrity} />} />
        <Route path="/form" element={<AddCelebrity addCelebrity={addCelebrity} />} />
        
        <Route path="/*" element={<p>page not found !</p>} />
      </Routes>
      <footer className='bottom-0 w-full bg-gray-900 text-white text-center py-2'>copyright@2024 DDMD</footer>
    </div>
  );
}

export default Crud_App;
