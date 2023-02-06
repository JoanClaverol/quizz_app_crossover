
import { Container, Row, Col } from "react-bootstrap";

const Header = ({ userName }) => {
  return (
    <header>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            {userName ?
              <h1 className="text-center">Welcome {userName} to a Trivia Quizz</h1> :
              <h1 className="text-center">Welcome to a Trivia Quizz,</h1>
            }
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;



