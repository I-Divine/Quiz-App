import { useEffect, useState } from "react";
import Modal from "./ScoreModal";
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
      document.getElementById("1").checked = false;
    } else if (document.getElementById("2").checked && correctOption === 2) {
      saveCorrectOption(true);
      document.getElementById("2").checked = false;
    } else if (document.getElementById("3").checked && correctOption === 3) {
      saveCorrectOption(true);
      document.getElementById("3").checked = false;
    } else if (document.getElementById("4").checked && correctOption === 4) {
      saveCorrectOption(true);
      document.getElementById("4").checked = false;
    } else {
      saveCorrectOption(false);
    }
  };
  const saveCorrectOption = (value) => {
    setMarking(() => [...marking, value]);
  };

  const [totalmark, setMark] = useState(0);

  useEffect(() => {
    setMark(0);
    marking.forEach((mark) => {
      if (mark == true) {
        setMark((currentValue) => {
          return currentValue + 1;
        });
      }
    });
  }, [marking]);

  const submitTest = () => {
    optionCheck();
    setIsOpen(true);
    document.getElementById("submitBtn").disabled = true;
    document.getElementById("changeBtn").disabled = true;
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
