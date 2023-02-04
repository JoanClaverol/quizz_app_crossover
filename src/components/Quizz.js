import data from "../assets/data";
import Question from "./Question";

const Quizz = () => {
  return (
    <div className="quizz">
      {!data ?
        <div>Loading...</div> :
        data.map((question) => {
          return <Question question={question} />
        }
        )}
    </div>

  );
}

export default Quizz;