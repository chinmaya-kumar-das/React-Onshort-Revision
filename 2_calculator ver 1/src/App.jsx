import React from "react";

const App = () => {
  let buttons = [
    "AC",
    "DEL",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    "0",
    "00",
    ".",
    "=",
  ];

  return (
    <div className=" ">
      <div className="flex flex-row flex-wrap w-[300px] h-[400px] mt-10 px-5 py-10  mx-auto  bg-red-500  gap-5 ">
        <input readOnly className="w-[100%] rounded-sm float-right "/>
        {buttons.map((button, index) => {
          return (
            <button onClick={(event)=>{console.log(event.target.textContent)}} name="button" key={index} className="text-black bg-slate-400 rounded-md  w-[50px] shadow-md">
              {button}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default App;
