import Options from "./Options";
import ChangeButton from "./ChangeButtons";
import styles from "../style.module.css";
const Question = ({
  question,
  questions,
  options,
  questionNo,
  setQNO,
  correctOption,
  marking,
  setMarking,
}) => {
  return (
    <div className={styles.container}>
      <h3>Select the most correct option</h3>
      <div>{question}</div>
      <Options options={options}></Options>
      <ChangeButton
        questions={questions}
        marking={marking}
        setMarking={setMarking}
        questionNo={questionNo}
        setQNO={setQNO}
        correctOption={correctOption}
      ></ChangeButton>
    </div>
  );
};
export default Question;
