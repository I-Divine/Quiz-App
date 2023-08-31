import { useState } from "react";
import styles from "../style.module.css";
//To go to the next question of the quiz
const ChangeButton = ({
  questions,
  questionNo,
  setQNO,
  correctOption,
  marking,
  setMarking,
}) => {
  const optionCheck = () => {
    if (document.getElementById("1").checked && correctOption === 1) {
      saveCorrectOption(true);
    } else if (document.getElementById("2").checked && correctOption === 2) {
      saveCorrectOption(true);
    } else if (document.getElementById("3").checked && correctOption === 3) {
      saveCorrectOption(true);
    } else if (document.getElementById("4").checked && correctOption === 4) {
      saveCorrectOption(true);
    } else {
      saveCorrectOption(false);
    }
  };
  const saveCorrectOption = (value) => {
    setMarking([...marking, value]);
  };
  const next = () => {
    optionCheck();
    setQNO(questionNo + 1);
  };
  const previous = () => {
    setQNO(questionNo - 1);
  };

  if (questionNo == questions.length - 1) {
    return (
      <div className={styles.changeButton}>
        <button onClick={next} id="changeBtn" disabled>
          Next Question
        </button>
      </div>
    );
  } else {
    return (
      <div className={styles.changeButton}>
        <button onClick={next} id="changeBtn">
          Next Question
        </button>
      </div>
    );
  }
};
export default ChangeButton;
// export { ChangeButton, optionCheck, saveCorrectOption };
