import Answers from "./Answers";

const Question = ({ question, score, setScore }) => {

  return (
    <div className="question">
      <h2>{question.question}</h2>
      <Answers question={question} score={score} setScore={setScore} />
    </div>
  );
}

export default Question;