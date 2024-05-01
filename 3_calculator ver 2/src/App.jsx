import React, { useState } from "react";

const App = () => {
  const buttons = [
    "AC",
    "DEL",
    "%",
    "/",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    "00",
    ".",
    "=",
  ];

  const [input, setInput] = useState("0");

  function buttonHandler(event) {
    const buttonValue = event.target.value;
    
    if (buttonValue === "AC") {
      setInput(0);
    } else if (buttonValue === "DEL") {
      setInput(prevInput => prevInput.slice(0, -1));
    } else if (buttonValue === "=") {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error");
      }
    } else {
      setInput(prevInput => prevInput + buttonValue);
    }
    console.log(input)
  }

  return (
    <div className=" ">
      <div className="flex flex-wrap justify-center w-[500px] h-[400px] mt-10 px-5 py-10 mx-auto bg-red-500 gap-5">
        <input
          readOnly
          value={input}
          
          className="w-[95%] rounded-[5px] text-6xl bg-black text-white font-bold h-[70px] float-right"
        />
        {buttons.map((button, index) => (
          <button
            onClick={buttonHandler}
            value={button}
            name="button"
            key={index}
            className="text-black bg-slate-400 rounded-md w-[70px] shadow-md"
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
