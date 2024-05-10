import { createContext, useState } from "react";

export const CelebrityContext=createContext();


export const CelebrityContextProvider=(props)=>{
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
    return (
        <CelebrityContext.Provider value={{celebrity,addCelebrity}}>
            {props.children}
        </CelebrityContext.Provider>
    )
}