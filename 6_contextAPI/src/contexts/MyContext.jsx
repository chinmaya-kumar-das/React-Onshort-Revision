import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [celebrity, setCelebrity] = useState([
    {
      name: "Tom Cruise",
      age: 50,
      country: "USA",
      image: "https://wallpapercave.com/wp/wp12425011.jpg",
    },
    {
      name: "Kristen Stewart",
      age: 25,
      country: "England",
      image: "https://wallpapercave.com/wp/wp7668881.jpg",
    },
    {
      name: "Amber Heard",
      age: 43,
      country: "America",
      image: "https://wallpapercave.com/wp/wp13399483.jpg",
    },
    // Add other celebrities here
  ]);

  return (
    <AppContext.Provider value={{ celebrity, setCelebrity }}>
      {props.children}
    </AppContext.Provider>
  );
};
