import React, { useEffect } from "react";
import { useState } from "react";

const StopWatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isStop, setIsStop] = useState(true);

  const startStopHandler = () => setIsStop(!isStop);

  const resentHandler = () => {
    setSeconds(0);
    setMinutes(0);
    setIsStop(true);
  };

  useEffect(() => {
    let id = null;
    if (!isStop) {
      id = setInterval(() => {
        setSeconds(seconds + 1);
        if (seconds === 59) {
          setMinutes(minutes + 1);
          setSeconds(0);
        }
        clearInterval(id);
      }, 1000);
    } else {
      clearInterval(id);
    }

    return () => clearInterval(id);
  });

  return (
    <>
      <h1>Stop Watch</h1>
      <hr />
      <h2>
        {minutes < 10 ? "0" + minutes : minutes} :{" "}
        {seconds < 10 ? "0" + seconds : seconds}
      </h2>
      <button onClick={startStopHandler}>{isStop ? "Start" : "Stop"}</button>

      <button onClick={resentHandler}>Reset</button>
    </>
  );
};

export default StopWatch;
