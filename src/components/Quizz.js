
import Question from "./Question";
import { Container, Row, Col, Spinner } from "react-bootstrap";

const Quizz = ({ score, setScore, data }) => {
  return (
    <Container>
      <Row>
        <Col>
          {!data ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            data.map((question) => {
              return <Question question={question} score={score} setScore={setScore} />;
            })
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Quizz;




