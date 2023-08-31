import { useState } from "react";
import Question from "./components/Question";
import questionContent from "./components/QuestionContent";
import ChangeButton from "./components/ChangeButtons";
import Header from "./components/Header";
import Timer from "./components/Timer";
import { content } from "./components/QuestionContent";
import SubmitButton from "./components/SubmitButton";
import Loading from "./components/Loading";
import Modal from "./components/scoreModal";
const App = () => {
  const [questionNo, setQNO] = useState(0);
  const [questions, setQs] = useState(content);
  const [question, setQ] = useState(questions);
  const [marking, setMarking] = useState([true]);
  const [time, setTime] = useState(30); //in minutes
  const [timeUp, setTimeup] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // const [loading, setLoading] = useState(true);
  // const [checkedOption , setChecked] = useState(0);
  // console.log(questions);
  // console.log(question.options);
  // if (loading) {
  //   return <Loading loading={loading} setLoading={setLoading} />;
  // }
  return (
    <div>
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
      />
      {isOpen && <Modal setIsOpen={setIsOpen} />}
      <button onClick={() => setIsOpen(true)}>Open</button>
    </div>
  );
};
export default App;
