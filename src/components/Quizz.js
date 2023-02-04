import Question from "./Question";

const Quizz = ({ score, setScore, data }) => {

  return (
    <div className="quizz">
      {!data ?
        <div>Loading...</div> :
        data.map((question) => {
          return <Question question={question} score={score} setScore={setScore} />
        }
        )}
    </div>

  );
}

export default Quizz;