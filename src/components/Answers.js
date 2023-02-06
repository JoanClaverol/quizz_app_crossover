import { useState } from "react";
import { Button, Container, Row, Col } from 'react-bootstrap';

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
  };

  return (
    <Container>
      <Row>
        {correct === null
          ? answers.map((answer) => (
              <Col xs={12} md={6} lg={4}>
                <Button
                  className="mb-3"
                  variant="primary"
                  onClick={(e) => handleClick(e)}
                  block
                >
                  {answer}
                </Button>
              </Col>
            ))
          : correct === true || correct === false
          ? correct ? (
              <Col xs={12}>
                <div className="text-center">Correct!</div>
              </Col>
            ) : (
              <Col xs={12}>
                <div className="text-center">Incorrect!</div>
              </Col>
            )
          : null}
      </Row>
    </Container>
  );
};

export default Answers;