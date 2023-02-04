import React, {useState} from 'react'
import data from "../assets/data";
import Answers from "./Answers";

const Question = ({ question, score, setScore }) => {

  const [activeQuestion, setActiveQuestion] = useState(0)

  return (
    <div className="question">
      <h2>Question {activeQuestion +1} of {data.length}</h2>
        {data[activeQuestion].question}
      <Answers question={question} score={score} setScore={setScore} />
    </div>
  );
}

export default Question;