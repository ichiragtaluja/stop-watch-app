import React, { useEffect } from "react";
import { useState } from "react";

const StopWatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isStop, setIsStop] = useState(true);
  const [splitTime, setSplitTime] = useState([]);

  const startStopHandler = () => setIsStop(!isStop);

  const resentHandler = () => {
    setSeconds(0);
    setMinutes(0);
    setIsStop(true);
    setSplitTime([]);
  };

  const splitTimeHandler = () => {
    setSplitTime([...splitTime, { seconds: seconds, minutes: minutes }]);
  };

  useEffect(() => {
    let id = null;
    if (!isStop) {
      id = setInterval(() => {
        if (seconds === 59) {
          setMinutes(minutes + 1);
          setSeconds(0);
          clearInterval(id);
        } else setSeconds(seconds + 1);
      }, 1000);
    } else {
      clearInterval(id);
    }

    return () => clearInterval(id);
  }, [seconds, isStop, minutes]);

  return (
    <>
      <h1 className="time">
        {minutes < 10 ? "0" + minutes : minutes} :{" "}
        {seconds < 10 ? "0" + seconds : seconds}
      </h1>
      <button onClick={startStopHandler}>{isStop ? "Start" : "Stop"}</button>
      <button onClick={splitTimeHandler}>Split Time</button>

      <button onClick={resentHandler}>Reset</button>
      <ol>
        {splitTime.map(({ minutes, seconds }, index) => (
          <li key={index}>
            {minutes < 10 ? "0" + minutes : minutes} :{" "}
            {seconds < 10 ? "0" + seconds : seconds}
          </li>
        ))}
      </ol>
    </>
  );
};

export default StopWatch;
