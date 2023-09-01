import { useState } from "react";
import Modal from "./scoreModal";
import style from "../style.module.css";
const SubmitButton = ({
  marking,
  correctOption,
  setMarking,
  isOpen,
  setIsOpen,
  total,
}) => {
  const optionCheck = () => {
    if (document.getElementById("1").checked && correctOption === 1) {
      saveCorrectOption(true);
      console.log("correct");
    } else if (document.getElementById("2").checked && correctOption === 2) {
      saveCorrectOption(true);
      console.log("correct");
    } else if (document.getElementById("3").checked && correctOption === 3) {
      console.log("correct");
      saveCorrectOption(true);
    } else if (document.getElementById("4").checked && correctOption === 4) {
      console.log("correct");
      saveCorrectOption(true);
    } else {
      saveCorrectOption(false);
      console.log("false");
    }
  };
  const saveCorrectOption = (value) => {
    setMarking((currentValue) => [...currentValue, value]);
    console.log(marking);
  };

  const [totalmark, setMark] = useState(0);
  const submitTest = () => {
    optionCheck();
    setIsOpen(true);
    document.getElementById("submitBtn").disabled = true;
    document.getElementById("changeBtn").disabled = true;
    marking.forEach((mark) => {
      if (mark == true) {
        console.log(" ");
        setMark((currentValue) => {
          console.log(currentValue);
          return currentValue + 1;
        });
      }
    });

    console.log(marking);
  };
  return (
    <>
      {" "}
      <div className={style.SubmitButton}>
        <button id="submitBtn" onClick={submitTest}>
          Submit
        </button>
      </div>
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          maxMark={total}
          totalmark={totalmark}
        ></Modal>
      )}
    </>
  );
};

export default SubmitButton;
