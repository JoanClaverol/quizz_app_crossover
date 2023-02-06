import { Card } from "react-bootstrap";
import Answers from "./Answers";

const Question = ({ question, score, setScore }) => {

  return (
    <Card className="question">
      <Card.Title>{question.question}</Card.Title>
      <Answers question={question} score={score} setScore={setScore} />
    </Card>
  );
}

export default Question;