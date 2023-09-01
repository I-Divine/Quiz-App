import React from "react";
import ReactDOM from "react-dom";
import style from "../style.module.css";
// this modal displays the score at the end of the test
const Modal = ({ setIsOpen, maxMark, totalmark }) => {
  return ReactDOM.createPortal(
    <>
      <div className={style.modaloverlay} />
      <div className={style.modal}>
        <h3>
          Score: {totalmark}/{maxMark}
        </h3>
        <button onClick={() => setIsOpen(false)}>close</button>
      </div>
    </>,
    document.getElementById("scoreModal")
  );
};
export default Modal;
