import Answers from "./Answers";
import 'bootstrap/dist/css/bootstrap.min.css';


const Question = ({ question, score, setScore }) => {
  return (
    <div className="question">
      <h3 className="text-center font-weight-bold">{question.question}</h3>
      <Answers question={question} score={score} setScore={setScore} />
    </div>
  );
};

export default Question;




// const Question = ({ question, score, setScore }) => {

//   return (
//     <div className="question">
//       <h3>{question.question}</h3>
//       <Answers question={question} score={score} setScore={setScore} />
//     </div>
//   );
// }

// export default Question;