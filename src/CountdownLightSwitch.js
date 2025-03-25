import React, { Component, useState,useState } from 'react';
import ''



 function CountdownLightSwitch() {
  const [time, setTime] = useState(30);
  const [isRunning, setIsRunning] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning, time]);

  const handleStart = () => {
    if (time > 0) setIsRunning(true);
  };

  const handleToggleMode = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div >
      <div className>
        <h1 className>Countdown & Light Switch</h1>

        <div>
          <span>Light Mode</span>
          <input type="btn" checked={isLightMode} onChange={handleToggleMode} />
        </div>

        <div >
          <div
           
        
          ></div>
        </div>

        <div>{time}s</div>

        <button
          onClick={handleStart}
         
        >
          Start Timer
        </button>
      </div>
    </div>
  );
}
export default CountdownLightSwitch