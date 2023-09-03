import { useState, useEffect } from "react";
import style from "../style.module.css";
const Timer = ({ time, timeUp }) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [deadline, setDeadline] = useState(Date.now() + 1000 * 60 * time);
  const interval = setInterval(() => {
    getTime(deadline);
  }, 1000);
  const getTime = () => {
    const timeLeft = deadline - Date.now();
    if (timeLeft < 1) {
      document.getElementById("changeBtn").disabled = true;
    }
    setMinutes(Math.floor((timeLeft / 1000 / 60) % 60));
    setSeconds(Math.floor((timeLeft / 1000) % 60));
  };
  const pad = (time) => {
    return time < 0 ? "00" : time < 10 ? `0${time}` : time;
  };
  return (
    <div className={style.Timer}>
      <div>
        Time:
        <span>
          {pad(minutes)}:{pad(seconds)}
        </span>
      </div>
    </div>
  );
};
export default Timer;
