import React from "react";
import ReactDOM from "react-dom";
import style from "../style.module.css";
// this modal displays the score at the end of the test
const Modal = ({ setIsOpen, maxMark, totalmark }) => {
  return ReactDOM.createPortal(
    <>
      <div className={style.modaloverlay} />
      <div className={style.modal}>
        <h2>{Math.floor((totalmark / maxMark) * 100)}%</h2>
        <h3>
          Score: {totalmark}/{maxMark}
        </h3>
        <button onClick={() => location.reload} className={style.startover}>
          Start Over
        </button>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </div>
    </>,
    document.getElementById("scoreModal")
  );
};
export default Modal;
