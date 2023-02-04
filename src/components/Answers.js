import { useState } from "react";

const Answers = ({ question }) => {

  const [correct, setCorrect] = useState(null);

  const answers = [...question.incorrect_answers, question.correct_answer];
  answers.sort(() => Math.random() - 0.5);

  const handleClick = (e) => {
    if (e.target.innerText === question.correct_answer) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  }

  return (
    <div className="answers">
      {correct === null ?
        (answers.map((answer) => {
          return (
            <button onClick={(e) => handleClick(e)}>{answer}</button>
          );
        })) : correct === true || correct === false ? (
          correct ? <div>Correct!</div> : <div>Incorrect!</div>
        ) : null}
    </div>
  );
}

export default Answers;