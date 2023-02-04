import { useState } from "react";
import data from "../assets/data";
import Question from "./Question";

const Quizz = () => {
  const [score, setScore] = useState(0);
  const [page, setPage] = useState(1);
  return (
    <div className="quizz">
      {!data ? (
        <div>Loading...</div>
      ) : (
        data.map((question) => {
          return (
            <Question question={question} score={score} setScore={setScore} />
          );
        })
      )}
      <h2 className="score">
        Score {score} / {data.length}
      </h2>
      <>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </>
    </div>
  );
};

export default Quizz;
