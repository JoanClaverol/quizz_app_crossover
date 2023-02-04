import { useState } from "react";
import data from "../assets/data";

const Answers = ({ question, score, setScore }) => {

  const [activeQuestion, setActiveQuestion] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [result, setResult] = useState(0)
    
    const [correct, setCorrect] = useState(null);

    const answers = [...data[activeQuestion].incorrect_answers, data[activeQuestion].correct_answer];
    answers.sort(() => Math.random() - 0.5);

  
  const handleClick = (e) => {
    if (e.target.innerText === question.correct_answer) {
      setCorrect(true);
      setScore(score + 1);
    } else {
      setCorrect(false);
    }
  }

  return (
    <div className='quiz'><h1>Quiz</h1>
    {showScore ? ( <>You Scored {result} out of {data.length}</>
    ):(
    <>
  
    <div className='answers-section'>

  {correct === null ?
    (answers.map((answer) => {
      return (
        <button onClick={(e) => handleClick(e)}>{answer}</button>
      );
    })) : correct === true || correct === false ? (
      correct ? <div>Correct!</div> : <div>Incorrect!</div>
    ) : null}
</div></>)}
</div>
);
}

export default Answers;