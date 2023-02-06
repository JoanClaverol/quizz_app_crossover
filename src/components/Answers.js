import { Button } from "react-bootstrap";
import { useState } from "react";

const Answers = ({ question, score, setScore }) => {

  const [correct, setCorrect] = useState(null);

  const answers = [...question.incorrect_answers, question.correct_answer];
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
    <div className="answers">
      {correct === null ?
        (answers.map((answer) => {
          return (
            <Button
              variant="primary"
              onClick={(e) => handleClick(e)}
              size="sm"
              style={{ margin: '5px 2px' }}>{answer}</Button>
          );
        })) : correct === true || correct === false ? (
          correct ? <div>Correct!</div> : <div>Incorrect!</div>
        ) : null}
    </div>
  );
}

export default Answers;