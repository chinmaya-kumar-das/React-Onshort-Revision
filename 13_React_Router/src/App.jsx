import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  let [time, setTime] = useState(new Date());
  // useEffect(() => {
  //   setTimeout(setInterval(new Date()), 1000);
  // }, [time]);

  //new way
  useEffect(()=>{
    const intervalId=setInterval(()=>{
      setTime(new Date())
    },1000)
    return ()=>{clearInterval(intervalId)}
  },[]);


  return (
    <div className="d-flex flex-column gap-2 px-auto justify-content-center mx-5 my-5">
      <h1>BharatClock</h1>
      <p>TRhis is the clock that shows the time in Bharat at all times.</p>
      <p className="text-lg-end font-weight-bold">
        This is the current time : 
           <span className="text-primary text-lg-end font-weight-bold">
          {time.toLocaleString()}
        </span>
      </p>
    </div>
  );
};

export default App;
