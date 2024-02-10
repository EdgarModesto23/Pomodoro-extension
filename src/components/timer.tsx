import { useState, useEffect } from "react";
import React from "react";

interface Timer {
  minutes: number;
  seconds: number;
}

interface TimerString {
  minutes: string;
  seconds: string;
}

const Timer: React.FC = () => {
  const [time, setTime] = useState<Timer>({
    minutes: 25,
    seconds: 0,
  });

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime((prevTime) => updateTime(prevTime));
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);
  const updateTime = (currentTime: Timer): Timer => {
    if (currentTime.seconds == 0) {
      console.log("hey");
      return {
        minutes: currentTime.minutes - 1,
        seconds: 59,
      };
    } else {
      return {
        minutes: currentTime.minutes,
        seconds: currentTime.seconds - 1,
      };
    }
  };

  return (
    <>
      <div>
        <p>
          {time.minutes}:{time.seconds < 10 ? `0${time.seconds}` : time.seconds}
        </p>
      </div>
    </>
  );
};

export default Timer;
