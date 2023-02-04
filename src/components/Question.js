import Answers from "./Answers";

const Question = ({ question }) => {

  return (
    <div className="question">
      <h2>{question.question}</h2>
      <Answers question={question} />
    </div>
  );
}

export default Question;