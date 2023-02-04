import Answers from "./Answers";

const Question = ({ question, score, setScore }) => {

  return (
    <div className="question">
      <h3>{question.question}</h3>
      <Answers question={question} score={score} setScore={setScore} />
    </div>
  );
}

export default Question;