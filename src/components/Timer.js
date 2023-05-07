import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import ringtone from "../static/a.mp3";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isStop, setIsStop] = useState(true);
  const [isStart, setIsStart] = useState(false);

  const [play, { stop }] = useSound(ringtone);

  useEffect(() => {
    let id = null;

    if (isStart && !isStop) {
      id = setInterval(() => {
        if (seconds === 0 && minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else if (minutes === 0 && seconds === 0) {
          setIsStop(true);
          play();
        } else setSeconds(seconds - 1);
      }, 1000);
    } else {
      clearInterval(id);
      setIsStart(false);
      setIsStop(true);
    }

    return () => {
      clearInterval(id);
    };
  }, [isStart, isStop, seconds, minutes, play]);

  //   useEffect(() => {
  //     let id = null;

  //     if (!isStop) {
  //       id = setInterval(() => {
  //         if (seconds === 0) {
  //           if (minutes > 0) {
  //             setMinutes(minutes - 1);
  //           } else {
  //             setIsStop(true);
  //           }
  //         } else {
  //           setSeconds(seconds - 1);
  //         }
  //       }, 1000);
  //     } else {
  //       clearInterval(id);
  //     }

  //     return () => {
  //       clearInterval(id);
  //     };
  //   }, [isStop, seconds, minutes]);

  return (
    <>
      <div className="input-container">
        <span>Set a timer for </span>
        <input
        value={minutes}
          maxLength={2}
          placeholder="00"
          onChange={(e) => {
            setMinutes(
              e.target.value.length > 2
                ? Number(e.target.value.slice(-2))
                : Number(e.target.value)
            );
          }}
          type="number"
          min={0}
          max={59}
        />
        <span>min : </span>
        <input
        value={seconds}
          maxLength={2}
          placeholder="00"
          onChange={(e) => {
            setSeconds(
              e.target.value.length > 2
                ? Number(e.target.value.slice(-2))
                : Number(e.target.value)
            );
          }}
          type="number"
          min={0}
          max={59}
        />
        <span>sec</span>
      </div>

      <div>
        <h1 className="time">{minutes < 10 ? "0" + minutes : minutes}</h1>{" "}
        <span className="letter">m</span>
        <h1 className="time colon">:</h1>{" "}
        <h1 className="time"> {seconds < 10 ? "0" + seconds : seconds}</h1>
        <span className="letter">s</span>
      </div>

      <button
        onClick={() => {
          setIsStop(false);
          setIsStart(true);
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          setIsStart(false);
          setIsStop(true);
          stop();
        }}
      >
        Stop
      </button>
    </>
  );
};

export default Timer;
