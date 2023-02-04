import { useState } from "react";
import data from "../assets/data";
import Question from "./Question";

const Quizz = () => {

  const [score, setScore] = useState(0);

  return (
    <div className="quizz">
      {!data ?
        <div>Loading...</div> :
        data.map((question) => {
          return <Question question={question} score={score} setScore={setScore} />
        }
        )}
      <h2 className="score">Score {score} / {data.length}</h2>
    </div>

  );
}

export default Quizz;