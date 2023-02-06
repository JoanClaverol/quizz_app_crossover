import { useState } from "react";
import { CardGroup, Pagination, Row, Spinner } from "react-bootstrap";
import Question from "./Question";

const ITEMS_PER_PAGE = 1;

const Quizz = ({ score, setScore, data }) => {

  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChangePrev = (page) => {
    if (currentPage === 0) {
      return;
    }
    setCurrentPage(currentPage - 1);
  }
  const handlePageChangeNext = (page) => {
    if (currentPage === data.length - 1) {
      return;
    }
    setCurrentPage(currentPage + 1);
  }

  return (
    <div className="quizz">
      {!data || !data.length ?
        <Spinner animation="border" /> :
        <Row xs={1} md={3} className="g-4" style={
          // add some margin
          { margin: '5px' }
        }>
          {
            data.map((question) => {
              return <Question question={question} score={score} setScore={setScore} />
            })
          }
        </Row>
      }
      <h1>-------------</h1>
      {!data ?
        <div>Loading...</div> :
        <>
          <button onClick={handlePageChangePrev}>Prev</button>
          <button onClick={handlePageChangeNext}>Next</button>
          <br></br>
          <>
            {/* {console.log(data[currentPage].question)} */}
            <Question question={data[currentPage]} score={score} setScore={setScore} />
          </>
        </>
      }

    </div>

  );
}

export default Quizz;