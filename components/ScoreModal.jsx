import React from "react";
import ReactDOM from "react-dom/client";
import style from "../style.module.css";
const Modal = ({ setIsOpen }) => {
  return (
    <div className={style.modal}>
      <h3>Score</h3>
      <h5></h5>
      <button onClick={() => setIsOpen(false)}>close</button>
    </div>
  );
};
// const portal = ReactDOM.createPortal(document.getElementById("scoreModal"));
export default Modal;
