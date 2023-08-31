import { useState } from "react";
import styles from "../style.module.css";
const ChangeButton = ({
  questions,
  questionNo,
  setQNO,
  correctOption,
  marking,
  setMarking,
}) => {
  // console.log(questions.length)
  // const [correct, setCorrect] = useState(false);
  const optionCheck = () => {
    if (document.getElementById("1").checked && correctOption === 1) {
      saveCorrectOption(true);
      // console.log("correct");
    } else if (document.getElementById("2").checked && correctOption === 2) {
      saveCorrectOption(true);
      // console.log("correct");
    } else if (document.getElementById("3").checked && correctOption === 3) {
      // console.log("correct");
      saveCorrectOption(true);
    } else if (document.getElementById("4").checked && correctOption === 4) {
      // console.log("correct");
      saveCorrectOption(true);
    } else {
      saveCorrectOption(false);
      // console.log("false");
    }
  };
  const saveCorrectOption = (value) => {
    // setCorrect(value);
    setMarking([...marking, value]);
    // console.log(marking);
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
        {/* <button onClick={previous} >Previous Question</button> */}
        <button onClick={next} id="changeBtn" disabled>
          Next Question
        </button>
        {/* <button onClick={()=>{
                    alert("submitted")}}>Submit Test</button> */}
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
  //   export { saveCorrectOption };
};
export default ChangeButton;
// export { ChangeButton, optionCheck, saveCorrectOption };
