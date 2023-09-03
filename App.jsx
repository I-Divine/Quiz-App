import { useState } from "react";
import Question from "./components/Question";
import Header from "./components/Header";
import Timer from "./components/Timer";
import { content } from "./components/QuestionContent";
import SubmitButton from "./components/SubmitButton";
const App = () => {
  const [questionNo, setQNO] = useState(0);
  const [questions, setQs] = useState(content);
  const [question, setQ] = useState(questions);
  const [marking, setMarking] = useState([true]);
  const [time, setTime] = useState(30); //in minutes
  const [timeUp, setTimeup] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header></Header>
      <Timer time={time} timeUp={timeUp}>
        {" "}
      </Timer>

      <Question
        questions={questions}
        setMarking={setMarking}
        marking={marking}
        correctOption={question[questionNo].correctOption}
        question={question[questionNo].question}
        options={question[questionNo].options}
        questionNo={questionNo}
        setQNO={setQNO}
      ></Question>
      <SubmitButton
        marking={marking}
        correctOption={question[questionNo].correctOption}
        setMarking={setMarking}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        total={question.length}
      />

      {/* <button onClick={() => setIsOpen(true)}>Open</button> */}
    </>
  );
};
export default App;
